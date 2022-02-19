import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const dbPlanet = planets.map((planet) => (
      <PlanetCard
        planetName={ planet.name }
        planetImage={ planet.image }
        key={ planet.name }
      />));

    return (
      <div data-testid="solar-system" className="title">
        <Title headline="Planetas" />
        {dbPlanet}
      </div>
    );
  }
}

export default SolarSystem;
