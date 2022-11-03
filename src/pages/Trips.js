import React from 'react';
import Trip from './Trip';
import { Link } from 'react-router-dom';
const Trips = ({trips,handleTripUser}) => {
  console.log('Trips');
  return (
    <article className='container'>
        <div className='tripsschedul'>
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
                <Trip className=''key={trip.id_trip} 
                trip={trip}
                handleTripUser={handleTripUser} />
            ))}
            </div>
            <hr/>
            <Link 
                    to='/myreservation'
                    className='btn' 
                    style={{marginTop:"5px",borderRadius:"5px",
                            width:"80px",textDecoration:'none',
                            paddingTop:'4px'}}
                    // onClick={() => {}}    
                >
                    حجوزاتي
            </Link> 
        </div>
    </article>
  )
}

export default Trips;