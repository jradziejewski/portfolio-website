import React from "react"
import "./Contact.css"

export class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <div className="contact-container">
          <form netlify name="contact">
            <h2>Hire me</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              suscipit officia aspernatur veritatis. Asperiores, aliquid?
            </p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message</label>
            <input type="message" id="message" name="message" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
