import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class PhotoDetail extends React.Component {
  render() {
    return (
      <div>
        <Button
          bsStyle="info"
          bsSize="small" >
          Photo Detail
        </Button>
      </div>
    );
  }
}

export default PhotoDetail;
