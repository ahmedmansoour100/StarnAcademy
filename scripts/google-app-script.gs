/**
 * Google Apps Script - استقبال بيانات الحجز من أكاديمية ستارن
 * 
 * خطوات الإعداد:
 * 1. اذهب إلى Google Sheets
 * 2. انقر على Tools > Script Editor
 * 3. انسخ هذا الكود
 * 4. احفظ واضغط Deploy > New deployment > Web app
 * 5. اختر Execute as: Your account
 * 6. Grant access وانسخ الرابط المتاح للجميع
 * 7. استخدم الرابط في التطبيق كـ GOOGLE_APPS_SCRIPT_WEBHOOK
 */

// الحصول على الجدول النشط
const sheet = SpreadsheetApp.getActiveSheet();

/**
 * دالة رئيسية لاستقبال البيانات عبر POST request
 */
function doPost(e) {
  try {
    // الحصول على البيانات المرسلة
    const data = JSON.parse(e.postData.contents);
    
    // التحقق من وجود البيانات المطلوبة
    if (!data.childName || !data.parentName) {
      return ContentService.createTextOutput('Error: Missing required fields').setMimeType(ContentService.MimeType.TEXT);
    }
    
    // التاريخ والوقت الحالي بتوقيت مصر
    const now = new Date();
    const egyptTime = new Date(now.toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' }));
    const timestamp = egyptTime.toLocaleString('ar-EG');
    
    // إعداد صف البيانات
    const row = [
      timestamp,
      data.childName || '',
      data.childAge || '',
      data.schoolType || '',
      data.location || '',
      data.parentName || '',
      data.parentPhone || '',
      data.course || '',
      data.preferredSchedule || ''
    ];
    
    // إضافة الصف إلى الجدول
    sheet.appendRow(row);
    
    // إنشاء مجموعة بيانات معلومات الطلب
    const timestamp_log = new Date().toISOString();
    const log_row = [
      timestamp_log,
      'حجز جديد',
      data.childName,
      'تم بنجاح'
    ];
    
    // يمكنك إضافة السجل إلى جدول منفصل للمتابعة
    // logSheet.appendRow(log_row);
    
    // إرجاع رد نجاح
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'تم استقبال الحجز بنجاح',
      data: {
        childName: data.childName,
        timestamp: timestamp
      }
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // معالجة الأخطاء
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: 'حدث خطأ في معالجة الطلب: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * دالة GET للاختبار (اختيارية)
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    message: 'Google Apps Script جاهز لاستقبال البيانات',
    usage: 'أرسل POST request مع البيانات التالية: childName, childAge, schoolType, location, parentName, parentPhone, course, preferredSchedule'
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * دالة اختبار محلية (للاختبار فقط)
 */
function testPostRequest() {
  const testData = {
    childName: 'أحمد محمد',
    childAge: '12',
    schoolType: 'حكومي',
    location: 'القاهرة',
    parentName: 'محمد علي',
    parentPhone: '01234567890',
    course: 'مقدمة في البرمجة (شهرين)',
    preferredSchedule: 'مساءً بعد المدرسة'
  };
  
  // محاكاة طلب POST
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(e);
  Logger.log('Test Result:');
  Logger.log(result.getContent());
}

/**
 * دالة لعرض جميع الحجوزات (اختيارية)
 */
function getAllBookings() {
  const data = sheet.getDataRange().getValues();
  Logger.log('عدد الحجوزات: ' + (data.length - 1)); // -1 لاستخراج رؤوس الأعمدة
  
  // عرض أخر 5 حجوزات
  for (let i = Math.max(1, data.length - 5); i < data.length; i++) {
    Logger.log('الحجز ' + (i) + ': ' + data[i].join(' | '));
  }
}

/**
 * دالة لحذف البيانات المكررة (اختيارية)
 */
function removeDuplicates() {
  const data = sheet.getDataRange().getValues();
  const unique = [];
  const seen = {};
  
  for (let i = 1; i < data.length; i++) { // تخطي رؤوس الأعمدة
    const key = data[i][1] + '|' + data[i][5]; // مفتاح فريد (اسم الطفل + ولي الأمر)
    if (!seen[key]) {
      unique.push(data[i]);
      seen[key] = true;
    }
  }
  
  // حذف جميع الصفوف وإضافة البيانات الفريدة فقط
  sheet.clearContents();
  sheet.appendRow(['التاريخ والوقت', 'اسم الطفل', 'العمر', 'نوع المدرسة', 'المنطقة', 'اسم ولي الأمر', 'رقم الهاتف', 'الدورة', 'الوقت المفضل']);
  
  if (unique.length > 0) {
    sheet.getRange(2, 1, unique.length, unique[0].length).setValues(unique);
  }
  
  Logger.log('تم حذف ' + (data.length - 1 - unique.length) + ' صف مكرر');
}
