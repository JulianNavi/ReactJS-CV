import React from 'react';
import PropTypes from 'prop-types';
import data from './data';

import './index.scss';

function Header(props) {
  const { language, onLanguage } = props;
  const { contacts, summary } = data[language];
  return (
    <header className="Header">
      <h1>{data[language].name}</h1>
      <hr />
      <p className="Header--contact">
        {contacts.phone.label}: {contacts.phone.value}
      </p>
      <p className="Header--contact">
        {contacts.email.label}:{' '}
        <a
          href="mailto:daleCooper@twinpeaks.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {contacts.email.value}
        </a>
      </p>
      <p className="Header--summary">{summary}</p>
      <img
        className="Header--profile-picture"
        src={data[language].picture.src}
        alt={data[language].picture.alt}
      />
      <select
        onChange={e => onLanguage(e.target.value)}
        className="Header--language-select"
      >
        <option value="en">EN</option>
        <option value="ge">GE</option>
      </select>
    </header>
  );
}

Header.propTypes = {
  language: PropTypes.oneOf(['en', 'ge']),
  onLanguage: PropTypes.func.isRequired,
};

Header.defaultProps = {
  language: 'en',
};

export default Header;
