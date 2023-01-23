import React from 'react';
// import { FaBus } from 'react-icons/fa';

const UserTrip = ({trip,handleDeleteTripUser}) => {
  return (
    <article className='tripcontent'>        
            <div className='trip'>
                <button 
                    className='btn' 
                    style={{marginLeft:"0px",borderRadius:"0px",width:"100%",border:"none"}}
                    onClick={() => handleDeleteTripUser(trip.trip_id)}   
                >
                    إلغاء
                </button>

                <p className='tripitem'>{trip.destination} </p>
                <p className='tripitem'>{trip.availabel_sets}</p>
                <p className='tripitem'>{trip.date}</p>
                {/* <p className='tripitem'><FaBus/></p> */}
                <p className='tripitem'>{trip.trip_id}</p>

            </div>
    </article>
  )
}
export default UserTrip;