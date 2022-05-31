import React from "react"
import "./Skills.css"
import { projects, skills } from "../Data/data"
import ReactCardFlip from "react-card-flip"
import { Card } from "./SkillsCard"

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
      <>
        <div id="skills">
          <div className="skills-cards">
            {" "}
            {skills.map((item, index) => (
              <Card skill={item} key={`card-${index}`} />
            ))}
          </div>
        </div>
      </>
    )
  }
}
