import React from "react";
import PropTypes from "prop-types";

function Photo(props) {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  );
}

Photo.propTypes = {
  title: PropTypes.string.isRequired
};

export default Photo;
