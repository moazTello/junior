import React from 'react';
// import { Link } from 'react-router-dom';
import { useContext,useState } from 'react';
import DataContext from '../context/DataContext';

const Trip = ({trip,setResTrip}) => {
        const {viewReservation,color,hoverColor} = useContext(DataContext);
        const [ n1 , setn1 ] = useState(true);
        const handn1 = () => {
                if(n1){setn1(false)}
                else{setn1(true)}
        }
        const [ n2 , setn2 ] = useState(true);
        const handn2 = () => {
                if(n2){setn2(false)}
                else{setn2(true)}
        }
  return (
    <article className='tripcontent' onMouseEnter={handn2} onMouseLeave={handn2} style={{color:!n2 ? color : hoverColor,backgroundColor:n2 ? color : hoverColor}}>        
            <div className='trip'>
                {/* <Link 

                //       to={`/login/${trip.trip_id}/selectfromto`} 
                      className='btn'
                      style={{marginLeft:"0px",borderRadius:"0px",
                              width:"80px",border:"none"
                              ,textDecoration:'none',paddingTop:'5px'}}
                      onClick={() =>  
                                {
                                console.log(trip.trip_id);
                                setResTrip(trip.trip_id);
                                viewReservation(trip.trip_id);
                                }
                        }  
                      to={`/login/${trip.trip_id}/selectfromto`} 
                >
                        حجز
                </Link> */}
                <button 
                className='btn'
                style={{marginLeft:"0px",borderRadius:"0px",
                        width:"100%",border:"none"
                        ,textDecoration:'none',paddingTop:'5px'
                        ,backgroundColor:!n1 ? hoverColor : color , color:!n1?color:hoverColor 
                }}
                onMouseEnter={handn1}
                onMouseLeave={handn1}
                onClick={() =>  
                                {
                                console.log(trip.trip_id);
                                setResTrip(trip.trip_id);
                                viewReservation(trip.trip_id);
                                }
                        }  
                >
                        حجز
                </button>
                <p className='tripitem'>{trip.destination} </p>
                <p className='tripitem'>{trip.availabel_sets}</p>
                <p className='tripitem'>{trip.date}</p>
                <p className='tripitem'>{trip.trip_id}</p>
            </div>
    </article>
  )
}
export default Trip;