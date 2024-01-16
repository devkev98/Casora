import './NavigationBar.css'
import logo from "./logo.png";
import { useState } from "react";
import { Link } from 'react-router-dom';
export default function NavigationBar() {
  // const [isScroll,setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navigationbar');
    if (window.scrollY > 0) {
      navbar.style.boxShadow = "0px 0px 7px 0px rgba(0, 0, 0, 0.5)";
    } else {
      navbar.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0)";
    }
  });
  return (
    <div id="navigationbar">
      <Link to="/">
        <div id="logo">
          <img src={logo} />
          <div id="wordmark">Casora</div>
        </div>
      </Link>
      <div id="mid-links">
        <ul>
          <li>Buy</li>
          <li>Sell</li>
          <li>Rent</li>
        </ul>
      </div>
      <div id="right-links">
        <ul>
          <Link to="/blog"><li>Blog</li></Link>
          <Link to="/savedhomes"><li>Saved Homes</li></Link>
          <Link to="/signinupform"><li>Sign up / Sign in</li></Link>
        </ul>
      </div>
      <div id="menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
      </div>
      {isMenuOpen && (<div id="mobile-menu">
        <ul>
          <li>Buy</li>
          <li>Sell</li>
          <li>Rent</li>
        </ul>
        <div className="horizontal-divider"></div>
        <ul>
          <Link to="/blog"><li>Blog</li></Link>
          <Link to="/savedhomes"><li>Saved Homes</li></Link>
          <Link to="/signinupform"><li>Sign up / Sign in</li></Link>
        </ul>
      </div>)}
    </div>
  )
}