import React, { useState, useEffect } from "react";
import "../Pages/css/Dashboard.css";
import logo from "../component/Assest/Logo.png";

const Dashboard = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([],{hour:"2-digit", minute:"2-digit"}));
  const [date, setDate] = useState(new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric"}));
  const [greeting, setGreeting] = useState("Good Evening");
  const [tasks,setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [subject,setSubject]= useState("")
  const [taskType,setTaskType]= useState("")
  const [taskDate,setTaskDate]= useState("")
  const [taskTime,setTaskTime] = useState("")
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
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

      
      setTime(now.toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"}));
      setDate(now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric"}));
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

  
  const addTask = () => {
    if (newTask.trim() !== "") {
      const task = {
        name: newTask,
        subject: subject,
        type: taskType,
        date: taskDate,
        time: taskTime,
      }
      setTasks([...tasks, task]); 
      setNewTask(""); 
      setSubject(""); 
      setTaskType("none"); 
      setTaskDate(""); 
      setTaskTime(""); 
    }
  };

  
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
          <p className="dailytask">You have {tasks.length} tasks due today.</p>
        </div>
        
        <div className="two-column-layout">
          <div className="left-column">
            <div className="task-section">
              <div className="task-box">
                <div className ="input-button-container">
                  <input type="text" placeholder="Quick add task" value={newTask}onChange={(e) => setNewTask(e.target.value)} />
                  <button onClick={addTask}>Add</button>
                </div>
                
                <div className="task-options-horizontal">
                  <div className="task-options-container">
                    <div className="task-options">
                      <button onClick={() => setShowSubjectDropdown(!showSubjectDropdown)}>Subject</button>
                      {showSubjectDropdown && (
                        <div className="dropdown">
                          <button onClick={() => setSubject("Maths")}>Maths</button>
                          <button onClick={() => setSubject("Science")}>Science</button>
                          <button onClick={() => setSubject("History")}>History</button>
                        </div>
                      )}
                    </div>

                    <div className="task-options">
                      <button onClick={() => setShowTypeDropdown(!showTypeDropdown)}>Type</button>
                      {showTypeDropdown && (
                        <div className="dropdown">
                          <button onClick={() => setTaskType("assignment")}>Assignment</button>
                          <button onClick={() => setTaskType("exam")}>Exam</button>
                          <button onClick={() => setTaskType("none")}>None</button>
                        </div>
                      )}
                    </div>

                    <div className="task-options">
                      <button onClick={() => setShowDatePicker(!showDatePicker)}>
                        Date
                      </button>
                      {showDatePicker && (
                        <input
                          type="date"
                          value={taskDate}
                          onChange={(e) => setTaskDate(e.target.value)}
                        />
                      )}
                    </div>

                    <div className="task-options">
                      <button onClick={() => setShowTimePicker(!showTimePicker)}>
                        Time
                      </button>
                      {showTimePicker && (
                        <input
                          type="time"
                          value={taskTime}
                          onChange={(e) => setTaskTime(e.target.value)}
                          />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="upcoming-tasks-heading"> Upcoming tasks</h3>
              <div className="task-list">
                {tasks.map((task, index) => (
                  <div key={index} className="task-item">
                    <p><strong>Task:</strong> {task.name}</p>
                    <p><strong>Subject:</strong> {task.subject}</p>
                    <p><strong>Type:</strong> {task.type}</p>
                    <p><strong>Date:</strong> {task.date}</p>
                    <p><strong>Time:</strong> {task.time}</p>
                  </div>
                ))}
              </div>
              
            </div>
          </div>

          <div className="right-column">
            <div className="task-container">
                <h3>Upcoming Assignments</h3>
                <p>No upcoming assignments</p>
            </div>

            <div className="task-container">
                <h3>Upcoming Exams</h3>
                <p>No upcoming exams</p>
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
      </div>
    </div>
  );
};

export default Dashboard;