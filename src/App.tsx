import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import NavBar from './components/nav';

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
