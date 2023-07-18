import React from 'react'
import { MdHeight, MdHotelClass } from "react-icons/md";
const Centerr = (props) => {
   const funx=(home)=>{
       if(home==='home') 
       return
        {
            <div className="boxx" style={{ position: 'absolute',zIndex:'1' }}>
            <div className={props.home} style={{
              marginLeft: '250px',
              marginTop: '200px'
            }}>
              <MdHotelClass style={{ height: '400px', width: '400px', color: '#52c7ee', opacity: '0.2' }} />
            </div>
            <div className="contentt" style={{ marginTop: '-250px', marginLeft: '450px', color: 'red' }}>
              <p className='para'>WELCOME TO</p>
              <p className='para'>SCENIC SOLITUDE RESORT</p>
            </div>
            </div>
        }
        
    }
  return (
    <div>
        <div className='none'>
        
         
          {funx(props.can)}

          </div>
      
        </div>
  )
}

export default Centerr
