import React from "react";
import Header from "./header/Header";
import Slogan from "./slogan/Slogan";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header color="white" />
      <Slogan />
    </div>
  );
}

export default Home;
