import React from 'react'; // React.createElement('div') = <div>
import PropTypes from 'prop-types';

import './style.scss';

// Un composant React est une fonction qui retourne
// un élément React (=== le résultat de React.createElement())

// Header est un composant de présentation : il reçoit les informations
// dont il a besoin via ses props. Il ne prend pas de décision à propos
// de ces informations, il ne fait que les utiliser pour générer un
// rendu graphique dans la page.
const Header = ({
  thumbnail,
  title,
  author,
  difficulty,
}) => (
  <header className="header">
    <img
      src={thumbnail}
      alt={title}
      className="header-image"
    />
    <div className="header-content">
      <h1 className="header-title">{title}</h1>
      <p className="header-infos">
        {author} - {difficulty}
      </p>
    </div>
  </header>
);

Header.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

export default Header;
