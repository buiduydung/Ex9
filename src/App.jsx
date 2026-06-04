import { Component } from "react";
import "./App.css";

import AboutMe from "./components/AboutMe";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import SimpleCard from "./components/SimpleCard";
import SimpleWebsite from "./components/SimpleWebsite";

class App extends Component {
  render() {
    const item = {
      title: "A Title",
      description: "The description goes here.",
      imageUrl: "",
    };

    return (
      <div className="app">
        <h1>Exercise 9: React Component</h1>

        <AboutMe />

        <HelloWorld />

        <Counter />

        <div className="section">
          <h2>4. Create Simple Card</h2>
          <SimpleCard item={item} />
        </div>

        <div className="section">
          <h2>5. Create Simple Website</h2>
          <SimpleWebsite />
        </div>
      </div>
    );
  }
}

export default App;
