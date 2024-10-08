import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { Home } from './component/Home';
import { Blog } from './component/Blog';
// import Navbar from './component/Navbar';


// function App() {
//   return (
//     <>
   
//     <Navbar />
//     <Home/>
//     <Blog/>
//     </>
//   )
  
// }




// Define MobileMenu component
const MobileMenu = () => {
  return (
    <div className={'mobile-menu'}>
      <a href='#home'>Home</a>
      <a href='#news'>News</a>
      <a href='#shop'>Shop</a>
      <a href='#contact'>Contact</a>
      <a href='#about'>About</a>
      <a href='#privacy'>Privacy Policy</a>
    </div>
  );
};

function App() {
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <div className='topnav'>
        {/* Your Logo/Brand here */}
        <div className='logo'>
          Kalyan<span>Emporium</span>
        </div>

        {/* Desktop Menu, which only appears on large screens */}
        <div className='menu'>
          <a href='#home' className='active-link'>
            Home
          </a>
          <a href='#news'>News</a>
          <a href='#shop'>Shop</a>
          <a href='#contact'>Contact</a>
          <a href='#about'>About</a>
        </div>

        {/* This button only shows up on small screens. It is used to open the mobile menu */}
        <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
          &#8801;
        </button>
      </div>

      {/* The mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
          &times;
        </button>
      )}

      {/* Dummy content */}
      <div className='content'>
        <h2>Welcome to KalyanEmporium.com</h2>
        <p>Responsive top navigation bar with React and pure CSS</p>
      </div>
    </>
  );
}


export default App;
