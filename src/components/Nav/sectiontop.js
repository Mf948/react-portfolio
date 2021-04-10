import React from 'react'
import { Link, useLocation } from "react-router-dom";



export default function NavTabs() {
  const location = useLocation()
    return (
        <div>
<section class="hero is-medium">
    <div class="hero-head">
      <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
             
             <Link to= "/"
                  className={location.pathname === "/"?"navbar-item is-active" : "nav-link"}
             >
                Home
              </Link>
              
            <Link to="/contact"
                  className={location.pathname === "/contact" ? "navbar-item": "nav-link" }
          >
              contact 
              </Link>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <a href="https://linkedin.com/in/xferreiramatt">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Mf948">
                  <i class="fab fa-github"></i>
                </a>
  
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
  
        <h1 class="ml3">Mateo Ferreira</h1>
        <h4 class="title is-4">Web Developer</h4>
      </div>
    </div>
  </section>
        </div>
    )
}
