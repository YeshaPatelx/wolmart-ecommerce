import React from 'react'

import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import ScrollTopButton from './components/common/ScrollTopButton/ScrollTopButton'
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
    <Header/>
      <main>
       
        <AppRoutes />
      </main>
      <Footer/>

      <ScrollTopButton/>
      
    </>
  )
}

export default App