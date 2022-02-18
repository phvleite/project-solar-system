import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ planetName } />
      </div>
    );
  }
}

export default PlanetCard;
