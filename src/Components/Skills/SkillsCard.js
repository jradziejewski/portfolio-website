import React from "react"
import ReactCardFlip from "react-card-flip"

export const Card = ({ skill }) => {
  const [isFlipped, setIsFlipped] = React.useState(false)

  return (
    <ReactCardFlip
      key={skill.title}
      isFlipped={isFlipped}
      flipdirection="horizontal"
    >
      <div className="front" onMouseEnter={() => setIsFlipped((prev) => !prev)}>
        <section>
          <h3>{skill.title}</h3>
          <h3>{skill.subtitle}</h3>
        </section>
      </div>
      <div onMouseLeave={() => setIsFlipped((prev) => !prev)}>
        {skill.description}
      </div>
    </ReactCardFlip>
  )
}
