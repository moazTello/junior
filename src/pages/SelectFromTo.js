import React from 'react';
import { useContext, 
    // useEffect
 } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
const SelectFromTo = () => {
    const {logedInUser,trips,handleTripUser,resTrip
        // ,go_from,setGo_from
        ,onOptionChangeHandler,coordinates} = useContext(DataContext);
//   console.log('Trips');
//   const {id} = useParams();
  const trip = trips.find(trip => (trip.trip_id).toString() === resTrip.toString());
//   console.log(trip);
//   console.log(trips);
//   console.log(resTrip);
  return (
    <article className='container'>
        <div className='tripsschedul'>
            <div style={{margin:'0px'}}>الرحلة</div>
            <hr style={{width:'100%',marginTop:'25px',marginBottom:'25px'}}/>
            <div className='trip'>
                <p className='tripitem'>الوجهة </p>
                <p className='tripitem'> عدد المقاعد </p>
                <p className='tripitem'> تاريخ الرحلة</p>
                <p className='tripitem'> رقم تسلسلي</p>
            </div>
            <hr/>
            <div className='trip'>
                <p className='tripitem'>{trip.destination}</p>
                <p className='tripitem'> {trip.availabel_sets}</p>
                <p className='tripitem'> {trip.date}</p>
                <p className='tripitem'> {trip.trip_id}</p> 
            </div>
            <hr style={{width:'100%',marginTop:'5px',marginBottom:'5px'}}/>
            <div className='addInput'> 
                    {/* <input 
                        className='inputs' 
                        id="fromto"
                        type="text"
                        required
                        value={go_from}
                        onChange={(e) => setGo_from(e.target.value)}
                    /> */}
               <select      className='addInput' 
                            style={{
                                    color:"rgb(63,138,226)",borderRadius:"5px"}}
                            onChange={onOptionChangeHandler}> 
                    <option >مكان الانطلاق </option>
                    {coordinates.map((option) => {
                        return <option 
                                        className='inputs' 
                                        key={option.id}     
                            // value={go_from}
                          //   onChange={(e) => setGo_from(e.target.value)} 
                    >
                            {option.go_from}
                        </option>
                    })}
                </select>
                    <label htmlFor='fromto' style={{
                        // color:"rgb(254,109,81)"
                        color:"rgb(63,138,226)"
                        }}>اختر مكان الانطلاق</label>
            </div>
            {/* <div className='tripitem' style={{width:'200px',marginTop:''}}>sp {user.mybalance } : الرصيد الحالي  </div> */}
            <div className='tripitem' style={{width:'200px',marginTop:'',marginBottom:'10px'}}> {logedInUser.trip_availabel } : الرحلات المتوفرة لديك   </div>
            <div className='trip' style={{width:'100px'}}>
                <button 
                    className='btn' 
                    style={{borderRadius:"5px"}}
                    // onClick={() => handleTripUser(trip.trip_id,user.id)}
                    onClick={() => handleTripUser(trip.trip_id)}    
                >
                    حجز
                </button>
                <Link 
                        to={`/login/alltrips`}
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