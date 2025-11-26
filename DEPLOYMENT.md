# دليل النشر - أكاديمية ستارن

## نشر المشروع على Replit

### الطريقة الأولى: عبر Replit (الأسهل)

1. **إنشاء مشروع على Replit**
   - اذهب إلى [Replit](https://replit.com)
   - انقر على "+ Create" 
   - اختر "Node.js"

2. **رفع الملفات**
   - اسحب وأفلت المجلدات:
     - `client/`
     - `server/`
     - `shared/`
   - انسخ `package.json` و `tsconfig.json` والملفات الأخرى

3. **إعداد البيئة**
   - انقر على "Secrets" 
   - أضف المتغيرات:
     ```
     DATABASE_URL=your_database_url
     GOOGLE_SHEET_ID=your_sheet_id
     ```

4. **تشغيل المشروع**
   - اضغط "Run"
   - المشروع سيبدأ تلقائياً

---

## نشر في بيئة الإنتاج

### استخدام Docker (اختياري)

أنشئ ملف `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

# نسخ الملفات
COPY package*.json ./
RUN npm ci --only=production

COPY client ./client
COPY server ./server
COPY shared ./shared

# بناء التطبيق
RUN npm run build

EXPOSE 5000

ENV NODE_ENV=production
CMD ["npm", "start"]
```

### استخدام Vercel

1. ادفع المشروع إلى GitHub
2. اذهب إلى [Vercel](https://vercel.com)
3. انقر على "New Project"
4. اختر مشروعك من GitHub
5. أضف متغيرات البيئة
6. انقر "Deploy"

---

## التحقق من البيانات

### اختبار نموذج الحجز

```bash
curl -X POST http://localhost:5000/api/enrollments \
  -H "Content-Type: application/json" \
  -d '{
    "childName": "أحمد",
    "childAge": 12,
    "schoolType": "حكومي",
    "location": "القاهرة",
    "parentName": "محمد",
    "parentPhone": "01234567890",
    "course": "مقدمة في البرمجة",
    "preferredSchedule": "مساءً"
  }'
```

### الحصول على جميع الحجوزات

```bash
curl http://localhost:5000/api/enrollments
```

---

## إعداد Google Sheets

### خطوات البدء

1. **إنشاء جدول بيانات**
   - اذهب إلى [Google Sheets](https://sheets.google.com)
   - انقر على "إنشاء" > "جدول بيانات فارغ"
   - أعط اسماً للجدول (مثل: "حجوزات أكاديمية ستارن")

2. **إضافة رؤوس الأعمدة**
   - في الخلية A1: `التاريخ والوقت`
   - في الخلية B1: `اسم الطفل`
   - في الخلية C1: `العمر`
   - في الخلية D1: `نوع المدرسة`
   - في الخلية E1: `المنطقة`
   - في الخلية F1: `اسم ولي الأمر`
   - في الخلية G1: `رقم الهاتف`
   - في الخلية H1: `الدورة`
   - في الخلية I1: `الوقت المفضل`

3. **الحصول على معرف الجدول**
   - انسخ عنوان URL:
   ```
   https://docs.google.com/spreadsheets/d/SHEET_ID/edit#gid=0
   ```
   - `SHEET_ID` هو المعرف المطلوب

4. **إضافة المتغير البيئي**
   ```
   GOOGLE_SHEET_ID=SHEET_ID
   ```

---

## إعداد Google Apps Script

### البديل لـ Google Sheets API

1. **انسخ الكود**
   - اذهب إلى جدول Google Sheets
   - انقر على "Tools" > "Script editor"
   - انسخ محتوى `scripts/google-app-script.gs`

2. **نشر كـ Web App**
   - انقر على "Deploy" > "New deployment"
   - اختر "Web app"
   - في "Execute as": اختر حسابك
   - في "Who has access": اختر "Anyone"
   - انقر "Deploy"

3. **نسخ الرابط**
   - انسخ الـ URL المتاح للجميع

4. **الاستخدام**
   ```
   GOOGLE_APPS_SCRIPT_WEBHOOK=your_webhook_url
   ```

---

## مراقبة الأداء

### التحقق من السجلات

```bash
# سجلات الخادم
npm run logs

# سجلات قاعدة البيانات
psql -U user -d dbname -c "SELECT * FROM enrollments LIMIT 10;"
```

### الإحصائيات

- عدد الحجوزات: `SELECT COUNT(*) FROM enrollments;`
- الحجوزات اليوم: `SELECT COUNT(*) FROM enrollments WHERE DATE(created_at) = TODAY;`

---

## استكشاف الأخطاء

### مشكلة: لا تظهر الحجوزات في Google Sheets

**الحل:**
1. تحقق من `GOOGLE_SHEET_ID` صحيح
2. تأكد من أن الجدول لديه رؤوس أعمدة صحيحة
3. افتح وحدة تحكم المتصفح للأخطاء
4. راجع سجلات الخادم

### مشكلة: خطأ في الاتصال بقاعدة البيانات

**الحل:**
1. تحقق من `DATABASE_URL` صحيح
2. تأكد من أن قاعدة البيانات نشطة
3. أعد تشغيل التطبيق

### مشكلة: المشروع بطيء

**الحل:**
1. قم بتحسين استعلامات البيانات
2. أضف فهارس (Indexes) للجداول المهمة
3. استخدم CDN للملفات الثابتة

---

## نصائح الأمان

✓ استخدم HTTPS دائماً
✓ لا تشارك متغيرات البيئة
✓ حدّث المكتبات بانتظام
✓ استخدم كلمات مرور قوية
✓ قم بعمل نسخ احتياطية دورية

---

## الدعم

إذا واجهت مشكلة:
- تحقق من هذا الملف
- اقرأ السجلات بعناية
- تواصل عبر الواتساب: [01142965661](https://wa.me/01142965661)

---

**آخر تحديث:** نوفمبر 2024
