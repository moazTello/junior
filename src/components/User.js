// import { useState, useEffect } from "react";
// // import axios from "../api/trips";
// import useAxiosPrivate from '../hooks/useAxiosPrivate';
// import useRefreshToken  from "../hooks/useRefreshToken";
// import { useNavigate,useLocation } from "react-router-dom";
// const User = () => {
//     const [usersToken,setUsersToken ] = useState('');
//     const axiosPrivate = useAxiosPrivate();
//     const refresh = useRefreshToken();
//     const navigate = useNavigate();
//     const location = useLocation();
//     useEffect(() => {
//         let isMounted = true;
//         const controller = new AbortController();
//         const getUsers = async () => {
//             try{
//                 const response = await axios.get('/Users' , {
//                     signal: controller.signal
//                 });
//                 console.log(response);
//                 isMounted && setUsersToken(response.data);
//             }
//             catch(err){
//                 console.log(err);
//                 navigate('/login',{state:{from:location},replace:true})
//             }
//         }
//         getUsers();

//         return() => {
//             isMounted = false;
//             controller.abort();
//         }
//     },[])
//   return (
//     <article>
//         <h2>Users List</h2>
//         {usersToken?.length ? (
//             <ul>
//                 {usersToken.map((user,index) => <li key={index}>{user?.userName}</li>)}
//             </ul>
//         ) : <p>no users to display</p>}
//         <button
//             onClick={() => refresh()}
//         >
//             Refresh
//         </button>
//     </article>
//   )
// }

// export default User