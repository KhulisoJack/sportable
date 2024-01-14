import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './technology.css';
import hardware from '../images/Hardware.png';
import insights from '../images/Our-insights-v2.png';
import homepage from '../images/Hompage-UI.png';
import generals from '../images/generals-p.png';
import visuals from '../images/AR-Visuals-p.png';
import mobile from '../images/mobile-app-p.png';


const Tech =() =>{
  return (
    <div>
      <div className="container">
        <Col className="text-center"> 
        <h1>Our Technology</h1>

        </Col>

        <Row className="mb-3">
          <Col md="4">
            <img
              src={hardware}
              alt="Teams and Leagues"
              style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
            />
            <h1><p>Proprietary hardware</p></h1>
            <br />
            <p>Our portable and fully wireless hardware can be set up and broadcast-ready anywhere in minutes. We’ve optimised the hardware to deliver with near-zero latency.</p>
          </Col>
          <Col md="4">
            <img
              src={homepage}
              alt="Screenshot"
              style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
            />
            <h1><p>The platform</p></h1>
            <br />
            <p>Our cloud platform uses our patented AI Event DetectorTM to ingest game data and automatically encode and classify it into insights and analytics.</p>

          </Col>
          <Col md="4">
            <img
              src={insights}
              alt="Screenshot"
              style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
            />
            <h1><p>Our insights</p></h1>
            <br />
            <p>Highly scalable outputs delivered by APIs and event streams which are fed to leagues, media and sponsors, betting companies, fantasy sports, teams, players and fan applications.</p>

          </Col>
        </Row>
        <Row >
          <Col className="text-center" >
          <h1>Sportable in action</h1>
          </Col>
          <Row>
          <p>Our data is being used to power new fan engagement stats, broadcast graphics, social media, cutting-edge performance analytics and mobile apps.</p>
          </Row>
        </Row>
        <Row className="mb-3">
          <Col md="4">
            <img
              src={mobile}
              alt="Teams and Leagues"
              style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
            /></Col>
          <Col md="4">
            <img
              src={visuals}
              alt="Screenshot"
              style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
            />
          </Col>
          <Col md="4">
            <img
              src={generals}
              alt="Screenshot"
              style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Tech;
