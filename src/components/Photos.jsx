import React from "react";
import Photo from "../models/photo.js";

import Feed from "./Feed";
import NewPhoto from "./NewPhoto";
import PhotoDetail from "./PhotoDetail";

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoDetailModal: true,
      selectedPhoto: new Photo("test title", "http://weknowyourdreams.com/images/dog/dog-06.jpg"),
      masterPhotoList: [new Photo("test title", "https://www.what-dog.net/Images/faces2/scroll0015.jpg"), new Photo("test title", "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg"), new Photo("test title", "http://weknowyourdreams.com/images/dog/dog-06.jpg")],
    };

    //binding functions to each instance of Photos component
    this.addNewPhoto = this.addNewPhoto.bind(this);
    this.showPhotoDetailModal = this.showPhotoDetailModal.bind(this);
    this.hidePhotoDetailModal = this.hidePhotoDetailModal.bind(this);
    this.setSelectedPhoto = this.setSelectedPhoto.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
  }

  setSelectedPhoto(clickedPhoto) {
    this.setState({selectedPhoto: clickedPhoto});
    this.showPhotoDetailModal();
  }

  showPhotoDetailModal(){
    this.setState({
      photoDetailModal: true
    });
  }

  hidePhotoDetailModal(){
    this.setState({
      photoDetailModal: false
    });
  }

  addNewPhoto(newPhoto) {
    let newMasterPhotoList = this.state.masterPhotoList;
    newMasterPhotoList.push(newPhoto);
    this.setState({masterPhotoList: newMasterPhotoList});
  }

  deletePhoto(photoToDelete) {
    let newMasterPhotoList = this.state.masterPhotoList.filter(function(photo) {
      return photo.link !== photoToDelete.link;
    });
    this.setState({masterPhotoList: newMasterPhotoList});
    this.hidePhotoDetailModal();
  }

  render() {
    return (
      <div>
        <Modal
          show={this.state.photoDetailModal}
          onHide={this.hidePhotoDetailModal}
          bsSize="large">
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <PhotoDetail
               hideModal = {this.hidePhotoDetailModal}
               selectedPhoto = {this.state.selectedPhoto}
               deleteSelectedPhoto = {this.deletePhoto}/>
          </Modal.Body>
        </Modal>

        <NewPhoto onNewPhotoCreation = {this.addNewPhoto}/>

        <Feed
          photoList = {this.state.masterPhotoList}
          openClickedPhoto = {this.setSelectedPhoto}/>
      </div>
    );
  }
}

export default Photos;
