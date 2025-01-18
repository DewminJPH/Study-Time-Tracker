import React from 'react'
import './How_it_works.css'
import HowItWorksImage from '../Assest/How_it_works.png'

const How_it_works = () => {
  return (
    <div className='how-it-works'>
      <div className='how-it-works-content'>
        <h2>How it works</h2>
        <p>Getting started with Study Time Tracker is simple and hassle-free. First, sign up to create your account in just a few seconds. Once you're in, log your study sessions by adding details like subject, duration, and date. Then, let the app do the rest! Track your progress with detailed stats and beautiful visualizations that show your performance over time. With just a few clicks, you’ll have a clear view of your study habits and the motivation to keep improving.</p>
      </div>
      <div className='how-it-works-image-container'>
        <img src={HowItWorksImage} alt="How it works" className='how-it-works-image' />
      </div>
    </div>
  )
}
export default How_it_works;