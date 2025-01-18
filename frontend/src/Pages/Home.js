import React from 'react'
import Hero from '../component/Hero/Hero'
import About from '../component/About/About'
import Features from '../component/Features/Features'
import Works from '../component/How_it_works/How_it_works'
import Footer from '../component/Footer/Footer'
const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Features/>
            <Works/>
            <Footer/>
        </div>
    )
}
export default Home;