import React, { Component } from "react";
import MyCard from "./Card";
import ReactLoading from "react-loading";

export default class MyLoader extends Component {
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
      <>
        {!this.state.finalLoad ? (
          <ReactLoading type={"bars"} color={"#282c34"} width={200} />
        ) : (
          <>
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
          </>
        )}
      </>
    );
  }
}
