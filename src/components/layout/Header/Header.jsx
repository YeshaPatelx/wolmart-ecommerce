import React, { useState } from "react";
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import Navigation from "./Navigation";


import "./styles/Header.css";
import "./styles/menu.css";
import AuthModal from "../../auth/AuthModal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header>
        <TopBar openModal={() => setShowModal(true)} />
        <MainHeader />
        <Navigation />
      </header>
      
      <AuthModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Header;