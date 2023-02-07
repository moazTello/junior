import React from 'react';
import LoginPerson from '../images/LoginPerson.svg';
import { Link } from 'react-router-dom';
import { useEffect,useState,useContext } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import DataContext from '../context/DataContext';

const LogIn = () => {
    const {userName,setUserName,handleSubmitlogin,password,setPassword,color,hoverColor} = useContext(DataContext);
    const { width } = useWindowSize();
    const [hover,setHover] = useState(false);
    const [ valh,setValh ] = useState('60px');
    const [n1,setn1] = useState(false);
    useEffect(() => {
        if(width > 650){
            if(userName && password !== '' ){
                setValh('60px'); 
            }
            else{
                if(hover === false){setValh('170px')}
                else{setValh('-50px')}
            }
        }
        else{
            setValh('41px'); 
        }
    },[password,userName,hover,width])
    const trigger = () => {
        if(!n1){setn1(true)}
        if(width > 650){
            if(userName && password !== '' ){
                setValh('60px'); 
            }
            else{
                setHover(!hover)
                if(hover === false){setValh('170px')}
                else{setValh('-50px')}
            }
        }
        else{
            setValh('41px'); 
        }
    }
    const hoven1 = () => {
        if(n1){setn1(false)}
    }
    const Register = () => {
        alert('عذرآ تم الغاء التسجيل من خارج الشركة يمكنك التسجيل فقط ضمن الشركة');
    }
    return (
    <div className='container' >
        <div className='loginbox' style={{border:`solid 1px ${color}`}}>
           <img src={LoginPerson} alt='' className='LoginPerson'/>
           <form className='newclassform' onSubmit={handleSubmitlogin} >
                <div className='addInput' > 
                    <input 
                        style={{border:`solid 1px ${color}`,color:color}}
                        className='inputs' 
                        id="username"
                        type="text"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <label htmlFor='username' style={{
                        color:color
                        }}>رقم الجوال</label>
                </div> 
                <div className='addInput'> 
                    <input
                        style={{border:`solid 1px ${color}`,color:color}} 
                        className='inputs' 
                        id="password"
                        type="text"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor='password' style={{
                        color:color
                        }}>كلمة المرور</label>
                </div>
                <div className='addInput' style={{height: width>650 ?'80px' : '40px',padding:width > 650 ?'10px' : '0px'}}>
                    <p style={{color:color}}>اذا كنت لا تمتلك حسابآ
                        <Link to='/contactus' className='link' onClick={Register} style={{marginRight:'10px'}}>انشاء حساب</Link> 
                    </p>
                    <button 
                        id='loginbtn' 
                        type='submit' 
                        className='btn' 
                        onMouseOver={trigger}
                        onMouseLeave={hoven1} 
                        style={{
                            marginRight:valh,
                            color:!n1 ? hoverColor : color,
                            backgroundColor:!n1 ? color : hoverColor,
                            border:`solid 1px ${color}`
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