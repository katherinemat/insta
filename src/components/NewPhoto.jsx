import React from "react";
import Photo from "../models/photo.js";
import PropTypes from "prop-types";

class NewPhoto extends React.Component {

  constructor(props) {
    super(props);
    this.handleNewPhotoFormSubmission = this.handleNewPhotoFormSubmission.bind(this);
  }

  handleNewPhotoFormSubmission(event) {
    event.preventDefault();
    const { _title, _link } = this.refs;
    var newPhoto = {
      title: _title.value,
      link: _link.value
    }
    this.props.onNewPhotoCreation(newPhoto);
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleNewPhotoFormSubmission}>
          <input
            ref="_title"
            type="text"
            placeholder="title" />
          <input
            ref="_link"
            type="text"
            placeholder="link" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

NewPhoto.propTypes = {
  onNewPhotoCreation: PropTypes.func
};

export default NewPhoto;
