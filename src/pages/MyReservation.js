import React from 'react';
import UserTrip from './UserTrip';
import { Link, useParams } from 'react-router-dom';
const MyReservation = ({userTrips,handleDeleteTripUser}) => {
  console.log('Trips');
  const {id} = useParams();
  return (
    <article className='container'>
        <div className='tripsschedul'>
            <div style={{margin:'0px'}}>الحجوزات التي قمت بها </div>
            <hr style={{width:'100%',marginTop:'5px',marginBottom:'5px'}}/>
            <div className='trip'>
                <p className='tripitem'> الغاء</p>
                <p className='tripitem'>الوجهة </p>
                <p className='tripitem'> عدد المقاعد </p>
                <p className='tripitem'> تاريخ الرحلة</p>
                <p className='tripitem'> رقم تسلسلي</p>
            </div>
            <hr/>
            <div className='overflow' 
                // style={{height:"400px",overflow:"scroll"}}
            > 
            {userTrips.map(trip => (
                <UserTrip className=''key={trip.id_trip} 
                trip={trip}
                handleDeleteTripUser={handleDeleteTripUser} />
            ))}
            {!userTrips.length && <p style={{width:'100%',textAlign:'center',marginTop:'20px'}}>لا يوجد لديك اي حجوزات لعرضها</p>}
            </div>
            <hr/>
            <Link 
                    to={`/login/${id}`}
                    className='btn' 
                    style={{marginTop:"5px",borderRadius:"5px",
                            width:"80px",textDecoration:'none',
                            paddingTop:'4px'}}
                    // onClick={() => {}}    
                >
                    عودة
            </Link> 
        </div>
    </article>
  )
}

export default MyReservation;