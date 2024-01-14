import React from 'react';
import { Row, Col } from 'react-bootstrap';
import screenShot from '../images/Screenshot.png';
import teams from '../images/Teams-leagues.png';

const Solution = () => {
  return (
    <div>
      <div className="container">
        <Col className="text-center">
          <h1>Our Solutions</h1>
        </Col>
        <p>Sportable’s portable ball and player tracking technology delivers a turnkey solution for teams and leagues searching for game-winning skill and tactical insights.</p>
        
        <Row className="mb-3">
          <Col md="6">
            <img
              src={teams}
              alt="Teams and Leagues"
              style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
            />
            <h1><p>Teams and Leagues</p></h1>
            <br />
            <p>The Sportable system's portability gives any team the ability to utilize and measure performance, providing automated and premium data that measures player and team performance both in training and on match days.</p>
          </Col>
          <Col md="6">
            <img
              src={screenShot}
              alt="Screenshot"
              style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
            />
            <h1><p>Media and Broadcast</p></h1>
            <br />
            <p>Data is used to create augmented reality broadcast graphics at near zero latency, along with automated social media assets and gamification tools. Sharing player data and statistics with fans enhance their understanding of the game and creates a more immersive experience.</p>

          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Solution;
