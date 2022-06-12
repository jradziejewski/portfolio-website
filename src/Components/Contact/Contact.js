import React from "react";
import "./Contact.css";

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    const message = this.state.message;
    if (name === "" || email === "" || message === "") {
      alert("Please don't leave any field empty.");
      return;
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  render() {
    return (
      <div id="contact">
        <div className="contact-container">
          <form netlify name="contact" onSubmit={this.handleSubmit.bind(this)}>
            <h2>Send me a message</h2>
            <p>
              {" "}
              If you wish to contact me with any matter, feel free to use the
              form below!
            </p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange.bind(this)}
              id="name"
              name="name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange.bind(this)}
              id="email"
              name="email"
            />
            <label htmlFor="message">Message</label>
            <input
              type="message"
              value={this.state.message}
              onChange={this.handleMessageChange.bind(this)}
              id="message"
              name="message"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
