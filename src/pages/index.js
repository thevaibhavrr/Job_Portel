import React from "react";
import { NavLink } from "react-router-dom";
import Categry from "./categry";
import Serchbar from "./serchbar";
import Feature from "./feature";
import JobList from "./joblist";
import Feedback from "./feedback";
import Footer from "./footer";

function index() {
  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-fluid p-0">
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src="asstes/img/carousel-1.jpg" alt="" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: "rgba(43, 57, 64, .5)" }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-3 text-white animated slideInDown mb-4">
                    Find The Perfect Job That You Deserved
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                    diam no. Kasd rebum ipsum et diam justo clita et kasd rebum
                    sea elitr.
                  </p>
                  <NavLink
                    to=""
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Search A Job
                  </NavLink>
                  <NavLink
                    to=""
                    className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                  >
                    Find A Talent
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Serchbar />
      <Categry />
      <Feature />
      <JobList />
      <Feedback />
      <Footer />
    </div>
  );
}

export default index;
