import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom"; 

import About from './components/About';


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
    // document.title = "TextUtils - Dark Mode";

  } else {
  
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
    // document.title = "TextUtils - Light Mode";
  }
}
const changeMode = (newMode) => {
  setMode(newMode);

  if (newMode === 'dark') {
    document.body.style.backgroundColor = '#161c22';
    showAlert("Dark mode enabled", "success");
  }
  else if (newMode === 'light') {
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode enabled", "success");
  }
  else if (newMode === 'red') {
    document.body.style.backgroundColor = '#8b0000';
    showAlert("Red mode enabled", "danger");
  }
  else if (newMode === 'blue') {
    document.body.style.backgroundColor = '#0d6efd';
    showAlert("Blue mode enabled", "primary");
  }
};

  return (
    <>
    {/* Exact is use for exact matching of the path , other wise it matches all paths that start with the given path also called partial matching */}
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} changeMode={changeMode} about="About us" />
      <Alert alert={alert} />

      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>} />
        <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Try TextUtils- Word Counter , Character Counter , Removes extra Spaces" />} />
      </Routes>
    </Router>
 


{/* <div className="container"><TextForm mode={mode} showAlert={showAlert} heading="Enter text to analyze below"/></div>
<About /> */}

    </>
  );
}

export default App;
