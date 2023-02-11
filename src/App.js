import './App.css';
import './pages/Classes.css';
import { Route,Routes } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { format } from 'date-fns';
// import api from './api/trips';
import Layout from './components/Navbar/Layout/Layout';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Missing from './pages/Missing';
import LogIn from './pages/LogIn';
import Trips from './pages/Trips';
import MyReservation from './pages/MyReservation';
import ContactUs from './pages/ContactUs';
import SelectFromTo from './pages/SelectFromTo';
import Policy from './pages/Policy';
import { DataProvider } from './context/DataContext';
import UserProfile from './pages/UserProfile';
import Condetions from './pages/Condetions';
import MobilePage from './pages/MobilePage';
import Team from './pages/Team';
import EmployeeOrder from './pages/EmployeeOrder';
import Safty from './pages/Safty';
import Map from './pages/Map';
function App(props) {
  // const googleMapsApiKey = "AIzaSyCU2iuGkYA674riFWhoKYby3rEYrBuHeNQ";

  // const {places} = props;

  // const {
  //   loadingElement,
  //   containerElement,
  //   mapElement,
  //   defaultCenter,
  //   defaultZoom
  // } = props;

  return (
    <DataProvider>
      <Routes>
          <Route path='/' element={<Layout/>}>
          {/* <Route index element={<HomePage/>}/> */}
          <Route path='/junior' element={<HomePage/>}/>
          {/* <Route path='/login'>
            <Route 
              // path='/login'
              index 
              element={<LogIn/>}/>
            <Route path='/login/:id' element={<Trips/>}/>
            <Route 
              path='/login/:id/selectfromto' 
              element={<SelectFromTo/>}/>
            <Route path='/login/:id/myreservation' element={<MyReservation/>}/>
          </Route> */}
          <Route path='/login'>
            <Route 
              // path='/login'
              index 
              element={<LogIn/>}/>
            <Route path='/login/alltrips' element={<Trips/>}/>
            <Route 
              path='/login/:id/selectfromto' 
              element={<SelectFromTo/>}/>
            <Route path='/login/myreservation' element={<MyReservation/>}/>
          </Route>
          <Route path='/login/userprofile' element={<UserProfile/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/policy' element={<Policy/>}/>
          <Route path='/condetions' element={<Condetions/>}/>
          <Route path='/mobilepage' element={<MobilePage/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/employeeorder' element={<EmployeeOrder/>}/>
          <Route path='/safty' element={<Safty/>}/>
          <Route path='/map' element={<Map/>}/>
          {/* <Route path='/map' element={
            <Map
                googleMapURL={
                  'https://maps.googleapis.com/maps/api/js?key=' +
                  googleMapsApiKey +
                  '&libraries=geometry,drawing,places'
                }
                markers={places}
                loadingElement={loadingElement || <div style={{height: `100%`}}/>}
                containerElement={containerElement || <div style={{height: "80vh"}}/>}
                mapElement={mapElement || <div style={{height: `100%`}}/>}
                defaultCenter={defaultCenter || {lat: 25.798939, lng: -80.291409}}
                defaultZoom={defaultZoom || 11}
              />}/>  */}
          <Route path='*' element={<Missing/>}/>
          </Route>
      </Routes>   
    </DataProvider>
  );
}
// npx json-server -p 3500 -w src/data/db.json
// git add .
// git commit -m "Deployed website"      
// git push
// npm run deploy
// git config --global http.postBuffer 524288000
// git config --global http.postBuffer 1048576000
export default App;
// AIzaSyCU2iuGkYA674riFWhoKYby3rEYrBuHeNQ
// {
//   "version":2,
//   "builds":[
//       {
//           "src":"./index.js",
//           "use":"@vercel/node"
//       }
//   ],
//   "routes":[
//       {
//           "src":"/(.*)",
//           "dest":"/"
//       }
//   ]
// }
// "homepage": "https://moazTello.gethub.io/junior",


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/YaserSamsam/xtravel_web_site.git
// git push -u origin main