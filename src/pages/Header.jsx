import React from 'react'
import {Link} from 'react-scroll'

function Header() {
    return (
        <div>
    <header class="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container"><a href="#intro" class="navbar-brand link-scroll"><img src="img/logo3.png" alt="ironshark logo" style={{width: 70, height: 80}} class="img-fluid"/></a>
          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><svg width="20" height="30" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg></button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item"><a href="/" class="nav-link link-scroll">Home</a></li>
              <li class="nav-item"><Link to="services" smooth={true} duration={1000} href="#services" class="nav-link link-scroll">Skills</Link></li>
              <li class="nav-item"><Link to="portfolio" smooth={true} duration={1000} href="#portfolio" class="nav-link link-scroll">Portfolio</Link></li>
              <li class="nav-item"><Link to="contact" smooth={true} duration={1000} href="#contact" class="nav-link link-scroll">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
        </div>
    )
}

export default Header
