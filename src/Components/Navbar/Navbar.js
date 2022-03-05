import React from "react"
import "./Navbar.css"

export class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <span>
          <a className="about-me" href="#about">
            Jakub Radziejewski
          </a>
        </span>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </nav>
        <a class="contact" className="contact" href="#contact">
          Contact me
        </a>
      </div>
    )
  }
}
