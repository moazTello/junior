import React from 'react';
import LoginPerson from '../images/LoginPerson.svg';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';


const LogIn = ({userName,setUserName,handleSubmitlogin,password,setPassword}) => {
    const [hover,setHover] = useState(false);
    const [ valh,setValh ] = useState('60px');
    useEffect(() => {
        if(userName && password !== '' ){
            setValh('60px'); 
        }
        else{
            if(hover === false){setValh('170px')}
            else{setValh('-50px')}
        }
    },[password,userName,hover])
    const trigger = () => {
        if(userName && password !== '' ){
            setValh('60px'); 
        }
        else{
            setHover(!hover)
            if(hover === false){setValh('170px')}
            else{setValh('-50px')}
        }
    }
    return (
    <div className='container'>
        <div className='loginbox'>
           <img src={LoginPerson} alt='' className='LoginPerson'/>
           <form className='newclassform' onSubmit={handleSubmitlogin} >
                <div className='addInput'> 
                    <input 
                        className='inputs' 
                        id="username"
                        type="text"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <label htmlFor='username' style={{color:"rgb(254,109,81)"}}>رقم الجوال</label>
                </div> 
                <div className='addInput'> 
                    <input 
                        className='inputs' 
                        id="password"
                        type="text"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor='password' style={{color:"rgb(254,109,81)"}}>كلمة المرور</label>
                </div>
                <div className='addInput' style={{height:'80px',padding:'10px'}}>
                    <p>اذا كنت لا تمتلك حسابآ
                        <Link to='/' className='link' style={{marginRight:'10px'}}>انشاء حساب</Link> 
                    </p>
                    <button 
                        id='loginbtn' 
                        type='submit' 
                        className='btn' 
                        onMouseOver={trigger} 
                        style={{
                            marginRight:valh
                        }}>
                    تسجيل الدخول
                    </button>
                </div>           
           </form>
        </div>
    </div>
  )
}

export default LogIn;