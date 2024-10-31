import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import './MenuNavbar.css';

const MenuNavbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isExclusiveVisible, setIsExclusiveVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const exclusiveElement = document.querySelector('.exclusive');
      if (exclusiveElement) {
        const { top, bottom } = exclusiveElement.getBoundingClientRect();
        setIsExclusiveVisible(top < window.innerHeight && bottom >= 0); // Checks if any part of `Exclusive` is in view
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call initially to check if Exclusive is in view on page load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: '30px',
        width: '100%',
        backgroundColor: 'transparent',
        zIndex: '1000',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <nav style={{ display: 'flex', width: '100%', padding: '30px' }}>
        <div style={{ flex: 1, display: 'flex', gap: '20px' }}>
          <a
            href="#menu"
            className={`navbar-link ${isExclusiveVisible ? 'black-text' : ''}`}
            style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
            }}
          >
            {isMenuVisible ? <RxCross1 /> : <RxHamburgerMenu />}
          </a>
          <a href="#women" className={`navbar-link ${isExclusiveVisible ? 'black-text' : ''}`}>Women</a>
          <a href="#men" className={`navbar-link ${isExclusiveVisible ? 'black-text' : ''}`}>Men</a>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <a href="#search" className={`navbar-link ${isExclusiveVisible ? 'black-text' : ''}`}>Search</a>
          <hr style={{ width: '300px', border: '0.5px solid gray', marginTop: '5px' }} />
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
          <a href="#login" className={`navbar-link ${isExclusiveVisible ? 'black-text' : ''}`}>Login</a>
          <a href="#bag" className={`navbar-link ${isExclusiveVisible ? 'black-text' : ''}`}>Bag</a>
        </div>
      </nav>
      
      {isMenuVisible && (
        <div
          style={{
            position: 'absolute',
            top: '0px',
            left: '60px',
            width: '300px',
            height: '90vh',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            padding: '20px',
            zIndex: '1001',
            borderRadius: "5px"
          }}
        >
          <h1 style={{ color: 'black', fontFamily: "monospace", fontWeight: "lighter", fontSize: "30px", width: "100%" }}>Massimo Dutti</h1>
        </div>
      )}
    </div>
  );
};

export default MenuNavbar;
