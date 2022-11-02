import React from 'react';

const Trip = ({trip,handleTripUser}) => {
  return (
    <article className='tripcontent'>        
            <div className='trip'>
                <button 
                    className='btn' 
                    style={{marginLeft:"0px",borderRadius:"0px",height:"32px",width:"80px",border:"none"}}
                    onClick={() => handleTripUser(trip.id_trip)}    
                >
                    حجز
                </button>
                <p className='tripitem'>{trip.destination_trip} </p>
                <p className='tripitem'>{trip.sets_trip}</p>
                <p className='tripitem'>{trip.date_trip}</p>
                <p className='tripitem'>{trip.id_trip}</p>
                 
            </div>
    </article>
  )
}
export default Trip;