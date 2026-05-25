import React from 'react'
import Home from './pages/Home'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import ScrollTopButton from './components/common/ScrollTopButton/ScrollTopButton'

const App = () => {
  return (
    <>
    <Header/>
      <main>
        <Home />

      </main>
      <Footer/>

      <ScrollTopButton/>
      
    </>
  )
}

export default App