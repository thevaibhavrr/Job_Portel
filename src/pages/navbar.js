import React from "react";
import { NavLink } from "react-router-dom";

function navbar() {
  return (
    <div className="container-xxl bg-white p-0">
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <NavLink
          to="index.html"
          className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
        >
          <h1 className="m-0 text-primary">JobEntry</h1>
        </NavLink>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink to="index.html" className="nav-item nav-link active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link">
              About
            </NavLink>
            <div className="nav-item dropdown">
              <NavLink
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Jobs
              </NavLink>
              <div className="dropdown-menu rounded-0 m-0">
                <NavLink to="/joblist" className="dropdown-item">
                  Job List
                </NavLink>
                <NavLink to="job-detail.html" className="dropdown-item">
                  Job Detail
                </NavLink>
              </div>
            </div>
            <div className="nav-item dropdown">
              <NavLink
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </NavLink>
              <div className="dropdown-menu rounded-0 m-0">
                <NavLink to="/category" className="dropdown-item">
                  Job Category
                </NavLink>
                <NavLink to="/Feedback" className="dropdown-item">
                  Testimonial
                </NavLink>
                <NavLink to="404.html" className="dropdown-item">
                  404
                </NavLink>
              </div>
            </div>
            <NavLink to="contact.html" className="nav-item nav-link">
              Contact
            </NavLink>
          </div>
          <NavLink
            to=""
            className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
          >
            Post A Job<i className="fa fa-arrow-right ms-3"></i>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
