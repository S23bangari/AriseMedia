import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Review from './Components/Review/Review'
import PopularWork from './Components/PopularWork/PopularWork'
import Shortvideos from './Components/ShortVideo/Shortvideo'
import Bigcreator from './Components/Bigcreator/Bigcreator'
import HearFromClient from './Components/HearFromClient/HearFromClient'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout