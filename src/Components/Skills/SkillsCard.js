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
        <section>
          <h3>{skill.title}</h3>
          <h3>{skill.subtitle}</h3>
        </section>
      </div>
      <div className="card-back" onClick={() => setIsFlipped((prev) => !prev)}>
        {skill.description}
      </div>
    </ReactCardFlip>
  )
}
