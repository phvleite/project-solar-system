import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../css/Missions.css';

class Missions extends Component {
  render() {
    const dbMissions = missions.map((mission) => (
      <MissionCard
        name={ mission.name }
        year={ mission.year }
        country={ mission.country }
        destination={ mission.destination }
        key={ mission.name }
      />));

    return (
      <div data-testid="missions" className="box-missions">
        <div className="box-title-missions">
          <Title headline="Missões" />
        </div>
        <div className="box-cards-missions">
          {dbMissions}
        </div>
      </div>);
  }
}

export default Missions;
