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
            Projects I made for fun, as university projects and for learning
            purposes.
          </p>
        </div>
        <div className="projects-gallery">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              data-hover={project.description}
              target="_blank"
            >
              {/* <img alt="gallery" src={project.image} /> */}
              <div className="projects-project">
                <span id="projects-subtitle">{project.subtitle}</span>
                <span id="projects-title">{project.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    )
  }
}
