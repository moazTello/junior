import React from 'react';
import './Classes.css'
const Team = () => {
  // console.log('Condetions');
  return (
    <article className='container'>
      <div className='about'style={{width:"40%",height:"400px",overflowY:"scroll"}}>
        <h1>الفريق</h1>
        <br/>
        <p>تم إنشاء هذه الشركة باشراف كل من </p>
        <br/>
        <p>الدكتور : طارق برهوم</p>
        <br/>
        <p>المهندس : محمد المصري</p>
        <br/>
        <p>المهندس : محمد معاذ تللو </p>
        <br/>
        <p>المهندس : أحمد عبيد</p>
        <br/>
        <p> المهندس : وسيم قصقص</p>
        <br/>
        <p>المهندس : ياسر الصمصام</p>
        <br/>
        <p>المهندسة : ماسة الزايد</p>
        <br/>
        <p>و بالضمانة الاستراتيجية من شركة ترافيل للسياحة و السفر و بجهود المساهمين لإقامة و إنجاح هذا المشروع</p>
        <br/>
       </div>
    </article>
  )
}

export default Team;