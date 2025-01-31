import React from 'react'
import './Hero.css'
import logo from '../Assest/Logo.png';
import home from '../Assest/home page image.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const handleHero = (e) => {
        e.preventDefault();
        navigate('/login');
      };


    return (
        <div className='hero' >
            <div className='hero-left'>
                <img src={logo} alt='logo' className='imagel' />
                <h2>Master Your Study Time,</h2>
                <h2>One Session at a Time</h2>
                <h4>Track, analyze and improve your study</h4>
                <h4>habbits with ease.</h4>
                <div className="circle"></div>
            </div>
            <div className='hero-right'>
                <img src={home} alt='home' className='image-2' />  
            </div>
            <button type="button" className='hero-button' onClick={handleHero}>
                Get Started Now
            </button>
        </div>
    )
}
export default Hero;