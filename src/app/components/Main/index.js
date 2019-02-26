import React from 'react';
import PropTypes from 'prop-types';
import { education, skills, experiance, hobbies, references } from './data';
import './index.scss';

function Main(props) {
  const { language } = props;
  const educat = education[language];
  const skill = skills[language];
  const exper = experiance[language];
  const hobbie = hobbies[language];
  const reference = references[language];

  return (
    <main>
      <section className="Section">
        <div className="Section--left">
          <h3>{educat.label}</h3>
        </div>
        <div className="Section--right">
          <h3>{educat.university}</h3>
          <p>
            <span>{educat.major.label}:</span> {educat.major.value}
          </p>
          <p>
            <span>{educat.minor.label}:</span> {educat.minor.value}
          </p>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{skill.label}</h3>
        </div>
        <div className="Section--right">
          {skill.list.map(({ title, discription }, index) => (
            <div key={index}>
              <h3>{title}</h3>
              <p>{discription}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{exper.label}</h3>
        </div>
        <div className="Section--right">
          {exper.list.map(({ title, subtitle, responsibilities }, index) => (
            <div key={index}>
              <div className="Section--right-job-title">
                <h3>{title}</h3>
                <span>{subtitle}</span>
              </div>
              <ul>
                {responsibilities.map((value, i) => (
                  <li key={i}>{value}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{hobbie.label}</h3>
        </div>
        <div className="Section--right">
          <p>{hobbie.summary}</p>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{reference.label}</h3>
        </div>
        <div className="Section--right">
          <p>{reference.summary}</p>
        </div>
      </section>
    </main>
  );
}

Main.propTypes = {
  language: PropTypes.oneOf(['en', 'ge']),
};

Main.defaultProps = {
  language: 'en',
};
export default Main;
