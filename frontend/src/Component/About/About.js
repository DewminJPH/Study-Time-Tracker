import React from 'react'
import './About.css'
import aboutimg from '../Assest/About image.png';
const About = () => {
  return (
    <div className='about-container'>
      <img src={aboutimg} alt='about' className='about-image' />
      <div className='about-text'>  
        <h1>About</h1>
        <p>Are you struggling to stay consistent with your study schedule?
           Study Time Tracker is here to help. With an intuitive interface, you can easily monitor your daily, weekly, 
           and monthly study sessions. Gain meaningful insights through visual analytics and learn how to allocate your time more effectively.
            By setting clear goals and tracking your progress in real-time, you'll stay motivated and focused on what matters most. 
            Let Study Time Tracker be your guide to boosting productivity and achieving academic success.
        </p>
      </div>
    </div>
  )
}
export default About;
