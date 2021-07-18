import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => <p>{message}</p>;

Notification.defayltProps = {
  message: "Oops, something went wrong here :(",
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
