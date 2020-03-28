import React from 'react';
import './style.scss';

import PropTypes from 'prop-types';

const Instructions = ({instructions}) => ( 
  <ul className="instructions">
    {instructions.map((step) => (
      <li key={step} className="instructions-li">
        {step}
      </li>
    ))}

  </ul>
);

Instructions.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Instructions;
