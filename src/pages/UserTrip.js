import React from 'react';

const UserTrip = ({trip,handleDeleteTripUser}) => {
  return (
    <article className='tripcontent'>        
            <div className='trip'>
                <button 
                    className='btn' 
                    style={{marginLeft:"0px",borderRadius:"0px",width:"80px",border:"none"}}
                    onClick={() => handleDeleteTripUser(trip.id_trip)}    
                >
                    إلغاء
                </button>
                <p className='tripitem'>{trip.destination_trip} </p>
                <p className='tripitem'>{trip.sets_trip}</p>
                <p className='tripitem'>{trip.date_trip}</p>
                <p className='tripitem'>{trip.id_trip}</p> 
            </div>
    </article>
  )
}
export default UserTrip;