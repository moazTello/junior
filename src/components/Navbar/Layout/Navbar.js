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
    const { navDisplay,color,setColor,hoverColor
        // ,setHoverColor
     } = useContext(DataContext);
    const [ clicked , setClicked ] = useState(false);
    const [ cololist,setCololist ] = useState(false);
    const [n1,setn1] = useState(true);
    const [n2,setn2] = useState(true);
    const [n3,setn3] = useState(true);
    const [n4,setn4] = useState(true);
    const [n5,setn5] = useState(true);
    // const [theme , setTheme ] = useState(1);
    // const themeChange = () => {
    //     if(theme<4){setTheme(theme+1);}
    //     else{setTheme(1)}
    //     switch (theme){
    //         case 1:
    //             setColor('rgb(63,138,226)');
    //             break;
    //         case 2:
    //             setColor('rgb(255,191,53)');
    //             break;
    //         case 3:
    //             // setColor('rgb(254,109,81)');
    //             // setColor('rgb(163,50,50)');
    //             setColor('rgb(150,25,25)');
    //             break;
    //         case 4:
    //             setColor('rgb(67,160,60)');
    //             // setColor('#F2C15D');
    //             break;
    //         default:
    //             setColor('rgb(67,160,60)');
    //             break; 
    //     }
    // }
    const col1 = () => {
        setColor('rgb(63,138,226)');
        setCololist(false);
    }
    const col2 = () => {
        setColor('rgb(67,160,60)');
        setCololist(false);
    }
    const col3 = () => {
        setColor('rgb(255,191,53)');
        setCololist(false);
    }
    const col4 = () => {
        setColor('rgb(150,25,25)');
        setCololist(false);
    }
    const hand1 = () => {
        if(n1){setn1(false)}
        else{setn1(true)}
    }
    const hand2 = () => {
        if(n2){setn2(false)}
        else{setn2(true)}
    }
    const hand3 = () => {
        if(n3){setn3(false)}
        else{setn3(true)}
    }
    const hand4 = () => {
        if(n4){setn4(false)}
        else{setn4(true)}
    }
    const hand5 = () => {
        if(n5){setn5(false)}
        else{setn5(true)}
    }
    const handleClick = () => {
        if(width<=650){
            setClicked(!clicked);
        }
    }
        return(
            <nav className='NavbarItems' style={{backgroundColor:color}}>
                <p className='Navbar-logo'>
                    Travel
                </p>
                <div className='menu-icon' onClick={handleClick}>
                    <i className='bar'>
                        {clicked ? <AiOutlineClose/> : <BiMenu/>}
                    </i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'} style={{backgroundColor:color}}>
                            {/* <button className='nav-links' onClick={themeChange} style={{backgroundColor:n5 ? color : hoverColor  ,color:n5 ? hoverColor : color , border:'none' ,fontSize:width > 750 ? '20px' : '16px',display:width > 750 || width < 650 ? 'block' : 'none'}} onMouseEnter={hand5} onMouseLeave={hand5}><p>ثمة الموقع</p></button> */}
                            <button className='nav-links' 
                                    // onClick={themeChange} 
                                    style={{backgroundColor:n5 ? color : hoverColor  ,
                                            color:n5 ? hoverColor : color , border:'none' ,
                                            fontSize:width > 750 ? '20px' : '16px',position:'relative',
                                            display:width > 750 || width < 650 ? 'block' : 'none'
                                    }} 
                                    onMouseEnter={hand5} 
                                    onMouseLeave={hand5} 
                                    onClick={() => setCololist(!cololist)}
                            >
                                <p>
                                    ثمة الموقع 
                                </p>
                                </button>
                                <div className='colorcont' style={{ left:width > 650 ? `${width - 720}px`:`${width - 200}px`
                                                                    ,top:width > 650 ? '65px': '10px'
                                                                    ,display:(( width <= 750 && width > 650) || !cololist) ? 'none' : 'flex'}}>
                                    <p className='colorcyrcle' style={{backgroundColor:'rgb(63,138,226)'}} onClick={col1}></p>
                                    <p className='colorcyrcle' style={{backgroundColor:'rgb(67,160,60)'}} onClick={col2}></p>
                                    <p className='colorcyrcle' style={{backgroundColor:'rgb(255,191,53)'}} onClick={col3}></p>
                                    <p className='colorcyrcle' style={{backgroundColor:'rgb(150,25,25)'}} onClick={col4}></p>
                                {/* <p style={{width:'14px',height:'14px',backgroundColor:'rgb(67,160,60)',borderRadius:'50%'}}></p> */}
                                </div> 
                            <Link to='/about' className='nav-links' style={{backgroundColor:n1 ? color : hoverColor  ,color:n1 ? hoverColor : color}} onMouseEnter={hand1} onMouseLeave={hand1}  onClick={handleClick}>
                                <p>حول الشركة</p> 
                            </Link>
                            <Link to='/contactus'  className='nav-links' style={{backgroundColor:n2 ? color : hoverColor  ,color:n2 ? hoverColor : color}} onMouseEnter={hand2} onMouseLeave={hand2}  onClick={handleClick}>
                                <p>اتصل بنا</p> 
                            </Link>
                            <Link to='/login'className='nav-links' onClick={handleClick} style={{display:navDisplay ? 'block' : 'none' , backgroundColor:n3 ? color : hoverColor  ,color:n3 ? hoverColor : color}} onMouseEnter={hand3} onMouseLeave={hand3}>
                                <p>تسجيل الدخول</p> 
                            </Link>
                            <Link to={`/login/alltrips`}  className='nav-links' onClick={handleClick} style={{display:!navDisplay ? 'block' : 'none' , backgroundColor:n3 ? color : hoverColor  ,color:n3 ? hoverColor : color}} onMouseEnter={hand3} onMouseLeave={hand3}>
                                <p>الرحلات المتوفرة</p> 
                            </Link>
                            <Link to='/junior'  className='nav-links' style={{backgroundColor:n4 ? color : hoverColor  ,color:n4 ? hoverColor : color}} onClick={handleClick} onMouseEnter={hand4} onMouseLeave={hand4} >
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