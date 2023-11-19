import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="/">
             <div className="logo">
             <h2>
              <span>R</span>esource
              <span>M</span>anagement
             </h2>
             </div>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/home">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/service">
                    Services
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn  btn-style btn-style-border" type="submit">
                <NavLink class="nav-link" to="/signup">
                  Sign Up
                  </NavLink>
                </button>
                <button class="btn  btn-style btn-style-border" type="submit">
                <NavLink class="nav-link" to="/login">
                  Login
                  </NavLink>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
