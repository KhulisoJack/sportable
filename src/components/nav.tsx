import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import SportableLogo from '../images/Sportable-logo.svg';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const logoStyle = {
    width: '300px',
    height: '80px',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div className="bg-dark d-flex justify-content-between align-items-center p-3">
      <div style={logoStyle} className="pl-40">
        <img src={SportableLogo} alt="Sportable Logo" style={{ width: '100%', height: '100%' }} />
      </div>
      <Nav variant="tabs" className="pr-40">
        <Nav.Item>
          <Nav.Link href="/home" active={location.pathname === '/home'} onClick={() => navigate('/home')}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact" active={location.pathname === '/contact'} onClick={() => navigate('/contact')}>
            Contact Us
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/careers" active={location.pathname === '/careers'} onClick={() => navigate('/careers')}>
            Careers
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar;
