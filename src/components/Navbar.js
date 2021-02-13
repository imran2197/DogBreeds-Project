import logo from '../logo.png';
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>    
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} className="App-logo" alt="logo" />
            Dog Breeds
        </Link>
        
        <div className='navbar-container'>  
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
          
            <li className='nav-item'>
              <Link to='/Breeds' className='nav-links' onClick={closeMobileMenu} >
                Breeds
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/About-us' className='nav-links' onClick={closeMobileMenu} >
                About Us
              </Link>
            </li>
          
            <li>
              <Link to='/SignUp' className='nav-links-mobile' onClick={closeMobileMenu} >
                Sign Up
              </Link>
            </li>

            <li>
              <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu} >
                Login
              </Link>
            </li>
          </ul>
        </div>
          <div className="auth">
            {button && <Button buttonStyle='btn--outline'>SignUp</Button>}
            {button && <Button buttonStyle='btn--outline'>Login</Button>}
          </div>
      </nav>
    </>
  );
}

export default Navbar;
