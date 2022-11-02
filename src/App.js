import './App.css';
import './pages/Classes.css';
// import Navbar from './components/Navbar';
import Layout from './components/Navbar/Layout/Layout';
import { Route,Routes, useNavigate } from 'react-router-dom';
// import Students from './pages/Students';
// import Classes from './pages/Classes';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';
// import NewClass from './pages/NewClass';
// import ClassPage from './pages/ClassPage';
import About from './pages/About';
import Missing from './pages/Missing';
// import EditClass from './pages/EditClass';
// import { format } from 'date-fns';
import api from './api/classes'; 
// import AddStudentsClass from './pages/AddStudentsClass';
// import RemoveStudentsClass from './pages/RemoveStudentsClass';
// import AllStudents from './pages/AllStudents';
// import NewStudent from './pages/NewStudent';
// import StudentPage from './pages/StudentPage';
// import EditStudent from './pages/EditStudent';
// import Notifications from './pages/Notifications';
// import AddTeachersClass from './pages/AddTeachersClass';
// import AllTeachers from './pages/AllTeachers';
// import RemoveTeachersClass from './pages/RemoveTeachersClass';
// import NewTeacher from './pages/NewTeacher';
// import TeacherPage from './pages/TeacherPage';
// import EditTeacher from './pages/EditTeacher';
import LogIn from './pages/LogIn';
import Trips from './pages/Trips';
import MyReservation from './pages/MyReservation';
function App() {
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [logedInUser,setLogedInUser] = useState([]);
  const [navDisplay,setNavDisplay] = useState(true);
  const [trips,setTrips] = useState([]);
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
    if(userName === "0968767511" && password === "kt11100110220"){
      const response = api.get('./Users/1');
      setLogedInUser(response);
      setNavDisplay(false);
      navigate('/trips');

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
      <Route index element={<HomePage/>}/>
      <Route path='/login' element={<LogIn
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
      />}>
      </Route>
      <Route path='/myreservation' element={<MyReservation
        userTrips={userTrips}
        handleDeleteTripUser={handleDeleteTripUser}
      />}>
      </Route>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Missing/>}/>
      </Route>
    </Routes>      
  );
}
// npx json-server -p 3500 -w src/data/db.json
export default App;