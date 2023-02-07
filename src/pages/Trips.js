import { React, useContext, useState } from 'react';
import Trip from './Trip';
import { Link, 
    // useParams
} from 'react-router-dom';
import DataContext from '../context/DataContext';

const Trips = () => {
    const {trips,setResTrip,color,hoverColor} = useContext(DataContext);
    const [ n1 , setn1 ] = useState(true);
    const handn1 = () => {
            if(n1){setn1(false)}
            else{setn1(true)}
    }
    const [ n2 , setn2 ] = useState(true);
    const handn2 = () => {
            if(n2){setn2(false)}
            else{setn2(true)}
    }
//   console.log('Trips');
//   const {id} = useParams();
  return (
    <article className='container'>
        <div className='tripsschedul' style={{color:color}}>
            <div style={{margin:'0px'}}>الرحلات المتوفرة</div>
            <hr style={{width:'100%',marginTop:'5px',marginBottom:'5px'}}/>
            <div className='trip'>
                <p className='tripitem'> حجز</p>
                <p className='tripitem'>الوجهة </p>
                <p className='tripitem'> عدد المقاعد </p>
                <p className='tripitem'> تاريخ الرحلة</p>
                <p className='tripitem'> رقم تسلسلي</p>
            </div>
            <hr/>
            <div className='overflow' 
                // style={{height:"400px",overflow:"scroll"}}
            >
            {trips.map(trip => (
                <Trip 
                className=''
                key={trip.trip_id} 
                trip={trip}
                setResTrip={setResTrip}
                />
            ))}
            {!trips.length && <p style={{width:'100%',textAlign:'center',marginTop:'20px'}}>لا يوجد اي حجوزات لعرضها</p>}
            </div>
            <hr/>
            <div className='trip' style={{justifyContent:'center'}}>
                <Link 
                        // to={`/login/${id}/myreservation`}
                        to={`/login/myreservation`}
                        className='btn' 
                        style={{marginTop:"5px",borderRadius:"5px",
                                width:"120px",textDecoration:'none',
                                paddingTop:'',
                                backgroundColor:!n1 ? hoverColor : color , color:!n1?color:hoverColor,
                                border:`solid 1px ${color}`}}
                        onMouseEnter={handn1}
                        onMouseLeave={handn1}
                        // onClick={() => {}}    
                    >
                        حجوزاتي
                </Link>
                <Link 
                        to={`/login/userprofile`}
                        className='btn' 
                        style={{marginTop:"5px",borderRadius:"5px",
                                width:"120px",textDecoration:'none',
                                paddingTop:'',
                                backgroundColor:!n2 ? hoverColor : color , color:!n2?color:hoverColor,
                                border:`solid 1px ${color}`}}
                        onMouseEnter={handn2}
                        onMouseLeave={handn2}
                        // onClick={() => {}}    
                    >
                        ملفي الشخصي
                </Link>    
            </div> 
        </div>
    </article>
  )
}

export default Trips;