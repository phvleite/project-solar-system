import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../css/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    const dbPlanet = planets.map((planet) => (
      <PlanetCard
        planetName={ planet.name }
        planetImage={ planet.image }
        key={ planet.name }
      />));

    return (
      <div data-testid="solar-system" className="box-solar-system">
        <div className="box-title-solar-system">
          <Title headline="Planetas" />
        </div>
        <div className="box-planets-system-solar">
          {dbPlanet}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
