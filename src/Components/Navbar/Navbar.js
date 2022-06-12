import React from "react"
import "./Navbar.css"

export class Navbar extends React.Component {
  scroll(e, id) {
    this.props.clickScroll(e, id)
  }

  render() {
    return (
      <div className="navbar-container">
        <img className="navbar-logo" src="./JR.svg" alt="logo" />
        <span>
          <a
            className="about-me"
            href="/"
            onClick={(e) => {
              this.scroll(e, "about")
            }}
          >
            Jakub Radziejewski
          </a>
        </span>
        <nav>
          <a
            href="/"
            onClick={(e) => {
              this.scroll(e, "projects")
            }}
          >
            Projects
          </a>
          <a
            href="/"
            onClick={(e) => {
              this.scroll(e, "skills")
            }}
          >
            Skills
          </a>
        </nav>
        <a
          class="contact"
          className="contact"
          href="/"
          onClick={(e) => {
            this.scroll(e, "contact")
          }}
        >
          Contact me
        </a>
      </div>
    )
  }
}
