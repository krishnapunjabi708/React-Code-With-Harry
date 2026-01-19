import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
   <div>
     <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme={`${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <button className="btn btn-light mx-1" onClick={() => props.changeMode('light')}>Light</button>
            <button className="btn btn-dark mx-1" onClick={() => props.changeMode('dark')} >Dark</button>
            <button className="btn btn-danger mx-1" onClick={() => props.changeMode('red')}>Red</button>
            <button className="btn btn-primary mx-1" onClick={() => props.changeMode('blue')}>Blue</button>

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
