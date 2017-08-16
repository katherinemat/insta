import React from "react";
import PropTypes from "prop-types";
import PhotoObject from "../models/photo.js";

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.viewDetails = this.viewDetails.bind(this);
  }

  viewDetails() {
    this.props.openClickedPhoto(this.props.photo);
  }

  render() {
    return (
      <div>
        <p>{this.props.photo.title}</p>
        <img src={this.props.photo.link}
          onClick={this.viewDetails}/>
      </div>
    );
  }

}

Photo.propTypes = {
  photo: PropTypes.instanceOf(PhotoObject).isRequired,
  openClickedPhoto: PropTypes.func
};

export default Photo;
