import React from 'react';
import UserTrip from './UserTrip';
const MyReservation = ({userTrips,handleDeleteTripUser}) => {
  console.log('Trips');
  return (
    <article className='container'>
        <div className='tripsschedul'>
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
            </div>
            <hr/> 
        </div>
    </article>
  )
}

export default MyReservation;