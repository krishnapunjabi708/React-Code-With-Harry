import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
// import About from './components/About';


function App() {
  let [mode,setMode]=useState('light');//Whether dark mode is enabled or not
let toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#161c22';
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
}

  return (
    <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About us"/>
<div className="container"><TextForm mode={mode} heading="Enter text to analyze below"/></div>
{/* <About /> */}
    </>
  );
}

export default App;
