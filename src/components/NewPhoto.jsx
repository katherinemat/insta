import React from "react";
import Photo from "../models/photo.js";
import PropTypes from "prop-types";

function NewPhoto() {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="title" />
        <input
          type="text"
          placeholder="link" />
        <button>Submit</button>
      </form>
    </div>
  );
}

// NewPhoto.propTypes = {
//   photoList: PropTypes.array
// };
//
export default NewPhoto;
