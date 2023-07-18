import React, { useState } from 'react'
import './Cssfiles/Header.css'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiMoreHorizontal } from "react-icons/fi";
import { MdHeight, MdHotelClass } from "react-icons/md";

import { IoMdClose } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { BiConversation } from "react-icons/bi";
import { MdBrunchDining } from "react-icons/md";
import { RiBox2Fill } from "react-icons/ri";
import { PiCallBellThin } from "react-icons/pi";
import { MdOutlineCallEnd } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";
import { IoIosCall } from "react-icons/io";
import { Box, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
const Header = (props) => {

  const nav = useNavigate();
  const gotoHome = () => {
    nav('/');
  }
  const gotoLogin = () => {
    nav('/login');
  }
  const gotoSignup = () => {
    nav('/signup');
  }
  const gotoGallery = () => {
    nav('/gallery')
  }
  const gotoReservation = () => {
    nav('/reserve')
  }
  const gotoDining = () => {
    nav('/dining')
  }
  const gotoContact = () => {
    nav('/contact')
  }
  const gotoProfile = () => {
    nav('/profile')
  }

  const [active, setActive] = useState('nav_list_items');
  // const [activea, setActivea] = useState('not_show');
  const [toggleIcon, setToggleIcon] = useState('nav__toggler');
  const navToggle = () => {
    active === 'nav_list_items' ? setActive('nav_list_items nav__active') : setActive('nav_list_items')

    //toggle Icon
    toggleIcon === 'nav__toggler'
      ? setToggleIcon('nav__toggler toggle')
      : setToggleIcon('nav__toggler')
  }

  const [bbb, setBbb] = useState('not_basic_show')

  const [aaa, setAaa] = useState('hide_dots');
  // const [bbb,setBbb] = useState('not_basic_hide')

  // const [aaa,setAaa] = useState('show_dots hide_cross');

  // const func=()=>{
  //   bbb==='not_basic_hide' ? setAaa('not_basic_show') : setAaa('not_basic_hide')

  //   aaa==='show_dots hide_cross' ? setBbb('hide_dots show_cross') : setBbb('show_dots hide_cross')

  // }
  const func = () => {
    bbb === 'not_basic_show' ? setAaa('not_basic_show') : setAaa('not_basic_show')

    aaa === 'hide_dots' ? setBbb('hide_dots') : setBbb('hide_dots')

  }


  const funx = (home) => {
    if (home === 'home') {
      return (
        <div className="boxx" style={{ position: 'absolute', zIndex: '2' }}>
          <div
            className={props.home}
            style={{
              marginLeft: '250px',
              marginTop: '200px',
              position: 'relative',
              zIndex: '1',
            }}
          >
            <MdHotelClass
              style={{
                height: '400px',
                width: '400px',
                color: '#52c7ee',
                opacity: '0.2',
              }}
            />
          </div>
          <div
            className="contentt"
            style={{ marginTop: '-250px', marginLeft: '450px', color: 'red', position: 'relative', zIndex: '1' }}
          >
            <p className="para">WELCOME TO</p>
            <p className="para">SCENIC SOLITUDE RESORT</p>
          </div>
        </div>
      );
    }
  };
  // const funx = (home) => {
  //   if (home === 'home') {
  //     return (
        
  //     );
  //   }
  // };

  return (
    <header className={props.type}>
 <div className="none">
        <div className="boxx" style={{ position: 'relative', zIndex: '1' }}>
          {funx(props.home)}
        </div>
      </div>
      
      <div className="header-main">
        <div className="brand">
          {/* <span className="small-logo">
            <MdHotelClass style={{marginRight:'100px',height:'70px',width:'70px',opacity:'0.5'}}/>
          </span> */}
          Scenic Solitude Resort

        </div>

        <ul className={active}>
          <li className='nav_item' onClick={gotoHome}>HOME</li>

          <li className='nav_item' onClick={gotoLogin}>LOGIN</li>
          <li className='nav_item' onClick={gotoSignup}>SIGN UP</li>
          <div onClick={gotoProfile}>
            <Avatar style={{backgroundColor: 'blue', }}><p style={{justifyContent: 'center', marginTop: "15px"}}>A</p></Avatar>
          <li className='nav_item' >PROFILE</li>
          </div>
          <div className={bbb} style={{ backgroundColor: '#000055', marginTop: '115px' }}>
            <div className={props.home}>
              {/* {console.log(props.home)} */}

              <div className='inside' style={{ backgroundColor: '#00003c72', paddingLeft: '30px', minHeight: '690px', marginBottom: '10px', width: '300px', right: '0' }}>
                <li className='nav_item_inside' style={{ marginTop: '20px' }} onClick={gotoGallery}><TfiGallery /> GALLERY</li>
                <li className='nav_item_inside' onClick={gotoReservation}><BiConversation /> RESERVATION</li>
                <li className='nav_item_inside' onClick={gotoDining}><PiCallBellThin /> DINING</li>
                <li className='nav_item_inside' onClick={gotoContact}><IoIosCall /> CONTACT</li>

              </div>
            </div>
          </div>

        </ul>

        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

      </div>
    </header>
  )
}

export default Header
