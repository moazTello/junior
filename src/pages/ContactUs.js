import React from 'react';
import './Classes.css'
const ContactUs = () => {
  console.log('About');
  return (
    <article className='container'>
      <p style={{width:'400px',height:'400px',padding:'30px',
                 borderRadius:'20px',color:'rgb(254,109,81)',
                 backgroundColor:'rgba(255,255,255,80%)',
                 textAlign:'center'}}>
                    <p>المقر الرئيسي للشركة : 0999999999</p>
                    <p>مكتب الاستعلامات : 0999999999</p> 
                    <p>مكتب المحاسبة : 0999999999</p> 
                    <p>مكتب التوظيف : 0999999999</p> 
                    <p>مكتب الموارد البشرية : 0999999999</p> 
                    <p>خدمة الزبائن : 0999999999</p> 
                    <p>الشكاوي : 0999999999</p> 
                    <p>الطوارئ : 0999999999</p> 
                    <p>لابريد الالكتروني : travel@gmail.com</p>  
      </p>
    </article>
  )
}

export default ContactUs;