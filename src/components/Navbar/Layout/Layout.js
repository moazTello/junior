import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'

const Layout = ({navDisplay}) => {
  return (
    <div className='App'>
        <Navbar
          navDisplay={navDisplay}
        />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout;