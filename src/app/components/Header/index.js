import React from 'react';
import './index.scss';

function Header() {
  return (
    <header className="Header">
      <h1>Dale Cooper</h1>
      <hr />
      <p className="Header--contact">Phone: +370 000 00001</p>
      <p className="Header--contact">
        Email:{' '}
        <a
          href="mailto:daleCooper@twinpeaks.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          daleCooper@twinpeaks.com
        </a>
      </p>
      <p className="Header--summary">
        Now that there is the Tec-9, a crappy spray gun from South Miami. This
        gun is advertised as the most popular gun in American crime. Do you
        believe that shit? It actually says that in the little book that comes
        with it: the most popular gun in American crime. Like they are actually
        proud of that shit.
      </p>
      <img
        className="Header--profile-picture"
        src="https://vignette.wikia.nocookie.net/twinpeaks/images/8/81/Dale_Cooper_%282010s%29.jpg/revision/latest?cb=20170815022327"
        alt="profilePicture"
      />
    </header>
  );
}

export default Header;
