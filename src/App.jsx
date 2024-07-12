import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarZamon from './Sections/Navbar/Navbar';
import MainSection from './Sections/MainSection/MainSection';
import Suggestions from './Sections/Suggestions/Suggestions';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Navbar */}
      <NavbarZamon/>
      {/* main section */}
      <MainSection/>
      {/* Suggestions section */}
      <Suggestions/>
    </>
  )
}

export default App
