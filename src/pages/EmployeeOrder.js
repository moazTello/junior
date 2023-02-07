import React from 'react';
import { useContext, useState } from 'react';
import './Classes.css';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import useWindowSize from '../hooks/useWindowSize';
const EmployeeOrder = () => {
  const {handleEmployeeOrder,employeeJob,setEmployeeJob,employeeEmail,setEmployeeEmail,employeeLastName,setEmployeeLastName,employeeFirstName,setEmployeeFirstName,color,hoverColor} = useContext(DataContext);
  const { width } = useWindowSize(); 
//   console.log('About');
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
  return (
    <div className='container'>
        <div className='contactbox' style={{border:`solid 1px ${color}`}}>
           <form className='newclassform' style={{marginTop:"230px"}} onSubmit={handleEmployeeOrder} >
                <div className='addInput'>
                    <input 
                        className='inputs'
                        style={{padding:"4px",border:`solid 1px ${color}`,color:color}} 
                        id="username"
                        type="text"
                        required
                        value={employeeJob}
                        onChange={(e) => setEmployeeJob(e.target.value)}
                    />
                    <label htmlFor='username' style={{
                        // color:"rgb(254,109,81)"
                        color:color,marginTop:"20px"
                        }}>المسمى الوظيفي</label>
                
                <input 
                        className='inputs' 
                        style={{padding:"4px",border:`solid 1px ${color}`,color:color}} 
                        id="username"
                        type="text"
                        required
                        value={employeeEmail}
                        onChange={(e) => setEmployeeEmail(e.target.value)}
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
                        value={employeeLastName}
                        onChange={(e) => setEmployeeLastName(e.target.value)}
                    />
                    <label htmlFor='username' style={{
                        // color:"rgb(254,109,81)"
                        color:color,marginTop:"20px"
                        }}>الكنية</label>
                <input 
                        className='inputs'
                        style={{padding:"4px",border:`solid 1px ${color}`,color:color}} 
                        id="username"
                        type="text"
                        required
                        value={employeeFirstName}
                        onChange={(e) => setEmployeeFirstName(e.target.value)}
                    />
                    <label htmlFor='username' style={{
                        // color:"rgb(254,109,81)"
                        color:color,marginTop:"20px"
                        }}>اسم المرسل</label>
                    <h3 style={{color:color}}>طلب توظيف</h3>
                </div> 
                <div className='addInput' style={{height: width>650 ?'80px' : '40px',padding:width > 650 ?'10px' : '0px',display:"flex",flexDirection:"row"}}>
                    <Link to="/junior" 
                            className='btn'
                            onMouseEnter={handn1}
                            onMouseLeave={handn1} 
                            style={{textDecoration:"none",fontSize:"14px",
                                    backgroundColor:!n1 ? hoverColor : color , color:!n1?color:hoverColor ,border:`solid 1px ${color}`}}>
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
                            backgroundColor:!n2 ? hoverColor : color , 
                            color:!n2?color:hoverColor ,border:`solid 1px ${color}`
                        }}>
                        ارسال 
                    </button>
                </div>           
           </form>
        </div>
    </div>
  )
}

export default EmployeeOrder;