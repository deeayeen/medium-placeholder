import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Placeholder from "./Placeholder";
import Card from "./Card";
import FadeIn from "react-fade-in";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { finalLoad: false };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        setTimeout(() => this.setState({ finalLoad: true }), 4000);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <FadeIn>
              <h1 class="mb-5" style={{ color: "white" }}>
                Placeholder Example
                <img
                  src={logo}
                  width={"100px"}
                  className={"App-logo"}
                  alt="logo"
                />
              </h1>
            </FadeIn>
            <div class="card shadow-lg p-3">
              <div style={{ width: "317.75px" }}>
                {!this.state.finalLoad ? (
                  <>
                    <Placeholder />
                    <Placeholder />
                    <Placeholder />
                  </>
                ) : (
                  <FadeIn>
                    <Card
                      song={"God's Plan"}
                      artist={"Drake"}
                      image={
                        "https://i.pinimg.com/originals/e3/f2/0f/e3f20f0243a2102b5d8de3c7d44bcc14.jpg"
                      }
                    />
                    <Card
                      song={"One Dance"}
                      artist={"Drake"}
                      image={
                        "https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg"
                      }
                    />
                    <Card
                      song={"Hotline Bling"}
                      artist={"Drake"}
                      image={
                        "https://www.billboard.com/files/styles/article_main_image/public/media/drake-hotline-bling-video-still-2015-billbaord-650.jpg"
                      }
                    />
                  </FadeIn>
                )}
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
