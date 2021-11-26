import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import PropTypes from "prop-types";
import constants from "./constants";

/**
 * Adds a React component to show a back header with back button action.
 *
 * @param props - title (title to be displayed), navigateBack (function for back button click)
 */
const BackHeader = (props) => {
  return (
    <div className="subscriber-details-top-wrapper">
      <button
        type="button"
        id="back"
        className="goback"
        aria-label="back-button"
        onClick={props.navigateBack}
      >
        <span className="hidden">{constants.gobackMessage}</span>
        {constants.goback}
      </button>
      <h1
        role="heading"
        aria-label="main-heading"
        aria-level="1"
        className="subscriber-heading"
      >
        {props.title}
        {constants.detailHeader}
      </h1>
    </div>
  );
};

BackHeader.protoTypes = {
  navigateBack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default BackHeader;

ReactDOM.render(
  <React.StrictMode>
    <BackHeader />
  </React.StrictMode>,
  document.getElementById("root")
);
