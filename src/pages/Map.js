import React, { useState,useContext } from 'react';
// import GoogleMapReact from 'google-map-react';
import './Classes.css';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
const Map = () => {
  const {color,hoverColor,resTrip} = useContext(DataContext);
  const locs  = [
    {name:'Damascus',key:1},
    {name:'Hama',key:2},
    {name:'Deer Al-zoor',key:3},
    {name:'Daraa',key:4},
    {name:'Raqqa',key:5},
    {name:'Halab',key:6},
    {name:'Idleb',key:7},
    {name:'Homs',key:8},
    {name:'Latakya',key:9},
    {name:'Tartous',key:10},
    {name:'Qunaytera',key:11},
    {name:'Suayda',key:12}
  ];
  const [loc , setLoc ] = useState('Damascus');
  const locchange = (e) => {
    setLoc(e.target.value);
  }
  const [ n2 , setn2 ] = useState(true);
  const handn2 = () => {
          if(n2){setn2(false)}
          else{setn2(true)}
  }
    // const isLoading = 
//   const {color} = useContext(DataContext);
  // console.log('Condetions');
  return (
    // <Map1/>
    <article className='container'>
     <div className="mapouter">
        <div className="gmap_canvas">
                  <select className='addInput' 
                            style={{
                                    color:color,borderRadius:"5px",height:"23px"}}
                            onChange={locchange}> 
                    <option >محافطة على الخريطة</option>
                    {locs.map((loc) => {
                        return <option 
                                        className='inputs' 
                                        key={loc.key}     
                            // value={go_from}
                          //   onChange={(e) => setGo_from(e.target.value)} 
                    >
                            {loc.name}
                        </option>
                    })}
                </select>
                <p style={{color:"white"}}>اذا لم تظهر الخريطة استخدم خدمة بروكسي </p>
                <br/>
                <div>
                {resTrip &&  <Link 
                        to={`/login/${resTrip}/selectfromto`}
                        className='btn' 
                        style={{borderRadius:"5px",textDecoration:'none',
                                // backgroundColor:!n2 ? hoverColor : color ,
                                color:!n2?color:hoverColor,
                                // border:`solid 1px ${color}`
                        }}
                        onMouseEnter={handn2}
                        onMouseLeave={handn2}
                        // onClick={() => {}}    
                    >
                        عودة
                </Link>}
                {!resTrip &&  <Link 
                        to={`/junior`}
                        className='btn' 
                        style={{borderRadius:"5px",textDecoration:'none',
                                // backgroundColor:!n2 ? hoverColor : color ,
                                color:!n2?color:hoverColor,
                                // border:`solid 1px ${color}`
                        }}
                        onMouseEnter={handn2}
                        onMouseLeave={handn2}
                        // onClick={() => {}}    
                    >
                        عودة
                </Link>}
                </div>
                <br/>


                {loc === 'Damascus' && <iframe title='map1' width="800" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=damascus&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe>}
                {loc === 'Hama' && <iframe title='map2' width="800" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%D8%AD%D9%85%D8%A7%D8%A9&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe>}
                {loc === 'Deer Al-zoor' && <iframe title='map3' width="800" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%D8%AF%D9%8A%D8%B1%20%D8%A7%D9%84%D8%B2%D9%88%D8%B1&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe>}
                {loc === 'Daraa' && <iframe title='map4' width="800" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%D8%AF%D8%B1%D8%B9%D8%A7&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe>}
                {loc === 'Raqqa' && <iframe title='map5' width="800" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%D8%B1%D9%82%D8%A9&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe>}
                {loc === 'Halab' && <iframe title='map6' width="800" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%D8%AD%D9%84%D8%A8&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe>}
                {loc === 'Idleb' && <iframe title='map7' width="800" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%D8%A7%D8%AF%D9%84%D8%A8&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe>}
                {loc === 'Homs' &&  <iframe title='map8' width="800" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Homs&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>}
                {loc === 'Latakya' && <iframe title='map9' width="800" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%D8%A7%D9%84%D9%84%D8%A7%D8%B0%D9%82%D9%8A%D8%A9&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe>}
                {loc === 'Tartous' && <iframe title='map10' width="800" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%D8%B7%D8%B1%D8%B7%D9%88%D8%B3&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe>}
                {loc === 'Qunaytera' && <iframe title='map11' width="800" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%D9%82%D9%86%D9%8A%D8%B7%D8%B1%D8%A9&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe>}
                {loc === 'Suayda' && <iframe title='map12' width="800" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%D8%B3%D9%88%D9%8A%D8%AF%D8%A7%D8%A1&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe>}
                {/* <iframe title='map' width="800" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=damascus&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe> */}
                
        </div>
    </div> 
    </article>
  )
}
export default Map;
// function Map1(){
//     <GoogleMapReact
//         bootstrapURLKeys={{ key: 'AIzaSyC3aZg6P7r2Aze0dn4X1QTmHora92s3f00' }}
//         yesIWantToUseGoogleMapApiInternals
//         // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//         zoom={10}
//         center={{ lat:33 , lng:36}}
//         mapContainerClassName="map-container"
//     >
        // <p position={{ lat:33 , lng:36}}>moaz</p>
//     </GoogleMapReact>
// }
// export default function SimpleMap(){
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         {/* <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         /> */}
//       </GoogleMapReact>
//     </div>
//   );
// }