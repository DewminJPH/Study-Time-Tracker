import './App.css'; 
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Features from './Pages/Features';
import Howitworks from './Pages/Howitworks';
import DashBoard from './Pages/Dashboard';
import { Navbar } from './component/Navbar/Navbar';

// Component to conditionally render the Navbar
function Layout() {
  const location = useLocation();

  // Hide Navbar on the "/dashboard" path
  const hideNavbarPaths = ["/dashboard"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
