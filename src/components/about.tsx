import React from 'react';
import homepageUIIpad from '../images/homepage-UI-ipad.png';
import { Col } from 'react-bootstrap';
const About = () => {
  return (
    <div>
      <div className="container">
        <Col className="text-center">
        <h1>About Us</h1>
        </Col>
        <p>Our suite of Smart Balls, player tracking wearables, visualisation and analysis software and APIs
           empower our partners to reach new levels of competitive advantage in player and team performance,
            fan engagement and officiating, all while creating new revenue streams for teams, leagues, and 
            their commercial partners.</p>

        {/* Add the image below the paragraph */}
        <img
          src={homepageUIIpad}
          alt="Sportable Homepage UI on iPad"
          style={{ maxWidth: '100%', verticalAlign: 'middle' }}
        />
      </div>
    </div>
  );
};

export default About;
