# موقع السمنرات الجامعية - دليل سريع

## تشغيل الموقع محلياً
افتح `index.html` بالمتصفح (دبل كليك). 

## إضافة سمنر جديد (5 خطوات)
1. انسخ مجلد `seminars/hash-tables` وسمّه باسم جديد، مثلاً `seminars/intrusion-detection`.
2. عدّل `index.html` داخل المجلد الجديد (العنوان والمحتوى والمراجع). `style.css` جاهز.
3. افتح `js/seminars.js` وانسخ كتلة `{ ... }` وضعها بعد فاصلة:
```js
{
  id: "02",
  title: "Intrusion Detection Systems",
  description: "وصف قصير بالعربية.",
  date: "2026-10-20",          // الأحدث تاريخاً يظهر أولاً
  category: "Network Security",
  url: "seminars/intrusion-detection/",
  language: "English",
  status: "متاح للقراءة",
  icon: "🛡️"
}
```
4. احفظ وافتح الموقع للتأكد.
5. ارفع الملفات المحدثة.

## النشر المجاني على GitHub Pages
1. أنشئ حساباً في github.com ثم مستودعاً جديداً (New repository) باسم مثل `academic-portfolio`، واجعله Public.
2. اضغط "uploading an existing file" وارفع **محتويات** المجلد (يجب أن يكون `index.html` في الجذر).
3. من Settings > Pages اختر Branch: `main` والمجلد `/ (root)` ثم Save.
4. بعد دقائق يظهر الرابط في نفس الصفحة، وشكله: `https://USERNAME.github.io/academic-portfolio/`
5. رابط سمنر معين: أضف مساره، مثل `.../academic-portfolio/seminars/hash-tables/`
6. للتحديث: ارفع الملفات المعدلة (Add file > Upload files) وانتظر دقائق.

لا يوجد رابط عام قبل إتمام النشر. جميع الروابط في المشروع نسبية فتعمل بعد الرفع.
