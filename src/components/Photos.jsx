import React from "react";
import Feed from "./Feed";
import Photo from "../models/photo.js";

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
        <Feed photoList = {this.state.masterPhotoList} />
      </div>
    );
  }
}

export default Photos;
