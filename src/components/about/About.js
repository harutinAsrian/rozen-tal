import React from "react";
import Header from "../home/header/Header";
import "./About.css";

function About() {
  return (
    <div className="about">
      <Header color="dark" />
      <h2>Who are we ?</h2>
      <div className="abour-text">
        <p>
          We are the rescued from the rain
          <br />
          We are to curse, not to love
          <br />
          We are the lonely hearts remains
          <br />
          We were the angels from above
          <br />
        </p>
        <p>
          We were the joy of every moon
          <br />
          We were always asked to stay
          <br />
          We would lie to come back soon
          <br />
          We would slowly fade away
          <br />
        </p>
      </div>
    </div>
  );
}

export default About;
