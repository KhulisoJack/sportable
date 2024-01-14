import React from 'react';
import { Row, Col } from 'react-bootstrap';
import linkedin from '../images/linkedinlogo.svg';
import instagram from '../images/instagram.svg';
import youtube from '../images/youtube-icon.svg';
import twitter from '../images/Twitter.svg';

import './technology.css';

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <Row >
          <Col>
            <img
              src={linkedin}
              alt="LinkedIn Logo" className='icon'
            />
            </Col>
            <Col>
            <img
              src={twitter}
              alt="LinkedIn Logo" className='icon'
            />
            </Col>
            <Col>
            <img
              src={instagram}
              alt="LinkedIn Logo" className='icon'
            />
            </Col>
            <Col>
            <img
              src={youtube}
              alt="LinkedIn Logo" className='icon'
            />
          </Col>
        </Row>

        {/* Address */}
        <address className="bottom-footer-paragraph-2">
          Sportable Technologies, Gate A,
          StoneX Stadium, Greenlands Lane, Hendon, NW41RL
        </address>

        {/* Copyright */}
        <p className="bottom-footer-paragraph-2">&copy; 2024 Sportable Ltd. All rights reserved.</p>

        {/* Privacy Policy */}
        <p className="bottom-footer-paragraph-2">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
