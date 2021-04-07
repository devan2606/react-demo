import React from "react";
import "./Header.css";
import Logo from "../../assets/image/askaway-logo.png";
import { Link,useHistory } from "react-router-dom";

export default function InterviewHeader() {
  return (
    <div className='margin'>
      <header class='fixed-top header-fixed header-size '>
        <div class='con'>
          <div class='row'>
            <div class='col'>
              <nav class='navbar navbar-expand-lg navbar-light'>
                <div class='logo'>
                  <a className='H-link' href='/'>
                    <img
                      src={Logo}
                      className='H-link'
                      alt='Askaway'
                      style={{ width: 300, height: 99, marginLeft: 150 }}
                    />

                    {/* style="height: 45px;" */}
                  </a>
                </div>
                <button
                  class='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span class='navbar-toggler-icon'></span>
                </button>
                <div
                  class='collapse navbar-collapse'
                  id='navbarSupportedContent'
                >
                  <ul class='navbar-nav ' style={{ width: 173 }}>
                    <li class='nav-item' id='interview-dashboard'>
                    
                    </li>
                  </ul>
                  <ul class='navbar-nav ' style={{ width: 173 }}>
                    <li class='nav-item' id='interview-dashboard'>
                    
                    </li>
                  </ul>
                  <ul class=' navbar-nav my-2 my-lg-1'>
                    <li class='nav-item' id='company-profile'>
                      <a
                        class='nav-link'
                        href='/company-profile'
                        id='profileName'
                      ></a>
                    </li>
                    <li class='nav-item' id='manager-view'>
                    
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
