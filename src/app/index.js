import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import './index.scss';

function App() {
  return (
    <React.Fragment>
      <div className="App">
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
            Now that there is the Tec-9, a crappy spray gun from South Miami.
            This gun is advertised as the most popular gun in American crime. Do
            you believe that shit? It actually says that in the little book that
            comes with it: the most popular gun in American crime. Like they are
            actually proud of that shit.
          </p>
          <img
            className="Header--profile-picture"
            src="https://vignette.wikia.nocookie.net/twinpeaks/images/8/81/Dale_Cooper_%282010s%29.jpg/revision/latest?cb=20170815022327"
            alt="profilePicture"
          />
        </header>
        <main>
          <section className="Section">
            <div className="Section--left">
              <h3>Education</h3>
            </div>
            <div className="Section--right">
              <h3>South Miami University</h3>
              <p>
                <span>Major:</span> American crime
              </p>
              <p>
                <span>Minor:</span> the Tec-9 guns spec
              </p>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>Skills</h3>
            </div>
            <div className="Section--right">
              <div>
                <h3>Office skills</h3>
                <p>
                  Besides, Ive already been through too much shit this morning
                  over this case to hand it over to your dumb ass.
                </p>
              </div>
              <div>
                <h3>Computer skills</h3>
                <p>
                  Besides, Ive already been through too much shit this morning
                  over this case to hand it over to your dumb ass.
                </p>
              </div>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>Experience</h3>
            </div>
            <div className="Section--right">
              <div>
                <div className="Section--right-job-title">
                  <h3>Doomsday Cult</h3>
                  <span>Very good Student, 2018.09/present</span>
                </div>
                <ul>
                  <li>
                    Normally, both your asses would be dead as fucking fried
                    chicken.
                  </li>
                  <li>This case to hand it over to your dumb ass.</li>
                  <li>Besides, Ive already been through too much shit this.</li>
                </ul>
              </div>
              <div>
                <div className="Section--right-job-title">
                  <h3>The Watering Hole</h3>
                  <span>Very bad Student, 2019.10/present</span>
                </div>
                <ul>
                  <li>Besides, Ive already been through too much shit this.</li>
                  <li>This case to hand it over to your dumb ass.</li>
                  <li>
                    Normally, both your asses would be dead as fucking fried
                    chicken.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>Hobbies</h3>
            </div>
            <div className="Section--right">
              <p>
                Then Im gonna shoot that bitch in the kneecaps, find out where
                my goddamn money is.
              </p>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>References</h3>
            </div>
            <div className="Section--right">
              <p>Hey, look at me when Im talking to you, motherfucker.</p>
            </div>
          </section>
        </main>
      </div>
      <footer className="Footer">
        <FaLinkedinIn />
        <FaGithub />
      </footer>
    </React.Fragment>
  );
}

export default App;
