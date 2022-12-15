import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import contactMe from '../../data/contact';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href={contactMe.linkedin} target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href={contactMe.github} target='_blank' rel='noreferrer'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials