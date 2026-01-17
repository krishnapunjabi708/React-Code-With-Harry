import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
   <div>
     <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme={`${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.about}</a>
        </li>
          
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

      <div className="d-flex align-items-center">
  {/* Theme Buttons */}
  <button className="btn btn-light mx-1" onClick={() => props.changeMode('light')}>Light</button>
  <button className="btn btn-dark mx-1" onClick={() => props.changeMode('dark')}>Dark</button>
  <button className="btn btn-danger mx-1" onClick={() => props.changeMode('red')}>Red</button>
  <button className="btn btn-primary mx-1" onClick={() => props.changeMode('blue')}>Blue</button>

  {/* Existing Toggle */}
  <div className={`form-check form-switch ms-3 text-${props.mode==='light'?'dark':'light'}`}>
    <input
      className="form-check-input"
      onClick={props.toggleMode}
      type="checkbox"
      role="switch"
      id="switchCheckDefault"
    />
    <label className="form-check-label" htmlFor="switchCheckDefault">
      Enable Dark Mode
    </label>
  </div>
</div>

    </div>
  </div>
</nav>
   </div>
  )
}
Navbar.defaultProps = {
    title: 'Set title here',
    about: 'About text here'
};
Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
};
