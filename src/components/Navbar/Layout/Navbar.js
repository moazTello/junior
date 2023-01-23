import React from 'react';
import {useState} from 'react';
// import { MenuItems } from './MenuItems';
import './Navbar.css';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link} from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import { useContext } from 'react';
import DataContext from '../../../context/DataContext';

const Navbar = () => {
    const { width } = useWindowSize();
    const { navDisplay } = useContext(DataContext);
    const [ clicked , setClicked ] = useState(false);
    const handleClick = () => {
        if(width<=650){
            setClicked(!clicked);
        }
    }
        return(
            <nav className='NavbarItems'>
                <p className='Navbar-logo'>
                    Travel
                </p>
                <div className='menu-icon' onClick={handleClick}>
                    <i className='bar'>
                        {clicked ? <AiOutlineClose/> : <BiMenu/>}
                    </i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}> 
                            <Link to='/about' className='nav-links' onClick={handleClick}>
                                <p>حول الشركة</p> 
                            </Link>
                            <Link to='/contactus'  className='nav-links'  onClick={handleClick}>
                                <p>اتصل بنا</p> 
                            </Link>
                            <Link to='/login'className='nav-links' onClick={handleClick} style={{display:navDisplay ? 'block' : 'none'}} >
                                <p>تسجيل الدخول</p> 
                            </Link>
                            <Link to={`/login/alltrips`}  className='nav-links' onClick={handleClick} style={{display:!navDisplay ? 'block' : 'none'}} >
                                <p>الرحلات المتوفرة</p> 
                            </Link>
                            <Link to='/junior'  className='nav-links' onClick={handleClick} >
                                <p>الرئيسية</p> 
                            </Link>
                {/* { MenuItems.map((item,index) => {
                        if(item.url === '/login') { item.display = navDisplay};
                        if(item.url === '/myprofile') {item.display = !navDisplay}
                        return(     
                            <Link to={item.url} key={index} className={item.cName} style={{display:item.display ? 'block' : 'none'}} >
                                <p>{item.title}</p> 
                            </Link>
                        )
                    }
                )} */}
                </ul>
            </nav> 
        ) 
}

export default Navbar;