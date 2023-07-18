import React from 'react'
import Foot from './Foot'
import Content from './Content'
import Header from './Header'

const HomePage = () => {
  return (
    <div>
      <Header type='Back' home='home'/>
      {/* <Content/> */}
      <Foot/>
    </div>
  )
}

export default HomePage
