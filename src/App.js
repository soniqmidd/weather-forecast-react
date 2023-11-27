import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Houston" />
        <footer>
          This project was created by{" "}
          <a
            href="https://gilded-starburst-7bef05.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Sonique Middleton
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/soniqmidd/weather-forecast-react"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>
          and
          <a
            href="https://app.netlify.com/sites/merry-puppy-f28442/overview"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
