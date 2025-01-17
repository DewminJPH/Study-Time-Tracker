import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Features from './Pages/Features'
import Howitworks from './Pages/Howitworks';
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/howitworks" element={<Howitworks/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;