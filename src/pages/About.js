import React from 'react';

const About = () => {
  console.log('About');
  return (
    <div className='container'>
      <p>
      هذه الواجهات خاصة بالموظف لادخال بيانات المدرسة
      </p>      
      <p>
      يمكنك اختيار الصفوف لاجراء عمليات الاضافة و الازالة و التعديل على الصفوف 
      </p>
      <p>اضافة صف جديد باختيار مستوى الصف و الشعبة و المعلم المشرف على الصف و الحد الاقصى من الطلاب داخل الصف</p>
      <p>بعد عملية انشاء الصف يمكنك الدخول على معلومات الصف لادخال طلاب الصف و معلمين الصف و ازالتهم </p>
      <p>لا يمكنك اضافة الطلاب او المعلمين الا بعد اضافتهم الى سجل المدرسة من واجة الطلاب و المعلمين </p> 
      <p>لا يمكنك تعديل معلومات الطالب الا بازالته الى خارج الصف</p>
      <p>لا يمكنك اضافة الطالب الا الى صف واحد</p>
      <p>يمكنك اضافة المعلم الى اكثر من صف </p>
      <p>لاضافة انذار الى الطالب يجب الدخول الى صفحة الطالب من داخل الصف</p>

    </div>
  )
}

export default About;