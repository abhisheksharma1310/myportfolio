import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import contactMe from '../../mydata/contact';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer>
      <a href='#home' className='footer__logo'>Abhishek Sharma</a>

      {/* <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul> */}

      <div className='footer__socials'>
        <a href={contactMe.linkedin}><BsLinkedin/></a>
        <a href={contactMe.github}><FaGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>© Abhishek Sharma {year}</small>
      </div>
    </footer>
  )
}

export default Footer