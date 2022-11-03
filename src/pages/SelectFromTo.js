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
            <div style={{margin:'0px'}}>الرحلة</div>
            <hr style={{width:'100%',marginTop:'5px',marginBottom:'5px'}}/>
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
            <hr style={{width:'100%',marginTop:'5px',marginBottom:'5px'}}/>
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
            {/* <div className='tripitem' style={{width:'200px',marginTop:''}}>sp {user.mybalance } : الرصيد الحالي  </div> */}
            <div className='tripitem' style={{width:'200px',marginTop:'',marginBottom:'10px'}}> {trip.ticket_price } : الرحلات المتوفرة لديك   </div>
            <div className='trip' style={{width:'100px'}}>
                <button 
                    className='btn' 
                    style={{borderRadius:"5px"}}
                    onClick={() => handleTripUser(trip.id_trip,user.id)}    
                >
                    حجز
                </button>
                <Link 
                        to={`/login/${id}`}
                        className='btn' 
                        style={{borderRadius:"5px",textDecoration:'none'}}
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