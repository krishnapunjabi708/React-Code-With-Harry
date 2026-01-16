import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import About from './components/About';


function App() {
  let [mode,setMode]=useState('light');//Whether dark mode is enabled or not
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  };
  setTimeout(() => {
    setAlert(null);
  }, 3000);
let toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#161c22';
    showAlert("Dark mode has been enabled","success");
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
  }
}

  return (
    <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About us"/>
<Alert alert={alert}/>
<div className="container"><TextForm mode={mode} showAlert={showAlert} heading="Enter text to analyze below"/></div>
{/* <About /> */}
    </>
  );
}

export default App;
