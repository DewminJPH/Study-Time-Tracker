import React, { useState, useEffect } from "react";
import "../Pages/css/Dashboard.css";
import logo from "../component/Assest/Logo.png";

const Dashboard = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([],{hour:"2-digit", minute:"2-digit"}));
  const [date, setDate] = useState(new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric"}));
  const [greeting, setGreeting] = useState("Good Evening");
  const [focusTime, setFocusTime] = useState(1500); 
  const [isActive, setIsActive] = useState(false); 

  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentHour = now.getHours();

      
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good Morning");
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }

      setTime(new Date().toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"}));
      setDate(new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric"}));
    }, 1000);
    
    return () => clearInterval(interval); 
  }, []);

  
  useEffect(() => {
    let interval = null;
    if (isActive && focusTime > 0) {
      interval = setInterval(() => {
        setFocusTime((time) => time - 1);
      }, 1000);
    } else if (focusTime === 0) {
      clearInterval(interval);
      alert("Time's up!");
    }
    return () => clearInterval(interval);
  }, [isActive, focusTime]);

  const startTimer = () => {
    setIsActive(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    document.body.classList.add("dashboard-background");

    return () => {
      document.body.classList.remove("dashboard-background");
    };
  }, []);

  return (
    <div className="dashboard-container">
      
      <div className="sidebar">
        <img src={logo} alt="logo" className="image-1" />
        <ul className="sidebar-list">
          <li className="sidebar-item active">Dashboard</li>
          <li className="sidebar-item">Calendar</li>
          <li className="sidebar-item">Activities</li>
          <li className="sidebar-item">Focus Timer</li>
        </ul>
      </div>

      
      <div className="main-content">
        <div className="top-bar">
          <div className="time-date">
            <div className="time">{time}</div>
            <div className="date">{date}</div>
          </div>
          <div className="user-info">Himansha Dewmin</div>
        </div>

        
        <div className="greeting-bar">
          <p className="greeting-text">{greeting}!</p> 
          <p className="dailytask">You have 0 tasks due today.</p>
        </div>

        <div className="task-layout">
          <div className="task-section">
            <input type="text" placeholder="Quick add task" />
            <button>+</button>
          </div>
          
          <div className="task-container">
            <div className="task-card">
              <h3>Upcoming Assignments</h3>
              <p>No upcoming assignments</p>
            </div>
          </div>
        </div> 
        <div className="task-container">
            <div className="task-card">
              <h3>Upcoming Exams</h3>
              <p>No upcoming exams</p>
            </div>
          </div>

        <div className="focus-timer">
          <h3>Focus Timer</h3>
          <p>{formatTime(focusTime)}</p>
          <button onClick={startTimer} disabled={isActive}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;