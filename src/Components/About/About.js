import React from "react"
import "./About.css"

export class About extends React.Component {
  scroll(e, id) {
    this.props.clickScroll(e, id)
  }

  render() {
    return (
      <section id="about">
        <div className="about-container">
          <div className="header">
            <h1>
              Hi, I'm Jakub.
              <br />
            </h1>
            <div className="photo-and-description">
              <img src={require("./me.png")} alt="me" />
              <p>
                I'm a second-year student of Mechatronics at Wroclaw University
                of Science and Technology, passionate about Front-End web
                development.
              </p>
            </div>
          </div>
          <div className="about-buttons">
            <a
              className="work-with-me-button"
              href="/"
              onClick={(e) => {
                this.scroll(e, "contact")
              }}
            >
              Work with me
            </a>
            <a
              className="past-projects-button"
              href="/"
              onClick={(e) => {
                this.scroll(e, "projects")
              }}
            >
              See my past work
            </a>
          </div>
        </div>
      </section>
    )
  }
}
