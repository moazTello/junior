import React from 'react';
import './Classes.css';
import mob from '../images/mobile2.png';
const MobilePage = () => {
  console.log('Mobile');
  return (
    <article className='container'>
      <div className='about'style={{width:"40%",height:"fit-content",overflowY:"scroll"}}>
        <h3>احصل على التطبيق الخاص بالشركة فور رفعه على المنصة</h3><br/><br/>
        <img style={{width:"100%"}} src={mob} alt=""/>
      </div>
    </article>
  )
}

export default MobilePage;