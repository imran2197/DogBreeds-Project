import React from 'react';
import "../styles/Footer.css";
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
      <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
        Subscribe Dog Breeds to receive our best offers
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
        
      </section>
      
      <section className='policy'>
        <div className='policy-wrap'>
            <Link to='/About-Us' className='social-logo'>
            Privacy Policy | Terms and Conditions | About Travel Point
            </Link>
          <small className='website-rights'>© 2020 DogBreeds. All Rights Reserved.</small>        
        </div>
      </section>
    </div>
  );
}

export default Footer;
