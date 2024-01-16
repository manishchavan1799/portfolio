import React from "react";
// import img from '../assets/manish_portfolio.png';

const NavContent= ()=>(
    <>
        <h2>Manish Chavan</h2>
        <div className="middle">
            <a href="#home">Home</a>
            <a href="#word">Word</a>
            <a href="#timeline">Experience</a>
            <a href="#services">Services</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#contact">Contact</a>
        </div>
        <div className="email">
        <a href="mailto:manishchavan1799@gmail.com">
            <button>Email</button>
        </a>
        </div>
    </>
);

const Header = () => {
  return (
    <nav>
        <NavContent />
    </nav>
  );
};


export default Header;
