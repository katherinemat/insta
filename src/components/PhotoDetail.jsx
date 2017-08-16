import React from "react";
import PropTypes from "prop-types";
import Photo from "../models/photo.js";

import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

function PhotoDetail(props) {
  return (
    <div>
      <p>{props.selectedPhoto.title}</p>
      <img src={props.selectedPhoto.link} />
      <Button
        bsStyle="info"
        bsSize="small" >
        Photo Detail
      </Button>
    </div>
  );
}

PhotoDetail.propTypes = {
  hideModal: PropTypes.func,
  selectedPhoto: PropTypes.instanceOf(Photo)
};

export default PhotoDetail;
