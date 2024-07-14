import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarZamon from './Sections/Navbar/Navbar';
import MainSection from './Sections/MainSection/MainSection';
import Suggestions from './Sections/Suggestions/Suggestions';
import VisaHelpSection from './Sections/VIsaHelpS/VIsaHelpS';
import BiletSection from './Sections/BiletSection/BiletSection';
import Cityes from './Sections/Cityes/Cityes';
import Carousel from './Sections/WebGuild/WebGuild';
import Best from './Sections/Best/Best';


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
      {/* Visa Help Section */}
      <VisaHelpSection/>
      {/* bilet section */}
      <BiletSection/>
      {/* cityes section */}
      <Cityes/>
      {/* slide with web guild */}
       <Best/>
    </>
  )
}

export default App
