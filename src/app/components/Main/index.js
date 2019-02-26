import React from 'react';
import { education, skills, experiance, hobbies, references } from './data';
import './index.scss';

function Main() {
  return (
    <main>
      <section className="Section">
        <div className="Section--left">
          <h3>{education.label}</h3>
        </div>
        <div className="Section--right">
          <h3>{education.university}</h3>
          <p>
            <span>{education.major.label}:</span> {education.major.value}
          </p>
          <p>
            <span>{education.minor.label}:</span> {education.minor.value}
          </p>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{skills.label}</h3>
        </div>
        <div className="Section--right">
          {skills.list.map(({ title, discription }, index) => (
            <div key={index}>
              <h3>{title}</h3>
              <p>{discription}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{experiance.label}</h3>
        </div>
        <div className="Section--right">
          {experiance.list.map(
            ({ title, subtitle, responsibilities }, index) => (
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
            )
          )}
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{hobbies.en.label}</h3>
        </div>
        <div className="Section--right">
          <p>{hobbies.en.summary}</p>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{references.label}</h3>
        </div>
        <div className="Section--right">
          <p>{references.summary}</p>
        </div>
      </section>
    </main>
  );
}
export default Main;
