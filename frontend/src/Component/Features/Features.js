import React, { useRef, useState, useEffect } from 'react';
import './Features.css';

const Features = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [animateTitle, setAnimateTitle] = useState(false);

  const topics = [
    { title: '1. Track Study Hours', content: 'Keep a detailed record of your study sessions with Study Time Tracker. Log the date, subject, and duration of each session to build a clear picture of your study habits. This feature helps you stay accountable and provides insights into how much time you’re dedicating to each subject.' },
    { title: '2. Set and Monitor Goals', content: 'Achieve your academic objectives by setting weekly or monthly study goals. Study Time Tracker lets you define your targets and track your progress through simple visuals. Celebrate your milestones and stay motivated as you work toward consistent productivity.' },
    { title: '3. Visualize Progress with Charts', content: 'Understand your study patterns at a glance with intuitive charts. Study Time Tracker provides visual analytics, such as bar or pie charts, to show your total study hours, time spent per subject, and progress toward goals. This feature makes it easier to identify areas where you need to improve.' },
    { title: '4. Manage Study Sessions', content: 'Edit, update, or delete your logged study sessions effortlessly. Study Time Tracker ensures flexibility and accuracy, helping you organize your study records without any hassle. With just a few clicks, you can keep your study log up-to-date.' },
    { title: '5. Stay Focused and Save Time', content: 'Avoid distractions and streamline your study routine with Study Time Tracker. By keeping everything organized in one place, you save time and can focus on what matters most—your studies. Let the app handle the details while you concentrate on reaching your goals.' }
  ];

  const checkScrollPosition = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    container.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition(); 

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setAnimateTitle(true);
      } else {
        setAnimateTitle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
      container.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <div className='features'>
      <h1 className={animateTitle ? 'animate-title' : ''}>Features</h1>
      <div className='scroll-wrapper'>
        {showLeftArrow && <button className='scroll-arrow left' onClick={scrollLeft}>&lt;</button>}
        <div className='scroll-container' ref={scrollContainerRef}>
          {topics.map((topic, index) => (
            <div key={index} className='square'>
              <h2>{topic.title}</h2>
              <hr/>
              <p>{topic.content}</p>
            </div>
          ))}
        </div>
        {showRightArrow && <button className='scroll-arrow right' onClick={scrollRight}>&gt;</button>}
      </div>
    </div>
  );
}

export default Features;