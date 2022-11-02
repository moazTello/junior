import React from 'react';
import './Classes.css'
const About = () => {
  console.log('About');
  return (
    <article className='container'>
      <p style={{width:'400px',height:'400px',padding:'30px',
                 borderRadius:'20px',color:'rgb(254,109,81)',
                 backgroundColor:'rgba(255,255,255,80%)',
                 textAlign:'center'}}>
      شركة ترافيل للنقل هي شركة قابضة في مجال نقل الركاب و السفر البري تأسست الشركة عام ١٩٤٠ و تعتبر الشركة
      من افضل شركات النقل حيث تؤمن لركابها افضل وسائل الراحة و الأمان لكل المسافرين على متن باصات الشركة 
   
      </p>
    </article>
  )
}

export default About;