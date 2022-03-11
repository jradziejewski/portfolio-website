import React from "react"
import "./Skills.css"
import ReactCardFlip from "react-card-flip"

export const Card = ({ skill }) => {
  const [isFlipped, setIsFlipped] = React.useState(false)
  return (
    <ReactCardFlip
      key={skill.title}
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      <div className="card-front" onClick={() => setIsFlipped((prev) => !prev)}>
        <img src={skill.logo} alt={`${skill.title} logo`} />
      </div>
      <div className="card-back" onClick={() => setIsFlipped((prev) => !prev)}>
        <h3>{skill.title}</h3>
        <p>{skill.subtitle}</p>
      </div>
    </ReactCardFlip>
  )
}
