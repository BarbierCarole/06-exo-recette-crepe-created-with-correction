// == Import npm
import React from 'react';

// == Import
import data from 'src/data/recipe';
import Header from 'src/components/Header';
import Ingredients from 'src/components/Ingredients';
import Instructions from 'src/components/Instructions';
import './style.css';

// == Composant
const App = () => {
  const {
    thumbnail,
    title,
    author,
    difficulty,
    ingredients,
    instructions,
  } = data;

  return (
    <div className="app">
      <Header
        thumbnail={thumbnail}
        title={title}
        author={author}
        difficulty={difficulty}
      />
      <Ingredients ingredients={ingredients} />
      <Instructions instructions={instructions} />
    </div>
  );
};

// == Export
export default App;
