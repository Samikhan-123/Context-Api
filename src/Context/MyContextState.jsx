/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import MyContext from "./MyContext";

const MyContextState = (props) => {
  const state = {
    name: "Sami Khan",
    group: "Computer Science"
  };

  // const [state, setState] = useState(s1);

  // const myUpdate = () => {
  //   setTimeout(() => {
  //     setState({
  //       name: 'Faisal Khan',
  //       group: 'Information Technology'
  //     });
  //   }, 1000);
  // };

  return (
    <MyContext.Provider value={{ state }}>
      {props.children}
    </MyContext.Provider>
  );
};

// Add PropTypes validation
MyContextState.propTypes = {
  children: PropTypes.node.isRequired // Ensure 'children' prop is provided
};

export default MyContextState;
