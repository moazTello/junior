import './App.css';
import './pages/Classes.css';
import Layout from './components/Navbar/Layout/Layout';
import { Route,Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';
import About from './pages/About';
import Missing from './pages/Missing';
// import { format } from 'date-fns';
import api from './api/trips';
import LogIn from './pages/LogIn';
import Trips from './pages/Trips';
import MyReservation from './pages/MyReservation';
import ContactUs from './pages/ContactUs';
import SelectFromTo from './pages/SelectFromTo';
function App() {
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [resTrip,setResTrip] = useState('');
  const [logedInUser,setLogedInUser] = useState([]);
  const [navDisplay,setNavDisplay] = useState(true);
  // const [color,setColor] = useState('rgb(67,10,191)');
  // const [background,setBackground] = useState('');
  const [users,setUsers] = useState([ 
    {
      "id": 1,
      "username": "0968767511",
      "password": "qwerqwer",
      "name": "moaz_tello",
      "fathername": "sameh",
      "mothername": "hiba",
      "birthdate": "23/9/2020",
      "address": "artuz",
      "iss": "0101010100102",
      "mybalance": "10000",
      "total_trip": "4"
    }
  ]);
  const [trips,setTrips] = useState([ 
    {
      "id_trip":1,
      "date_trip":"12/12",
      "sets_trip":"24",
      "destination_trip":"عرطوز",
      "ticket_price":"15000",
      "start_from":[
        {
          "1":"كازية حمودة"
        },
        {
          "2":"قمرين مول"
        }
      ]
    },
    {
      "id_trip":2,
      "date_trip":"12/12",
      "sets_trip":"24",
      "destination_trip":"عرطوز",
      "ticket_price":"15000",
      "start_from":[
        {
          "1":"كازية حمودة"
        },
        {
          "2":"قمرين مول"
        }
      ]
    },
    {
      "id_trip":3,
      "date_trip":"12/12",
      "sets_trip":"24",
      "destination_trip":"عرطوز",
      "ticket_price":"15000",
      "start_from":[
        {
          "1":"كازية حمودة"
        },
        {
          "2":"قمرين مول"
        }
      ]
    },
    {
      "id_trip":4,
      "date_trip":"12/12",
      "sets_trip":"24",
      "destination_trip":"عرطوز",
      "ticket_price":"15000",
      "start_from":[
        {
          "1":"كازية حمودة"
        },
        {
          "2":"قمرين مول"
        }
      ]
    },
    {
      "id_trip":5,
      "date_trip":"12/12",
      "sets_trip":"24",
      "destination_trip":"عرطوز",
      "ticket_price":"15000",
      "start_from":[
        {
          "1":"كازية حمودة"
        },
        {
          "2":"قمرين مول"
        }
      ]
    },
    {
      "id_trip":6,
      "date_trip":"12/12",
      "sets_trip":"24",
      "destination_trip":"عرطوز",
      "ticket_price":"15000",
      "start_from":[
        {
          "1":"كازية حمودة"
        },
        {
          "2":"قمرين مول"
        }
      ]
    },
    {
      "id_trip":7,
      "date_trip":"12/12",
      "sets_trip":"24",
      "destination_trip":"عرطوز",
      "ticket_price":"15000",
      "start_from":[
        {
          "1":"كازية حمودة"
        },
        {
          "2":"قمرين مول"
        }
      ]
    },
    {
      "id_trip":8,
      "date_trip":"12/12",
      "sets_trip":"24",
      "destination_trip":"عرطوز",
      "ticket_price":"15000",
      "start_from":[
        {
          "1":"كازية حمودة"
        },
        {
          "2":"قمرين مول"
        }
      ]
    },
    {
      "id_trip":9,
      "date_trip":"12/12",
      "sets_trip":"24",
      "destination_trip":"عرطوز",
      "ticket_price":"15000",
      "start_from":[
        {
          "1":"كازية حمودة"
        },
        {
          "2":"قمرين مول"
        }
      ]
    },
    {
      "id_trip":10,
      "date_trip":"12/12",
      "sets_trip":"24",
      "destination_trip":"عرطوز",
      "ticket_price":"15000",
      "start_from":[
        {
          "1":"كازية حمودة"
        },
        {
          "2":"قمرين مول"
        }
      ]
    },
    {
      "id_trip":11,
      "date_trip":"12/12",
      "sets_trip":"24",
      "destination_trip":"عرطوز",
      "ticket_price":"15000",
      "start_from":[
        {
          "1":"كازية حمودة"
        },
        {
          "2":"قمرين مول"
        }
      ]
    },
    {
      "id_trip":12,
      "date_trip":"12/12",
      "sets_trip":"24",
      "destination_trip":"عرطوز",
      "ticket_price":"15000",
      "start_from":[
        {
          "1":"كازية حمودة"
        },
        {
          "2":"قمرين مول"
        }
      ]
    },
    {
      "id_trip":13,
      "date_trip":"12/12",
      "sets_trip":"24",
      "destination_trip":"عرطوز",
      "ticket_price":"15000",
      "start_from":[
        {
          "1":"كازية حمودة"
        },
        {
          "2":"قمرين مول"
        }
      ]
    },
    {
      "id_trip":14,
      "date_trip":"12/12",
      "sets_trip":"24",
      "destination_trip":"عرطوز",
      "ticket_price":"15000",
      "start_from":[
        {
          "1":"كازية حمودة"
        },
        {
          "2":"قمرين مول"
        }
      ]
    }
  ]);
  const [userTrips,setUserTrips] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchClasses = async () => {
      try{
        const response = await api.get('/trips');
        const response2 = await api.get('/Users');
        // const response3 = await api.get('/teachers');
        setTrips(response.data);
        setUsers(response2.data);
        // setAllTeachers(response3.data);
      }
      catch(err){
        console.log(err.message);
      }
    }
    fetchClasses();
  },[]);
  const handleSubmitlogin = () => {
    const user = users.find(user => (user.username) === userName);
    if(userName === user.username && password === user.password){
      // const response = api.get('./Users/1');
      setLogedInUser(user);
      setNavDisplay(false);
      navigate(`/login/${user.id}`);
    }
    else{
      alert('المعلومات غير صحيحة يرجى اعادة تعبئة المعلومات ')
      // navigate('/login');
    }
  }
  const handleTripUser = (id,userid) => {
    const newtrip = trips.find((trip) => (trip.id_trip) === id);
    const newtripobj = {id_trip:id,date_trip:newtrip.date_trip,sets_trip:newtrip.sets_trip,
                      destination_trip:newtrip.destination_trip,ticket_price:newtrip.ticket_price,
                      };
    const findtrip = userTrips.find((trip) => (trip.id_trip) === id);
    if(!findtrip){
        const usertrips = [...userTrips,newtripobj];
        setUserTrips(usertrips);
        navigate(`/login/${userid}/myreservation`);
    }
  }
  const handleDeleteTripUser = (id) => {
    const trips = userTrips.filter(trip => trip.id_trip !== id);
    setUserTrips(trips);
  }
  return (
    <Routes>
      <Route path='/' element={<Layout
        navDisplay={navDisplay}
      />}>
      {/* <Route index element={<HomePage/>}/> */}
      <Route path='/junior' element={<HomePage/>}/>
      <Route path='/login'>
        <Route 
          // path='/login'
          index 
          element={<LogIn
          userName={userName}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
          handleSubmitlogin={handleSubmitlogin}
        />}/>
        <Route path='/login/:id' element={<Trips
          setResTrip={setResTrip}
          trips={trips}
          handleTripUser={handleTripUser}
          logedInUser={logedInUser}
        />}/>
        <Route 
          path='/login/:id/selectfromto' 
          element={<SelectFromTo
          resTrip={resTrip}
          trips={trips}
          users={users}
          handleTripUser={handleTripUser}
        />}/>
        <Route path='/login/:id/myreservation' element={<MyReservation
        userTrips={userTrips}
        handleDeleteTripUser={handleDeleteTripUser}
      />}/>
      </Route>  
      
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Missing/>}/>
      </Route>
    </Routes>      
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