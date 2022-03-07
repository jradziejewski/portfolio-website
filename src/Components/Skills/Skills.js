import React from "react"
import "./Skills.css"
import { projects, skills } from "../Data/data"

export class Skills extends React.Component {
  render() {
    return (
      <div className="skills-container" id="skills">
        <h2>My skills!</h2>
        {skills.map((skill) => (
          <section key={skill.title}>
            <h3>{skill.title}</h3>
            <h3>{skill.subtitle}</h3>
          </section>
        ))}
      </div>
    )
  }
}
