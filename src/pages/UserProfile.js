import { React, useContext } from 'react';
import { Link} from 'react-router-dom';
import DataContext from '../context/DataContext';

const UserProfile = () => {
    const {logedInUser} = useContext(DataContext);
//   console.log('myProfile');
  return (
    <article className='container'>
        <div className='tripsschedul'>
            <div style={{margin:'0px'}}>الملف الشخصي</div>
            <hr style={{width:'100%',marginTop:'5px',marginBottom:'5px'}}/>
            <div className='trip'>
                <div className='trip'
                    style={{flexDirection:'column',justifyContent:'space-evenly',height:'180px'}}>
                    <p className='tripitem'>{logedInUser.name}</p>
                    <p className='tripitem'>{logedInUser.fathername}</p>
                    <p className='tripitem'>{logedInUser.mothername}</p>
                    <p className='tripitem'>{logedInUser.birthdate}</p>
                    <p className='tripitem'>{logedInUser.address}</p>
                    <p className='tripitem'>{logedInUser.iss}</p>
                    <p className='tripitem'>{logedInUser.trip_availabel}</p>
                </div>
                <div className='trip' 
                    style={{flexDirection:'column',height:'180px'}}>
                    <p className='tripitem'> الاسم </p>
                    <p className='tripitem'>اسم الاب </p>
                    <p className='tripitem'>  اسم الام </p>
                    <p className='tripitem'> تاريخ الميلاد </p>
                    <p className='tripitem'>  العنوان </p>
                    <p className='tripitem'> الرقم الوطني </p>
                    <p className='tripitem'>  عدد الرحلات </p>
                </div>
            </div>
            <hr style={{width:'100%',marginTop:'5px',marginBottom:'5px'}}/>
            <Link 
                    to={`/login/alltrips`}
                    className='btn' 
                    style={{marginTop:"5px",borderRadius:"5px",
                            width:"80px",textDecoration:'none',
                            paddingTop:''}}
                    // onClick={() => {}}    
                >
                    عودة
            </Link> 
        </div>
    </article>
  )
}

export default UserProfile;