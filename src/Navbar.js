import React from "react";
import logo from "./temp/logo.png";
import './navbar.css'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand ms-5 mt-2" to="/">
            <img src={logo} width="150px" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <div className="d-lg-flex w-100 justify-content-lg-end justify-content-center">
            <ul className="navbar-nav ms-auto mt-2 me-5 mb-lg-0">
              <li className="nav-item me-5 fs-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  id="home"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-5 fs-5">
                <Link className="nav-link active" id="about" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item me-5 fs-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  target="_blank"
                  id="project"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item text-light me-5 mt-1 fs-5">
              <div className="dropdown">
                  <button className="btn dropdown-toggle text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    API {'  '}  
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/temperature">
                        City Weather
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/news">
                        Latest News
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/jobs">
                        Jobs
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// <Link className="nav-link active" id="education" to="#">
//                   API
//                 </Link>
