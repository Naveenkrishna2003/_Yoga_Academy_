// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Hello_World from "./components/Hello_World"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Classes from "./pages/Classes";
import Signup1 from "./pages/Signup1";
function App() {
// const [count, setCount] = useState(0)

  return (
      <Router>
      <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="classes" element={<Classes/>}/>
              <Route path="signup" element={<Signup1/>}/>
            </Routes>
      </Router>
  )
}

export default App;
