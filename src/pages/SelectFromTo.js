import React from 'react';
import { Link, useParams } from 'react-router-dom';
const SelectFromTo = ({users,trips,handleTripUser,resTrip}) => {
  console.log('Trips');
  const {id} = useParams();
  const trip = trips.find(trip => (trip.id_trip) === resTrip);
  const user = users.find(user => (user.id).toString() ===id); 
  return (
    <article className='container'>
        <div className='tripsschedul'>
            <div className='trip'>
                <p className='tripitem'>الوجهة </p>
                <p className='tripitem'> عدد المقاعد </p>
                <p className='tripitem'> تاريخ الرحلة</p>
                <p className='tripitem'> رقم تسلسلي</p>
            </div>
            <hr/>
            <div className='trip' 
                // style={{height:"400px",overflow:"scroll"}}
            > 
                <p className='tripitem'>{trip.destination_trip}</p>
                <p className='tripitem'>{trip.sets_trip}</p>
                <p className='tripitem'>{trip.date_trip}</p>
                <p className='tripitem'>{trip.id_trip}</p>
            </div>
            <hr style={{width:'100%',marginTop:'10px',marginBottom:'10px'}}/>
            <div className='addInput'> 
                    <input 
                        className='inputs' 
                        id="fromto"
                        type="text"
                        required
                        // value={}
                        // onChange={(e) => (e.target.value)}
                    />
                    <label htmlFor='fromto' style={{color:"rgb(254,109,81)"}}>اختر مكان الانطلاق</label>
            </div>
            <div className='tripitem' style={{width:'200px',marginTop:'25px'}}>sp {user.mybalance } : الرصيد الحالي  </div>
            <div className='tripitem' style={{width:'200px',marginTop:'15px',marginBottom:'25px'}}>sp {trip.ticket_price } : سعر التذكرة   </div>
            
            <div className='trip' style={{width:'200px'}}>
                <button 
                    className='btn' 
                    style={{marginTop:"5px",borderRadius:"5px",
                    width:"80px",fontSize:'16px',
                    paddingTop:'4px',height:'32px'}}
                    onClick={() => handleTripUser(trip.id_trip,user.id)}    
                >
                    حجز
                </button>
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
        </div>
    </article>
  )
}

export default SelectFromTo;