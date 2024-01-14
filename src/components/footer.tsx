import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* Social Media Icons */}
      <div>
        <img src="linkedin-logo.png" alt="LinkedIn Logo" />
        <img src="twitter-logo.png" alt="Twitter Logo" />
        <img src="instagram-logo.png" alt="Instagram Logo" />
        <img src="youtube-logo.png" alt="Youtube Logo" />
      </div>

      {/* Address */}
      <address>
        Sportable Technologies, Gate A,
        StoneX Stadium, Greenlands Lane, Hendon, NW41RL
      </address>

      {/* Copyright */}
      <p>&copy; 2024 Sportable Ltd. All rights reserved.</p>

      {/* Privacy Policy */}
      <p>Privacy Policy</p>
    </footer>
  );
};

export default Footer;
