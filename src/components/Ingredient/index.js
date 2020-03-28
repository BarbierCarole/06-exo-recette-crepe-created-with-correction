import React from 'react';
import './style.scss';

import PropTypes from 'prop-types';

const Ingredient = ({quantity, unit,name}) => (
  <li className="ingredient-li"><span className="ingredient-span">{quantity} {unit}</span> {name}</li>
);

Ingredient.propTypes = {
  quantity: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Ingredient;
