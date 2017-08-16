import React from "react";
import Photo from "./Photo";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: [],
    };
  }

  render() {
    return (
      <div>
        <Photo title="test title" />
      </div>
    );
  }
}

export default Feed;
