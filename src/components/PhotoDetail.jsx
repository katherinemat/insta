import React from "react";
import PropTypes from "prop-types";
import Photo from "../models/photo.js";

import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class PhotoDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeletePhotoButtonClick = this.handleDeletePhotoButtonClick.bind(this);
  }

  handleDeletePhotoButtonClick() {
    this.props.deleteSelectedPhoto(this.props.selectedPhoto);
    console.log("delete button clicked");
  }

  render() {
    return (
      <div>
        <p>{this.props.selectedPhoto.title}</p>
        <img src={this.props.selectedPhoto.link} />
        <Button
          bsStyle="info"
          bsSize="small"
          onClick={this.handleDeletePhotoButtonClick}>
          Delete Photo
        </Button>
      </div>
    );
  }
}

PhotoDetail.propTypes = {
  hideModal: PropTypes.func,
  selectedPhoto: PropTypes.instanceOf(Photo)
};

export default PhotoDetail;
