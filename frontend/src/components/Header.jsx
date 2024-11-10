import React from 'react';

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo"><span>Let's Celebrate </span>Together</a>
      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#service">service</a>
        <a href="#about">about</a>
        <a href="#gallery">gallery</a>
        <a href="#price">price</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
        <a href="#login">Login</a>
        <a href="#signup">Sign up</a>
      </nav>
      <div id="menu-bars" className="fas fa-bars"></div>
    </header>
  );
}

export default Header;
