import React from "react"
import "./Skills.css"
import { projects, skills } from "../Data/data"
import ReactCardFlip from "react-card-flip"

export class Skills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }))
  }

  render() {
    return (
      <div className="skills-container" id="skills">
        <h2>My skills!</h2>
        {skills.map((skill) => (
          <ReactCardFlip
            isFlipped={this.state.isFlipped}
            flipdirection="horizontal"
          >
            <div className="front" onClick={this.handleClick}>
              <section key={skill.title}>
                <h3>{skill.title}</h3>
                <h3>{skill.subtitle}</h3>
              </section>
            </div>
            <div onClick={this.handleClick}>{skill.description}</div>
          </ReactCardFlip>
        ))}
      </div>
    )
  }
}
