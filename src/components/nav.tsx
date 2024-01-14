import React from 'react';
import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Home from './home';
import Contact from './contact';
import Career from './careers';
function NavBar() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k!)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Home />
      </Tab>
      <Tab eventKey="contact" title="Contact Us">
        <Contact />
      </Tab>
      <Tab eventKey="career" title="Careers">
        <Career />
      </Tab>
    </Tabs>
  );
}

export default NavBar;
