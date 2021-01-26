import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About.js";
import Album from "./components/album/Album";
import Merchandise from "./components/merchandise/Merchandise";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/album" component={Album} />
          <Route path="/merchandise" component={Merchandise} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
