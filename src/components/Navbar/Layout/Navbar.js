import React from 'react';
import {useState} from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = ({navDisplay}) => {
    const [ clicked , setClicked ] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
        return(
            <nav className='NavbarItems'>
                <h1 className='Navbar-logo'>
                    Travel
                </h1>
                <div className='menu-icon' onClick={handleClick}>
                    <i className='bar'>
                        {clicked ? <AiOutlineClose/> : <BiMenu/>}
                    </i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                { MenuItems.map((item,index) => {
                        if(item.url === '/login') { item.display = navDisplay};
                        if(item.url === '/myprofile') { item.display = !navDisplay};
                        return(     
                            <Link to={item.url} key={index} className={item.cName} style={{display:item.display ? 'block' : 'none'}} >
                                <p>{item.title}</p> 
                            </Link>
                        )
                    }
                )}
                </ul>
            </nav> 
        ) 
}

export default Navbar;
{/* <>
                                {item.display && 
                                    <Link to={item.url} key={index} className={item.cName} >
                                         <p>{item.title}</p> 
                                    </Link>
                                }
                            </> */}