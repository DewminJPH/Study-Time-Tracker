import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h4>About Study Time Tracker</h4>
        <p>Our mission is to help students around the world stay productive and reach their academic goals. By providing powerful tools to track and analyze study habits, we aim to empower learners to make the most of their time.</p>
      </div>
      <div className='Quicklinks'>
        <h4>Quick Links</h4>
        <ul>
          <li>Dashboard</li>
          <li>Features</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
        </ul>
      </div>    
    </footer>
  )
}
export default Footer;
