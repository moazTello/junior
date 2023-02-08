import React from 'react';
import { useContext,useState } from 'react';
// import { FaBus } from 'react-icons/fa';
import DataContext from '../context/DataContext';
const UserTrip = ({trip,handleDeleteTripUser}) => {
  const {color,hoverColor} = useContext(DataContext);
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
                <button 
                    className='btn' 
                    style={{marginLeft:"0px",borderRadius:"0px",width:"100%",border:"none",
                            backgroundColor:!n1 ? hoverColor : color , color:!n1?color:hoverColor 
                  }}
                    onClick={() => handleDeleteTripUser(trip.trip_id)}  
                    onMouseEnter={handn1}
                    onMouseLeave={handn1} 
                >
                    إلغاء
                </button>
                <p className='tripitem'>{trip.destination} </p>
                <p className='tripitem'>{trip.start_station} </p>
                <p className='tripitem'>{trip.availabel_sets}</p>
                <p className='tripitem'>{trip.date}</p>
                {/* <p className='tripitem'><FaBus/></p> */}
                {/* <p className='tripitem'>{trip.trip_id}</p> */}

            </div>
    </article>
  )
}
export default UserTrip;