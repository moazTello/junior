import React from 'react';
import { useContext,useState } from 'react';
import './Classes.css';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import useWindowSize from '../hooks/useWindowSize';
const ContactUs = () => {
  const {FeedBack,setFeedBack,handleFeedBack,emailsender,setEmailsender,personFeed,setPersonFeed,color,hoverColor} = useContext(DataContext);
  const { width } = useWindowSize();
  const [ n1 , setn1 ] = useState(true);
  const [ n2 , setn2 ] = useState(true);
  const handn1 = () => {
    if(n1){setn1(false)}
    else{setn1(true)}
  }
  const handn2 = () => {
    if(n2){setn2(false)}
    else{setn2(true)}
  }
//   console.log('About');
  return (
    <div className='container'>
        <div className='contactbox' height="700px" style={{border:`solid 1px ${color}`,color:color}}>
           <form className='newclassform' style={{marginTop:"180px"}} onSubmit={handleFeedBack} >
                <div className='addInput'> 
                    <input 
                        className='inputs'
                        style={{padding:"4px",border:`solid 1px ${color}`,color:color}} 
                        id="username"
                        type="text"
                        required
                        value={FeedBack}
                        onChange={(e) => setFeedBack(e.target.value)}
                    />
                    <label htmlFor='username' style={{
                        // color:"rgb(254,109,81)"
                        color:color,marginTop:"20px"
                        }}>الرسالة المراد ارسالها الى الشركة</label>
                
                <input 
                        className='inputs' 
                        style={{padding:"4px",border:`solid 1px ${color}`,color:color}} 
                        id="username"
                        type="text"
                        required
                        value={emailsender}
                        onChange={(e) => setEmailsender(e.target.value)}
                    />
                    <label htmlFor='username' style={{
                        // color:"rgb(254,109,81)"
                        color:color,marginTop:"20px"
                        }}>عنوان البريد الالكتروني</label> 
                <input 
                        className='inputs'
                        style={{padding:"4px",border:`solid 1px ${color}`,color:color}} 
                        id="username"
                        type="text"
                        required
                        value={personFeed}
                        onChange={(e) => setPersonFeed(e.target.value)}
                    />
                    <label htmlFor='username' style={{
                        // color:"rgb(254,109,81)"
                        color:color,marginTop:"20px"
                        }}>اسم المرسل</label>
                    <h3>تواصل معنا</h3>
                    
                </div> 
                <div className='addInput' style={{height: width>650 ?'80px' : '40px',padding:width > 650 ?'10px' : '0px',display:"flex",flexDirection:"row"}}>
                    <Link to="/junior" 
                            className='btn'
                            onMouseEnter={handn1}
                            onMouseLeave={handn1} 
                            style={{textDecoration:"none",fontSize:"14px",backgroundColor:!n1 ? hoverColor : color , color:!n1?color:hoverColor ,border:`solid 1px ${color}`}}>
                                عودة
                    </Link>
                    <button 
                        id='loginbtn' 
                        type='submit' 
                        className='btn' 
                        onMouseEnter={handn2}
                        onMouseLeave={handn2} 
                        style={{
                            // marginRight:valh
                            backgroundColor:!n2 ? hoverColor : color , color:!n2?color:hoverColor
                            ,border:`solid 1px ${color}`
                        }}>
                        ارسال 
                    </button>
                </div>           
           </form>
        </div>
    </div>
  )
}

export default ContactUs;