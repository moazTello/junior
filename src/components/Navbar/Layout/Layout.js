import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'

const Layout = ({navDisplay,logedInUser}) => {
  return (
    <div className='App'>
        <Navbar
          navDisplay={navDisplay}
          logedInUser={logedInUser}
        />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout;