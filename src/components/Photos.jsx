import React from "react";
import Photo from "../models/photo.js";

import Feed from "./Feed";
import NewPhoto from "./NewPhoto";

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPhotoList: [new Photo("test title", "https://www.what-dog.net/Images/faces2/scroll0015.jpg"), new Photo("test title", "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg"), new Photo("test title", "http://weknowyourdreams.com/images/dog/dog-06.jpg")],
    };
    this.addNewPhoto = this.addNewPhoto.bind(this);
  }

  addNewPhoto(newPhoto) {
    let newMasterPhotoList = this.state.masterPhotoList.slice();
    newMasterPhotoList.push(newPhoto);
    this.setState({masterPhotoList: newMasterPhotoList});
  }

  render() {
    return (
      <div>
        <NewPhoto onNewPhotoCreation = {this.addNewPhoto}/>
        <Feed photoList = {this.state.masterPhotoList} />
      </div>
    );
  }
}

export default Photos;
