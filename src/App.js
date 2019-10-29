import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MyPlaceholder from "./MyPlaceholder";
import MyLoader from "./MyLoader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="d-flex align-items-center">
          <div
            style={{ marginRight: "300px" }}
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <h1 class="mb-5" style={{ color: "white" }}>
              React App
              <img
                src={logo}
                width={"100px"}
                className={"App-logo"}
                alt="logo"
              />
            </h1>
            <div
              class="card shadow-lg p-3"
              style={{ width: "351.75px", minHeight: "529px" }}
            >
              <div class="d-flex flex-column justify-content-center align-items-center">
                <MyLoader />
              </div>
            </div>
            <h1 class="mt-5" style={{ color: "white" }}>
              Before
            </h1>
          </div>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <h1 class="mb-5" style={{ color: "white" }}>
              React App
              <img
                src={logo}
                width={"100px"}
                className={"App-logo"}
                alt="logo"
              />
            </h1>
            <div class="card shadow-lg p-3">
              <div class="d-flex flex-column">
                <MyPlaceholder />
              </div>
            </div>
            <h1 class="mt-5" style={{ color: "white" }}>
              After
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
