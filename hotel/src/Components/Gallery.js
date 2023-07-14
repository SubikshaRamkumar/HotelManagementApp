import React from 'react'
import Header from './Header'
import GalContents from './GalContents'
import './Cssfiles/Gallery.css'
import Footer from './Footer'

const Gallery = () => {
  return (
    <div>
      <Header type='noBack' home='nohome'/>
      <GalContents/>
      {/* <Footer/> */}
    </div>
  )
}

export default Gallery
