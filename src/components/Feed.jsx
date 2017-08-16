import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";

function Feed(props) {
  return (
    <div>
      <p>feed component</p>
      {props.photoList.map((photo, index) =>
        <Photo title={photo.title}
          link={photo.link}
          key={index} />
      )}
    </div>
  );
}

Feed.propTypes = {
  photoList: PropTypes.array
};

export default Feed;
