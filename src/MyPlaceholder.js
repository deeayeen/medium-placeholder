import React, { Component } from "react";
import ContentLoader from "react-content-loader";
import MyCard from "./MyCard";

export default class MyPlaceholder extends Component {
  constructor(props) {
    super(props);
    this.state = { finalLoad: false };
  }
  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          this.setState({ done3: true, data3: json });
          setTimeout(() => this.setState({ finalLoad: true }), 1000);
        });
    }, 1200);
  }
  render() {
    return (
      <div style={{ margin: "10px", width: "337px" }}>
        {!this.state.finalLoad ? (
          <ContentLoader
            height={160}
            width={317}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <rect x="160" y="-1" rx="10" ry="10" width="160" height="160" />
            <rect x="19" y="19" rx="10" ry="10" width="120" height="28" />
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
              x="126"
              y="103"
              rx="3"
              ry="3"
              width="15"
              height="15"
              transform="rotate(45, 128, 103)"
            />
          </ContentLoader>
        ) : (
          <MyCard
            song={"Hotline Bling"}
            artist={"Drake"}
            image={
              "https://www.billboard.com/files/styles/article_main_image/public/media/drake-hotline-bling-video-still-2015-billbaord-650.jpg"
            }
          />
        )}
      </div>
    );
  }
}
