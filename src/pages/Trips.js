import React from 'react';
import Trip from './Trip';
import { Link, useParams} from 'react-router-dom';
const Trips = ({trips,handleTripUser,setResTrip}) => {
  console.log('Trips');
  const {id} = useParams();
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
                {id} 
            {trips.map(trip => (
                <Trip className=''key={trip.id_trip} 
                trip={trip}
                handleTripUser={handleTripUser}
                id={id}
                setResTrip={setResTrip}
                />
            ))}
            </div>
            <hr/>
            <Link 
                    to={`/login/${id}/myreservation`}
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