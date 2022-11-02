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
function App() {
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [logedInUser,setLogedInUser] = useState([]);
  const [navDisplay,setNavDisplay] = useState(true);
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
        // const response2 = await api.get('/');
        // const response3 = await api.get('/teachers');
        setTrips(response.data);
        // setAllStudents(response2.data);
        // setAllTeachers(response3.data);
      }
      catch(err){
        console.log(err.message);
      }
    }
    fetchClasses();
  },[]);
  const handleSubmitlogin = () => {
    if(userName === "0968767511" && password === "qwerqwer"){
      const response = api.get('./Users/1');
      setLogedInUser(response);
      setNavDisplay(false);
      navigate('/trips');
    }
    else{
      alert('المعلومات غير صحيحة يرجى اعادة تعبئة المعلومات ')
      navigate('/login');
    }
  }
  const handleTripUser = (id) => {
    const newtrip = trips.find((trip) => (trip.id_trip) === id);
    const newtripobj = {id_trip:id,date_trip:newtrip.date_trip,sets_trip:newtrip.sets_trip,
                      destination_trip:newtrip.destination_trip,ticket_price:newtrip.ticket_price,
                      };
    const findtrip = userTrips.find((trip) => (trip.id_trip) === id);
    if(!findtrip){
        const usertrips = [...userTrips,newtripobj];
        setUserTrips(usertrips);
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
      <Route 
        path='/login' 
        element={<LogIn
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
        handleSubmitlogin={handleSubmitlogin}
      />}>
      </Route>
      <Route path='/trips' element={<Trips
        trips={trips}
        handleTripUser={handleTripUser}
        logedInUser={logedInUser}
      />}>
      </Route>
      <Route path='/myreservation' element={<MyReservation
        userTrips={userTrips}
        handleDeleteTripUser={handleDeleteTripUser}
      />}>
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
export default App;