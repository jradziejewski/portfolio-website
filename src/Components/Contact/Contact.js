import React from "react"
import "./Contact.css"

export class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <div className="map">
          {" "}
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Wrocław&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
        <div className="location-text">
          {" "}
          <h2>LOCATION</h2>
          <p>Wrocław, dolnoslaskie, Poland</p>
          <h2>EMAIL</h2>
          <p>jradziejewski01@gmail.com</p>
        </div>
      </div>
    )
  }
}
