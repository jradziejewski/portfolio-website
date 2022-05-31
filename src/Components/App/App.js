import React from "react"
import "./App.css"
import { About } from "../About/About"
import { Contact } from "../Contact/Contact"
import { Navbar } from "../Navbar/Navbar"
import { Projects } from "../Projects/Projects"
import { Skills } from "../Skills/Skills"

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.scrollTo = this.scrollTo.bind(this)
  }

  scrollTo(e, id) {
    let item = document.getElementById(id)
    e.preventDefault()
    item && item.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  render() {
    return (
      <main>
        <Navbar clickScroll={this.scrollTo} />
        <About clickScroll={this.scrollTo} />
        <Projects />
        <Skills />
        {/* <Contact /> */}
      </main>
    )
  }
}
