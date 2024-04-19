import React from 'react'
import Header from './Header'
import Cardscroll from './cardscroll'
import Topresturant from './Topresturant'
import Filterbtn from './Filterbtn'
import Footer from './Footer'
const Body = () => {
  return (
    <div>
        <Header/>
        <Cardscroll/>
        <Topresturant/>
        <Filterbtn/>
        <Footer/>
    </div>
  )
}

export default Body
