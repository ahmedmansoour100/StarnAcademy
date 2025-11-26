# Google Sheets Integration - دليل الإعداد

## نظرة عامة
تم دمج Google Sheets API في نموذج الحجز ليتم حفظ بيانات الطلاب تلقائياً في جدول بيانات Google.

## متطلبات الإعداد

### 1. إنشاء جدول Google Sheets

1. اذهب إلى [Google Sheets](https://sheets.google.com)
2. أنشئ جدول بيانات جديد أو استخدم جدول موجود
3. أضف رؤوس الأعمدة في الصف الأول:
   ```
   التاريخ والوقت | اسم الطفل | العمر | نوع المدرسة | المنطقة | اسم ولي الأمر | رقم الهاتف | الدورة | الوقت المفضل
   ```
   أو بالإنجليزية:
   ```
   Timestamp | Child Name | Age | School Type | Location | Parent Name | Phone | Course | Preferred Schedule
   ```

### 2. الحصول على معرف الجدول

1. انسخ عنوان URL الخاص بالجدول
2. معرف الجدول يكون بهذا الشكل في الـ URL:
   ```
   https://docs.google.com/spreadsheets/d/SHEET_ID/edit#gid=0
   ```
   قيمة `SHEET_ID` هي ما تحتاجه

### 3. إعداد المتغير البيئي

أضف المتغير التالي في إعدادات البيئة:

```
GOOGLE_SHEET_ID=your_sheet_id_here
```

## كيفية العمل

عند إرسال نموذج الحجز:

1. يتم التحقق من صحة البيانات
2. يتم حفظ البيانات في قاعدة البيانات PostgreSQL
3. يتم إرسال البيانات تلقائياً إلى Google Sheets
4. يتم إضافة timestamp بتوقيت مصر (Cairo)

## مثال الكود

### Backend (Node.js)
```javascript
import { google } from 'googleapis';

// الحصول على عميل Google Sheets
export async function getUncachableGoogleSheetClient() {
  const accessToken = await getAccessToken();
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });
  return google.sheets({ version: 'v4', auth: oauth2Client });
}

// إضافة بيانات الحجز
export async function appendEnrollmentToSheet(enrollmentData) {
  const sheets = await getUncachableGoogleSheetClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  
  const row = [
    new Date().toLocaleString('ar-EG'),
    enrollmentData.childName,
    enrollmentData.childAge.toString(),
    enrollmentData.schoolType,
    enrollmentData.location,
    enrollmentData.parentName,
    enrollmentData.parentPhone,
    enrollmentData.course,
    enrollmentData.preferredSchedule
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A:I',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [row] }
  });
}
```

## الملفات المرتبطة

- `server/googleSheets.ts` - عميل Google Sheets
- `server/routes.ts` - نقاط نهاية API
- `client/src/pages/Contact.tsx` - نموذج الحجز

## الأمان

- لا يتم تخزين مفاتيح API في الكود
- يتم استخدام متغيرات البيئة المشفرة
- الاتصال يتم عبر HTTPS فقط

## استكشاف الأخطاء

إذا لم يتم حفظ البيانات:

1. تحقق من أن `GOOGLE_SHEET_ID` محدد بشكل صحيح
2. تأكد من أن الاتصال بـ Google Sheets معاد بشكل صحيح
3. افتح وحدة تحكم المتصفح لمراجعة الأخطاء
4. راجع سجلات الخادم في terminal

## خيار بديل: Google Apps Script Webhook

إذا كنت تفضل استخدام Google Apps Script بدلاً من Google Sheets API:

```javascript
// Google Apps Script في Google Sheets
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.childName,
    data.childAge,
    data.schoolType,
    data.location,
    data.parentName,
    data.parentPhone,
    data.course,
    data.preferredSchedule
  ]);
  
  return ContentService.createTextOutput('OK');
}
```

ثم عدّل `server/googleSheets.ts`:
```javascript
export async function appendEnrollmentToSheet(enrollmentData) {
  const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK;
  
  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(enrollmentData)
  });
}
```
