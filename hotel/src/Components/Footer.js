import React from 'react'
import './Cssfiles/Footer.css'

import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <div className='whole'>
    <div className='container'>
      
      <div className="col">
        <div className="side" style={{marginLeft:'10px'}}>

        <h1 className='hel'>Phone Support</h1>
        <h6 >24 HOURS A DAY</h6>
        </div>
        <h1 className='last' style={{marginTop:'40px',marginLeft:'10px'}}>+ 01 234 567 890</h1>
      </div>
      <div className="col">
        <div className="side" style={{marginLeft:'10px'}}>

        <h1 className='hel'>Follow US</h1>
        <h6 >SOCIAL MEDIA CHANNELS</h6>
        </div>
        <div className="media last" style={{marginLeft:'115px'}}>
        <BsFacebook/>   
        <FaInstagramSquare/>
        <AiFillTwitterCircle/>
        <BsYoutube/>

        </div>
      </div>
   
      <div className="col">
        <div className="side" style={{marginLeft:'10px'}}>

        <h1 className='hel'>Our NewsLetter</h1>
        <h6 >SIGN UP FOR SPECIAL OFFERS</h6>
        </div>
        <h1 className='last' style={{marginTop:'40px',marginLeft:'20px'}}>+ 01 234 567 890</h1>
      </div>
      
    </div>
    <div className='bottom' style={{listStyleType:'none'}}>
      <li>Privacy Policy</li>
      <li>Cookie Policy</li>
      <li>Credits</li>
    </div>
      <div className='bottom_last'>Copyrights &copy; 2023 SCENIC SOLITUD RESORT - All Rights Reserved. - P.IVA 09472742954  </div>
    </div>
  )
}

export default Footer
