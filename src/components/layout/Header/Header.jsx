import React from 'react'
import TopBar from './TopBar'
import MainHeader from './MainHeader'
import Navigation from './Navigation'
import './styles/Header.css';
import './styles/menu.css'

const Header = () => {
  return (
    <header>
        <TopBar/>
        <MainHeader/>
        <Navigation/>
    </header>
  )
}

export default Header