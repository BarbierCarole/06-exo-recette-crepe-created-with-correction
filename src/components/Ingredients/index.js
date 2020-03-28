import React from 'react'; // React.createElement('div') = <div>
import PropTypes from 'prop-types';

import Ingredient from 'src/components/Ingredient';

class Ingredients extends React.Component {
  state = {
    display: true,
  };

  handleDisplayChange = (evt) => {
    this.setState({display: ! (this.state.display)});
  }

  render() {
    const ingredientsJSX = this.props.ingredients.map(
      (ingredient) => { return <Ingredient key={ingredient.id} {...ingredient} />; }
    );

    const checkbox = (
      <input 
      type="checkbox"
      onChange={this.handleDisplayChange}
      />
    );
    const ul = this.state.display ? <ul>{ingredientsJSX}</ul> : null;
    return [checkbox, ul];
  }
}



Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired
};

export default Ingredients;
