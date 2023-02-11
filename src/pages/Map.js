import React
, { useState,useContext } 
from 'react';
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
  console.log('Condetions');
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


                {loc === 'Damascus' && <div style={{width:"100%",height:"100%"}}> <iframe title='map1' width="800" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=damascus&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe></div>}
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
// const Map1 = () => {
//     <GoogleMapReact
//         bootstrapURLKeys={{ key: 'AIzaSyCU2iuGkYA674riFWhoKYby3rEYrBuHeNQ' }}
//         yesIWantToUseGoogleMapApiInternals
//         // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//         zoom={10}
//         center={{ lat:33 , lng:36}}
//         mapContainerClassName="map-container"
//     >
//         <p position={{ lat:33 , lng:36}}>moaz</p>
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
//         bootstrapURLKeys={{ key: "AIzaSyCU2iuGkYA674riFWhoKYby3rEYrBuHeNQ" }}
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
// import React from 'react'
// import { GoogleMap, useJsApiLoader ,Marker } from '@react-google-maps/api';
// import {GoogleMap,DirectionsRenderer,DirectionsService} from 'react-google-maps';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: 33.745,
//   lng: 36.523
// };

// function Map() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyCU2iuGkYA674riFWhoKYby3rEYrBuHeNQ"
//   })

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         // onLoad={onLoad}
//         // onUnmount={onUnmount}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <Marker
//           lat={33}
//           lng={36}
//           text="My Marker"
//         />
//       </GoogleMap>
//   ) : <></>
// }

// export default React.memo(Map);
// const places = [
//         {latitude: 25.8103146,longitude: -80.1751609},
//         {latitude: 27.9947147,longitude: -82.5943645},
//         {latitude: 28.4813018,longitude: -81.4387899},
//         //...
//       ]
// class MapDirectionsRenderer extends React.Component {
//         state = {
//           directions: null,
//           error: null
//         };
      
//         componentDidMount() {
//           const { places, travelMode } = this.props;
      
//           const waypoints = places.map(p =>({
//               location: {lat: p.latitude, lng:p.longitude},
//               stopover: true
//           }))
//           const origin = waypoints.shift().location;
//           const destination = waypoints.pop().location;
      
      
      
//           const directionsService = new google.maps.DirectionsService();
//           directionsService.route(
//             {
//               origin: origin,
//               destination: destination,
//               travelMode: travelMode,
//               waypoints: waypoints
//             },
//             (result, status) => {
//               if (status === google.maps.DirectionsStatus.OK) {
//                 this.setState({
//                   directions: result
//                 });
//               } else {
//                 this.setState({ error: result });
//               }
//             }
//           );
//         }
      
//         render() {
//           if (this.state.error) {
//             return <h1>{this.state.error}</h1>;
//           }
//           return <DirectionsRenderer directions={this.state.directions} />;
//         }
//       }
// export default Map;
// /* global google */
// import React from "react";
// import {
//   withGoogleMap,
//   GoogleMap,
//   withScriptjs,
//   Marker,
//   DirectionsRenderer
// } from "react-google-maps";

// class MapDirectionsRenderer extends React.Component {
//   state = {
//     directions: null,
//     error: null
//   };

//   componentDidMount() {
//     const { places, travelMode } = this.props;
    
//     const waypoints = places.map(p =>({
//         location: {lat: p.latitude, lng:p.longitude},
//         stopover: true
//     }))
//     const origin = waypoints.shift().location;
//     const destination = waypoints.pop().location;
    

//    //here

//     const directionsService = new google.maps.DirectionsService();
//     directionsService.route(
//       {
//         origin: origin,
//         destination: destination,
//         travelMode: travelMode,
//         waypoints: waypoints
//       },
//       (result, status) => {
//         if (status === google.maps.DirectionsStatus.OK) {
//           this.setState({
//             directions: result
//           });
//         } else {
//           this.setState({ error: result });
//         }
//       }
//     );
//   }

//   render() {
//     if (this.state.error) {
//       return <h1>{this.state.error}</h1>;
//     }
//     return (this.state.directions && <DirectionsRenderer directions={this.state.directions} />)
//   }
// }

// const Map = withScriptjs(
//   withGoogleMap(props => (
//     <GoogleMap
//       defaultCenter={props.defaultCenter}
//       defaultZoom={props.defaultZoom}
//     >
//       {props.markers.map((marker, index) => {
//         const position = { lat: marker.latitude, lng: marker.longitude };
//         return <Marker key={index} position={position} />;
//       })}
//       <MapDirectionsRenderer
//         places={props.markers}
//         travelMode={google.maps.TravelMode.DRIVING}
//       />
//     </GoogleMap>
//   ))
// );

// export default Map;
// class Map extends React.Component{
// const { compose, withProps, lifecycle } = require("recompose");
// const {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   DirectionsRenderer,
// } = require("react-google-maps");

// const MapWithADirectionsRenderer = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCU2iuGkYA674riFWhoKYby3rEYrBuHeNQ&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap,
//   lifecycle({
//     componentDidMount() {
//       const DirectionsService = new google.maps.DirectionsService();

//       DirectionsService.route({
//         origin: new google.maps.LatLng(41.8507300, -87.6512600),
//         destination: new google.maps.LatLng(41.8525800, -87.6514100),
//         travelMode: google.maps.TravelMode.DRIVING,
//       }, (result, status) => {
//         if (status === google.maps.DirectionsStatus.OK) {
//           this.setState({
//             directions: result,
//           });
//         } else {
//           console.error(`error fetching directions ${result}`);
//         }
//       });
//     }
//   })
// )(props =>
//   <GoogleMap
//     defaultZoom={7}
//     defaultCenter={new google.maps.LatLng(33.8507300, 36.6512600)}
//   >
//     {props.directions && <DirectionsRenderer directions={props.directions} />}
//   </GoogleMap>
// );

// <MapWithADirectionsRenderer />
// }






// import React from "react"
// import { compose, withProps } from "recompose"
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// const Map = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
//   </GoogleMap>
// ))

// class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }


// import { useLoadScript } from "@react-google-maps/api";
// import Map from './Map';
// export default function Map(){
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey:"AIzaSyCU2iuGkYA674riFWhoKYby3rEYrBuHeNQ",
//     libraries:["places"],
    
//   })

// }




// /*global google*/
// import React from "react";
// const Map = () => {
//   function myMap() {
//     const mapProp= {
//       center:new google.maps.LatLng(51.508742,-0.120850),
//       zoom:5,
//     };
//   var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

// }
//   return(
//     <div>
// <h1>My First Google Map</h1>

// <div id="googleMap" style={{width:"100%",height:"400px"}}></div>

// <script>


// </script>

// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCU2iuGkYA674riFWhoKYby3rEYrBuHeNQ&callback=myMap"></script>
// </div>
//   )
// }
// export default Map;


// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Flex,
//   HStack,
//   IconButton,
//   Input,
//   SkeletonText,
//   Text,
// } from '@chakra-ui/react'
// import { FaLocationArrow, FaTimes } from 'react-icons/fa'

// import {
//   useJsApiLoader,
//   GoogleMap,
//   Marker,
//   Autocomplete,
//   DirectionsRenderer,
// } from '@react-google-maps/api'
// import { useRef, useState } from 'react'

// const center = { lat: 33.8584, lng: 36.2945 }

// function Map() {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "AIzaSyCU2iuGkYA674riFWhoKYby3rEYrBuHeNQ",
//     libraries: ['places'],
//   })

//   const [map, setMap] = useState(/** @type google.maps.Map */ (null))
//   const [directionsResponse, setDirectionsResponse] = useState(null)
//   const [distance, setDistance] = useState('')
//   const [duration, setDuration] = useState('')

//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const originRef = useRef()
//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const destiantionRef = useRef()

//   if (!isLoaded) {
//     return <p>null</p>
//   }

//   async function calculateRoute() {
//     if (originRef.current.value === '' || destiantionRef.current.value === '') {
//       return
//     }
//     // eslint-disable-next-line no-undef
//     const directionsService = new google.maps.DirectionsService()
//     const results = await directionsService.route({
//       origin: originRef.current.value,
//       destination: destiantionRef.current.value,
//       // eslint-disable-next-line no-undef
//       travelMode: google.maps.TravelMode.DRIVING,
//     })
//     setDirectionsResponse(results)
//     setDistance(results.routes[0].legs[0].distance.text)
//     setDuration(results.routes[0].legs[0].duration.text)
//   }

//   return (
//     <div>
//         {/* Google Map Box */}
//         <GoogleMap
//           center={center}
//           zoom={15}
//           mapContainerStyle={{ width: '100%', height: '100%' }}
//           options={{
//             zoomControl: false,
//             streetViewControl: false,
//             mapTypeControl: false,
//             fullscreenControl: false,
//           }}
//           onLoad={map => setMap(map)}
//         >
//           <Marker position={center} />
//           {directionsResponse && (
//             <DirectionsRenderer directions={directionsResponse} />
//           )}
//         </GoogleMap>
//         </div>


//   )
// }

// export default Map