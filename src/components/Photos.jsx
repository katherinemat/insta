import React from "react";
import Photo from "../models/photo.js";

import Feed from "./Feed";
import NewPhoto from "./NewPhoto";

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPhotoList: [new Photo("test title", "https://www.what-dog.net/Images/faces2/scroll0015.jpg")],
    };
  }

  render() {
    return (
      <div>
        <NewPhoto />
        <Feed photoList = {this.state.masterPhotoList} />
      </div>
    );
  }
}

export default Photos;
