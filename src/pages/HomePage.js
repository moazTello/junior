import React from 'react';
import homebus from '../images/homebus.svg';
import { FaBus,FaToilet,FaHeadphonesAlt } from 'react-icons/fa';
import {GiSandwich} from 'react-icons/gi';
import {AiOutlineWifi} from 'react-icons/ai';
import {MdOutlineAirlineSeatReclineExtra} from 'react-icons/md';
const HomePage = () => {
  return (
    <div className='container' style={{overflow:'',height:'fit-content',flexDirection:'column'}}>
       <div className='homeimge'>
         <img className='busimg' src={homebus} alt=''/>
       </div>
       <div className='homesecdiv'>
        <div className='why'>
          لماذا شركة ترافيل للنقل البري ؟
        </div>
        <div style={{width:'100%',paddingTop:'50px',paddingBottom:'50px',display:'flex',justifyContent:'center',flexFlow:'wrap'}}>
          <div className='iconscontainer'>
            <FaBus className='icons'/>
            <p className='iconstext'>باصات حديثة و مكيفة</p>  
          </div>
          <div className='iconscontainer'>
            <GiSandwich className='icons'/>
            <p className='iconstext'>تناول وجبة خفيفة </p>  
          </div>
          <div className='iconscontainer'>
            <FaToilet className='icons'/>
            <p className='iconstext'>حمام داخل الباص</p>  
          </div>
          <div className='iconscontainer'>
            <AiOutlineWifi className='icons'/>
            <p className='iconstext'>شبكة انترنت مجانية</p>  
          </div>
          <div className='iconscontainer'>
            <FaHeadphonesAlt className='icons'/>
            <p className='iconstext'>موسقى هادئة ضمن الباص</p>  
          </div>
          <div className='iconscontainer'>
            <MdOutlineAirlineSeatReclineExtra className='icons'/>
            <p className='iconstext'>مقاعد مريحة</p>  
          </div>
        </div>
       </div>
    </div>
  )
}

export default HomePage;