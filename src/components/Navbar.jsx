import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="/navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutTextUtils}</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <div className="bg-dark rounded mx-2" style={{ border: "2px solid white", height: "30px", width: "30px", cursor: "pointer" }} onClick={() => { props.toggleMode('dark') }}></div>
                            <div className="bg-light rounded mx-2" style={{ border: "2px solid black", height: "30px", width: "30px", cursor: "pointer" }} onClick={() => { props.toggleMode('light') }}></div>
                            <div className="bg-primary rounded mx-2" style={{ border: "2px solid red", height: "30px", width: "30px", cursor: "pointer" }} onClick={() => { props.toggleMode('primary') }}></div>
                            <div className="bg-danger rounded mx-2" style={{ border: "2px solid light", height: "30px", width: "30px", cursor: "pointer" }} onClick={() => { props.toggleMode('danger') }}></div>
                            <div className="bg-success rounded mx-2" style={{ border: "2px solid yellow", height: "30px", width: "30px", cursor: "pointer" }} onClick={() => { props.toggleMode('success') }}></div>
                            <div className="bg-warning rounded mx-2" style={{ border: "2px solid green", height: "30px", width: "30px", cursor: "pointer" }} onClick={() => { props.toggleMode('warning') }}></div>
                        </div>
                        {/* <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => { props.toggleMode(null) }} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toogle mode</label>
                        </div> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

Navbar.propTypes = { title: PropTypes.string.isRequired, aboutTextUtils: PropTypes.string.isRequired }

// Navbar.defaultProps = { title: "Set Title Here", aboutTextUtils: "About Text Here" }