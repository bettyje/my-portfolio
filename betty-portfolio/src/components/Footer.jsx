// src/components/Footer.js
import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa' 
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; 2025 Betty Jelagat | All Rights Reserved</p>
      <p>
        Follow me on:
        <a
          href='https://www.linkedin.com/in/betty-jelagat-996900355'
          target='_blank'
          rel='noopener noreferrer'
          className='social-link'
        >
          <FaLinkedin /> LinkedIn
        </a>{' '}
        |
        <a
          href='https://github.com/bettyje'
          target='_blank'
          rel='noopener noreferrer'
          className='social-link'
        >
          <FaGithub /> GitHub
        </a>{' '}
        {/* <a
          href='https://hashnode.com/@arvlemed'
          target='_blank'
          rel='noopener noreferrer'
          className='social-link'
        >
          <FaBlog /> Blog
        </a> */}
      </p>
      <p>
        Contact me at:{' '}
        <a href='mailto:bettyjelagat156@gmail.com'>bettyjelagat156@gmail.com</a>{' '}
        | Phone: +254797411572
      </p>
    </footer>
  )
}

export default Footer
