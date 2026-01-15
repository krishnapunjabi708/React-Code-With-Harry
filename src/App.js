import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
<Navbar title="TextUtils" about="About us"/>
<div className="container"><TextForm heading="Enter text to analyze below"/></div>

    </>
  );
}

export default App;
