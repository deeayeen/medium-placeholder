import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MyCard from "./MyCard";
import ContentLoader from "react-content-loader";

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
            <div class="card shadow-lg p-3">
              <div class="d-flex flex-column">
                <MyCard
                  song={"God's Plan"}
                  artist={"Drake"}
                  image={
                    "https://i.pinimg.com/originals/e3/f2/0f/e3f20f0243a2102b5d8de3c7d44bcc14.jpg"
                  }
                />
                <MyCard
                  song={"One Dance"}
                  artist={"Drake"}
                  image={
                    "https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg"
                  }
                />
                <MyCard
                  song={"Hotline Bling"}
                  artist={"Drake"}
                  image={
                    "https://www.billboard.com/files/styles/article_main_image/public/media/drake-hotline-bling-video-still-2015-billbaord-650.jpg"
                  }
                />
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
                <div style={{ margin: "10px" }}>
                  <ContentLoader
                    height={160}
                    width={317}
                    speed={2}
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb"
                  >
                    <rect
                      x="160"
                      y="-1"
                      rx="10"
                      ry="10"
                      width="160"
                      height="160"
                    />
                    <rect
                      x="19"
                      y="19"
                      rx="10"
                      ry="10"
                      width="120"
                      height="28"
                    />
                    <rect x="46" y="57" rx="8" ry="8" width="66" height="13" />
                    <rect
                      x="79"
                      y="101"
                      rx="5"
                      ry="5"
                      width="25"
                      height="25"
                      transform="rotate(45, 79, 101)"
                    />
                    <rect
                      x="31"
                      y="103"
                      rx="3"
                      ry="3"
                      width="15"
                      height="15"
                      transform="rotate(45, 31, 103)"
                    />
                    <rect
                      x="128"
                      y="103"
                      rx="3"
                      ry="3"
                      width="15"
                      height="15"
                      transform="rotate(45, 128, 103)"
                    />
                  </ContentLoader>
                </div>
                <MyCard
                  song={"One Dance"}
                  artist={"Drake"}
                  image={
                    "https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg"
                  }
                />
                <MyCard
                  song={"Hotline Bling"}
                  artist={"Drake"}
                  image={
                    "https://www.billboard.com/files/styles/article_main_image/public/media/drake-hotline-bling-video-still-2015-billbaord-650.jpg"
                  }
                />
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
