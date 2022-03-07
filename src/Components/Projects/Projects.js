import React from "react"
import "./Projects.css"
import { projects } from "../Data/data"

export class Projects extends React.Component {
  render() {
    return (
      <div className="projects-container" id="projects">
        <div className="projects-header">
          <h1>Stuff I've created</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="projects-gallery">
          {projects.map((project) => (
            <a href={project.link} key={project.image}>
              {/* <img alt="gallery" src={project.image} /> */}
              <div>
                <h2>{project.subtitle}</h2>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    )
  }
}
