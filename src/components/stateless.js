import React from 'react';
import PropTypes from "prop-types";

const Stateless = ({name}) => {
  return <div>{name}</div>
}

Stateless.propTypes = {
  name: PropTypes.string
};

export default Stateless;
