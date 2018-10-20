import React from "react";

import "./Backdrop.css";

const backdrop = props => {
  const classes = ["Backdrop", props.show ? "BackdropOpen" : "BackdropClosed"];

  return <div className={classes.join(" ")} />;
};

export default backdrop;
