import React from 'react';
import './Classes.css';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
const About = () => {
  const {color} = useContext(DataContext);
  // console.log('About');
  return (
    <article className='container'>
     
      <div className='about' style={{color:color}}>
        <h1>حول الشركة</h1>
        <br/>
        <p>
         شركة ترافيل للنقل هي شركة قابضة في مجال نقل الركاب و السفر البري تأسست الشركة عام ١٩٤٠ و تعتبر الشركة
         من افضل شركات النقل حيث تؤمن لركابها افضل وسائل الراحة و الأمان لكل المسافرين على متن باصات الشركة 
        </p>
      </div>
      <br/>
      <p></p>
    </article>
  )
}

export default About;