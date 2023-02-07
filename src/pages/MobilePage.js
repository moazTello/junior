import React from 'react';
import './Classes.css';
import mob from '../images/mobile2.png';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
const MobilePage = () => {
  const {color} = useContext(DataContext);
  // console.log('Mobile');
  return (
    <article className='container'>
      <div className='about'style={{width:"40%",height:"fit-content",overflowY:"scroll",color:color}}>
        <h3>احصل على التطبيق الخاص بالشركة فور رفعه على المنصة</h3><br/><br/>
        <img style={{width:"100%"}} src={mob} alt=""/>
      </div>
    </article>
  )
}

export default MobilePage;