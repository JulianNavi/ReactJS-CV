import React from 'react';
import './index.scss';

function Footer() {
  return (
    <footer className="Footer">
      <FaLinkedinIn />
      <FaGithub />
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/JulianNavi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </footer>
  );
}

export default Footer;
