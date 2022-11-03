import React from 'react';
import { Link } from 'react-router-dom';

const Trip = ({trip,handleTripUser,id,setResTrip}) => {

  return (
    <article className='tripcontent'>        
            <div className='trip'>
                {/* <button 
                    className='btn' 
                    style={{marginLeft:"0px",borderRadius:"0px",height:"32px",width:"80px",border:"none"}}
                    onClick={() => handleTripUser(trip.id_trip)}    
                >
                    حجز
                </button> */}
                <Link to={`/login/${id}/selectfromto`} 
                      className='btn'
                      style={{marginLeft:"0px",borderRadius:"0px",
                              height:"32px",width:"80px",border:"none"
                              ,textDecoration:'none',paddingTop:'5px'}}
                      onClick={() => {
                        setResTrip(trip.id_trip)
                        console.log(trip.id_trip)}}    

                >
                        حجز
                </Link>
                <p className='tripitem'>{trip.destination_trip} </p>
                <p className='tripitem'>{trip.sets_trip}</p>
                <p className='tripitem'>{trip.date_trip}</p>
                <p className='tripitem'>{trip.id_trip}</p>
                 
            </div>
    </article>
  )
}
export default Trip;