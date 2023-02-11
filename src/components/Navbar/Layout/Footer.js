import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
// import smalllogo from '../../../images/smalllogo.svg';
// import small2logo from '../../../images/small2logo.svg';
// import smalllogo from '../../../images/smalllogogreen.svg';
// import small2logo from '../../../images/small2logogreen.svg';
import { Link } from 'react-router-dom';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle , AiFillInstagram ,AiFillLinkedin} from 'react-icons/ai';
import { useContext } from 'react';
import DataContext from '../../../context/DataContext';
const Footer = () => {
  const {color} = useContext(DataContext);
  const {width} = useWindowSize();
  // const [logo,setLogo] = useState(smalllogo);
  const [logos,setLogos ] = useState(true); 
  useEffect(() =>{
    if(width>650){
      // setLogo(smalllogo);
      // setLogo(smalllogo);
      setLogos(true);
    }
    else{
      setLogos(false);

      // setLogo(small2logo);
    }
  },[width])
  return (
    <div className='footer' style={{backgroundColor:color}}>
      <div style={{width:'100%',paddingTop:'50px',paddingBottom:'50px',display:'flex',justifyContent:'space-evenly',flexFlow:'wrap'}}>
          <div className='footercontainer'>
            {/* <FaBus className='icons'/> */}
            <Link to='/condetions' className='footertext'>شروط الاستخدام</Link>  
            <Link to='/policy' className='footertext'>سياسة الخصوصية</Link>   
            <Link to='/map' className='footertext'>خرائط المحافظات</Link>  
            {/* <p className='footertext'>الأمان </p>   */}
            {/* <p className='footertext'>شروط و أحكام</p>   */}
          </div>
          <div className='footercontainer'>
            {/* <GiSandwich className='icons'/> */}
            <Link to='contactus' className='footertext'>هل تحتاج الى مساعدة</Link>
            <Link to='/login'className='footertext'>تسجيل الدخول</Link>  
            <Link to='/mobilepage' className='footertext'>تطبيق الهاتف المحمول</Link> 
            {/* <p className='footertext'>الوظائف</p>   */}
          </div>
          <div className='footercontainer'>
            {/* <FaToilet className='icons'/> */}
            <Link to='/about' className='footertext'>حول الشركة</Link> 
            {/* <p className='footertext'>الشراكة</p>  */}
            <Link to='/Team' className='footertext'>الفريق</Link> 
            <Link to='/employeeorder' className='footertext'>طلبات التوظيف</Link> 
          </div>
          <div className='footercontainer'>
            {/* <img src={logo} alt=''/>  */}
            {logos &&
            <svg width="248" height="148" viewBox="0 0 248 148" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="248" height="148" rx="25" fill="white" fillOpacity="0.8"/>
            <path d="M83.9254 103.351V83.7147H86.8402V86.6806H87.0447C87.4027 85.709 88.0504 84.9207 88.9879 84.3156C89.9254 83.7104 90.9822 83.4079 92.1584 83.4079C92.38 83.4079 92.657 83.4122 92.9893 83.4207C93.3217 83.4292 93.5732 83.442 93.7436 83.459V86.5272C93.6413 86.5016 93.407 86.4633 93.0405 86.4122C92.6825 86.3525 92.3033 86.3227 91.9027 86.3227C90.9482 86.3227 90.0959 86.5229 89.3459 86.9235C88.6044 87.3156 88.0163 87.861 87.5817 88.5599C87.1555 89.2502 86.9425 90.0386 86.9425 90.9249V103.351H83.9254ZM103.098 103.811C101.854 103.811 100.725 103.577 99.7106 103.108C98.6964 102.631 97.891 101.945 97.2944 101.05C96.6978 100.147 96.3995 99.0556 96.3995 97.7772C96.3995 96.6522 96.6211 95.7403 97.0643 95.0414C97.5075 94.334 98.0998 93.7801 98.8413 93.3795C99.5827 92.9789 100.401 92.6806 101.296 92.4846C102.199 92.2801 103.107 92.1181 104.019 91.9988C105.212 91.8454 106.179 91.7303 106.921 91.6536C107.671 91.5684 108.216 91.4278 108.557 91.2318C108.907 91.0357 109.081 90.6948 109.081 90.209V90.1068C109.081 88.8454 108.736 87.8653 108.046 87.1664C107.364 86.4676 106.328 86.1181 104.939 86.1181C103.499 86.1181 102.37 86.4335 101.551 87.0641C100.733 87.6948 100.158 88.3681 99.8256 89.084L96.962 88.0613C97.4734 86.8681 98.1552 85.9391 99.0075 85.2744C99.8683 84.6011 100.806 84.1323 101.82 83.8681C102.843 83.5954 103.848 83.459 104.837 83.459C105.468 83.459 106.192 83.5357 107.01 83.6891C107.837 83.834 108.634 84.1366 109.401 84.5968C110.176 85.057 110.82 85.7516 111.331 86.6806C111.843 87.6096 112.098 88.8539 112.098 90.4136V103.351H109.081V100.692H108.928C108.723 101.118 108.382 101.574 107.905 102.06C107.428 102.546 106.793 102.959 106 103.3C105.208 103.641 104.24 103.811 103.098 103.811ZM103.559 101.101C104.752 101.101 105.757 100.867 106.576 100.398C107.402 99.9292 108.025 99.3241 108.442 98.5826C108.868 97.8411 109.081 97.0613 109.081 96.2431V93.4818C108.953 93.6352 108.672 93.7758 108.238 93.9036C107.811 94.0229 107.317 94.1295 106.755 94.2232C106.201 94.3085 105.659 94.3852 105.131 94.4533C104.611 94.513 104.189 94.5641 103.865 94.6068C103.081 94.709 102.348 94.8752 101.667 95.1053C100.993 95.3269 100.448 95.6636 100.03 96.1153C99.6211 96.5585 99.4165 97.1636 99.4165 97.9306C99.4165 98.9789 99.8043 99.7715 100.58 100.308C101.364 100.837 102.357 101.101 103.559 101.101ZM132.959 83.7147L125.697 103.351H122.629L115.368 83.7147H118.641L124.061 99.3624H124.266L129.686 83.7147H132.959ZM144.471 103.76C142.579 103.76 140.947 103.343 139.575 102.507C138.211 101.664 137.158 100.487 136.417 98.9789C135.684 97.4619 135.317 95.6977 135.317 93.6863C135.317 91.6749 135.684 89.9022 136.417 88.3681C137.158 86.8255 138.19 85.6238 139.511 84.763C140.84 83.8937 142.391 83.459 144.164 83.459C145.187 83.459 146.197 83.6295 147.194 83.9704C148.191 84.3113 149.099 84.8653 149.917 85.6323C150.735 86.3908 151.387 87.3965 151.873 88.6494C152.359 89.9022 152.602 91.4448 152.602 93.2772V94.5556H137.465V91.9477H149.533C149.533 90.8397 149.312 89.8511 148.869 88.9818C148.434 88.1124 147.812 87.4264 147.002 86.9235C146.201 86.4207 145.255 86.1693 144.164 86.1693C142.962 86.1693 141.923 86.4676 141.045 87.0641C140.175 87.6522 139.506 88.4193 139.038 89.3653C138.569 90.3113 138.335 91.3255 138.335 92.4079V94.1465C138.335 95.6295 138.59 96.8866 139.102 97.9178C139.621 98.9406 140.342 99.7204 141.262 100.257C142.183 100.786 143.252 101.05 144.471 101.05C145.263 101.05 145.979 100.939 146.619 100.718C147.266 100.487 147.825 100.147 148.293 99.6948C148.762 99.2346 149.124 98.6636 149.38 97.9818L152.295 98.7999C151.988 99.7886 151.472 100.658 150.748 101.408C150.023 102.149 149.129 102.729 148.063 103.147C146.998 103.556 145.8 103.76 144.471 103.76ZM160.208 77.1693V103.351H157.191V77.1693H160.208Z" fill="#292F33"/>
            <path d="M39.457 35.5874L157.744 35.5874C161.211 35.5874 164.021 38.3975 164.021 41.8639V41.8639C164.021 44.637 161.773 46.8851 158.999 46.8851L50.7547 46.8851C44.5152 46.8851 39.457 41.827 39.457 35.5874V35.5874Z" fill={`${color}`}/>
            <path d="M61.4395 46.8853H72.7122V104.527H61.4395V46.8853Z" fill={`${color}`}/>
            </svg> 
            }
            {!logos &&
            <svg width="116" height="70" viewBox="0 0 116 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="116" height="70" rx="15" fill="white" fillOpacity="0.8"/>
            <path d="M39.1941 47.3281V38.6009H40.4895V39.919H40.5804C40.7395 39.4872 41.0274 39.1368 41.4441 38.8679C41.8607 38.599 42.3304 38.4645 42.8532 38.4645C42.9516 38.4645 43.0748 38.4664 43.2225 38.4702C43.3702 38.474 43.4819 38.4796 43.5577 38.4872V39.8509C43.5123 39.8395 43.4081 39.8224 43.2452 39.7997C43.0861 39.7732 42.9176 39.7599 42.7395 39.7599C42.3153 39.7599 41.9365 39.849 41.6032 40.027C41.2736 40.2012 41.0123 40.4437 40.8191 40.7543C40.6297 41.0611 40.535 41.4115 40.535 41.8054V47.3281H39.1941ZM47.7154 47.5327C47.1623 47.5327 46.6605 47.4285 46.2097 47.2202C45.7589 47.008 45.401 46.7031 45.1358 46.3054C44.8707 45.9039 44.7381 45.419 44.7381 44.8509C44.7381 44.3509 44.8366 43.9455 45.0336 43.6349C45.2305 43.3205 45.4938 43.0743 45.8233 42.8963C46.1529 42.7183 46.5165 42.5857 46.9142 42.4986C47.3158 42.4077 47.7192 42.3357 48.1245 42.2827C48.6548 42.2145 49.0847 42.1634 49.4142 42.1293C49.7476 42.0914 49.99 42.0289 50.1415 41.9418C50.2968 41.8546 50.3745 41.7031 50.3745 41.4872V41.4418C50.3745 40.8812 50.2211 40.4455 49.9142 40.1349C49.6112 39.8243 49.151 39.669 48.5336 39.669C47.8934 39.669 47.3915 39.8092 47.0279 40.0895C46.6642 40.3698 46.4086 40.669 46.2608 40.9872L44.9881 40.5327C45.2154 40.0024 45.5184 39.5895 45.8972 39.294C46.2798 38.9948 46.6964 38.7865 47.1472 38.669C47.6017 38.5478 48.0487 38.4872 48.4881 38.4872C48.7684 38.4872 49.0904 38.5213 49.454 38.5895C49.8214 38.6539 50.1756 38.7884 50.5165 38.9929C50.8612 39.1974 51.1472 39.5062 51.3745 39.919C51.6017 40.3319 51.7154 40.8849 51.7154 41.5781V47.3281H50.3745V46.1463H50.3063C50.2154 46.3357 50.0639 46.5384 49.8517 46.7543C49.6396 46.9702 49.3574 47.1539 49.0051 47.3054C48.6529 47.4569 48.223 47.5327 47.7154 47.5327ZM47.9199 46.3281C48.4502 46.3281 48.8972 46.224 49.2608 46.0156C49.6283 45.8073 49.9048 45.5384 50.0904 45.2088C50.2798 44.8793 50.3745 44.5327 50.3745 44.169V42.9418C50.3176 43.0099 50.1926 43.0724 49.9995 43.1293C49.8101 43.1823 49.5904 43.2296 49.3404 43.2713C49.0942 43.3092 48.8536 43.3433 48.6188 43.3736C48.3877 43.4001 48.2002 43.4228 48.0563 43.4418C47.7078 43.4872 47.382 43.5611 47.079 43.6634C46.7798 43.7618 46.5373 43.9115 46.3517 44.1122C46.1699 44.3092 46.079 44.5781 46.079 44.919C46.079 45.3849 46.2514 45.7372 46.5961 45.9759C46.9445 46.2107 47.3858 46.3281 47.9199 46.3281ZM60.9867 38.6009L57.7594 47.3281H56.3958L53.1685 38.6009H54.623L57.0321 45.5554H57.123L59.5321 38.6009H60.9867ZM66.1032 47.5099C65.2623 47.5099 64.5369 47.3243 63.927 46.9531C63.321 46.5781 62.8532 46.0554 62.5236 45.3849C62.1979 44.7107 62.035 43.9266 62.035 43.0327C62.035 42.1387 62.1979 41.3509 62.5236 40.669C62.8532 39.9834 63.3115 39.4493 63.8986 39.0668C64.4895 38.6804 65.1789 38.4872 65.9668 38.4872C66.4213 38.4872 66.8702 38.563 67.3134 38.7145C67.7566 38.866 68.16 39.1122 68.5236 39.4531C68.8873 39.7902 69.177 40.2372 69.3929 40.794C69.6088 41.3509 69.7168 42.0365 69.7168 42.8509V43.419H62.9895V42.2599H68.3532C68.3532 41.7675 68.2547 41.3281 68.0577 40.9418C67.8645 40.5554 67.588 40.2505 67.2282 40.027C66.8721 39.8035 66.4516 39.6918 65.9668 39.6918C65.4327 39.6918 64.9706 39.8243 64.5804 40.0895C64.1941 40.3509 63.8967 40.6918 63.6884 41.1122C63.4801 41.5327 63.3759 41.9834 63.3759 42.4645V43.2372C63.3759 43.8963 63.4895 44.455 63.7168 44.9134C63.9479 45.3679 64.2679 45.7145 64.677 45.9531C65.0861 46.188 65.5615 46.3054 66.1032 46.3054C66.4554 46.3054 66.7736 46.2562 67.0577 46.1577C67.3456 46.0554 67.5937 45.9039 67.802 45.7031C68.0104 45.4986 68.1713 45.2448 68.285 44.9418L69.5804 45.3054C69.4441 45.7448 69.2149 46.1312 68.8929 46.4645C68.571 46.794 68.1732 47.0516 67.6998 47.2372C67.2263 47.419 66.6941 47.5099 66.1032 47.5099ZM73.0975 35.6918V47.3281H71.7566V35.6918H73.0975Z" fill="#292F33"/>
            <path d="M18.459 16.8318L73.754 16.8318C75.3935 16.8318 76.7226 18.1609 76.7226 19.8004V19.8004C76.7226 21.112 75.6593 22.1753 74.3477 22.1753L23.8025 22.1753C20.8514 22.1753 18.459 19.7829 18.459 16.8318V16.8318Z" fill={`${color}`}/>
            <path d="M28.7402 22.1755H34.013V49.4384H28.7402V22.1755Z" fill={`${color}`}/>
            </svg> 
            }
            

            <div className='facebook'>
            <a href="https://www.facebook.com/photo?fbid=900680114680665&set=a.167878474627503">
              <BsFacebook size={32} style={{color:"white"}}/>
            </a>
            <a href="https://moaztello.github.io/junior">
              <AiFillTwitterCircle size={38} style={{color:"white"}}/>
            </a>
            <a href="https://www.instagram.com/p/Cn4df45KfAirdAYW7VB_VJi5eLKTb4SHqXjRmU0/">
              <AiFillInstagram size={38} style={{color:"white"}}/>
            </a>
            <a href="https://moaztello.github.io/junior">
              <AiFillLinkedin size={38} style={{color:"white"}}/>
            </a> 
            </div>
            <div className='facebook2'>
            <a href="https://www.facebook.com/photo?fbid=900680114680665&set=a.167878474627503">
              <BsFacebook size={15} style={{color:"white"}}/>
            </a>
            <a href="https://moaztello.github.io/junior">
              <AiFillTwitterCircle size={18} style={{color:"white"}}/>
            </a>
            <a href="https://www.instagram.com/p/Cn4df45KfAirdAYW7VB_VJi5eLKTb4SHqXjRmU0/">
              <AiFillInstagram size={18} style={{color:"white"}}/>
            </a>
            <a href="https://moaztello.github.io/junior">
              <AiFillLinkedin size={18} style={{color:"white"}}/>
            </a> 
            </div>  
          </div>
        </div>
    </div>
  )
}

export default Footer;