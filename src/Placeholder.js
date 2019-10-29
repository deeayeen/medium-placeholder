import React, { Component } from "react";
import ContentLoader from "react-content-loader";

export default class Placeholder extends Component {
  render() {
    return (
      <ContentLoader
        height={160}
        width={317}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        style={{ marginBottom: "4px" }}
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
    );
  }
}
