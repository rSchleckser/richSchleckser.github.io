import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './AboutSection.css';

const techStack = [
  { name: 'React.js', icon: './assets/icons/react-color.svg', alt: 'React logo' },
  { name: 'Node.js', icon: './assets/icons/node.svg', alt: 'Node.js logo' },
  { name: 'Express.js', icon: './assets/icons/express.svg', alt: 'Express.js logo' },
  { name: 'MongoDB', icon: './assets/icons/mongodb.svg', alt: 'MongoDB logo' },
  { name: 'Python', icon: './assets/icons/python.svg', alt: 'Python logo' },
  { name: 'Django', icon: './assets/icons/django.svg', alt: 'Django logo' },
  { name: 'PostgreSQL', icon: './assets/icons/postgresql.svg', alt: 'PostgreSQL logo' },
  { name: 'AWS' },
  { name: 'Bash' },
];

const awsCerts = [
  'Solutions Architect – Associate (2025)',
  'Developer – Associate (2025)',
  'SysOps Administrator – Associate (2025)',
  'Cloud Practitioner (2025)',
];

const education = [
  {
    school: 'Western Governors University',
    detail: 'BS, Computer Science — expected December 2026',
  },
  {
    school: 'Liberty University',
    detail: 'BS, Interdisciplinary Studies — March 2026',
  },
];

const AboutSection = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    ScrollReveal().reveal('.about-title', {
      origin: 'top',
      distance: '40px',
      duration: 1000,
      delay: 100,
    });
    ScrollReveal().reveal('.about-photo', {
      origin: 'left',
      distance: '40px',
      duration: 1000,
      delay: 150,
    });
    ScrollReveal().reveal('.about-description', {
      origin: 'right',
      distance: '40px',
      duration: 1000,
      delay: 200,
    });
    ScrollReveal().reveal('.about-credentials', {
      origin: 'bottom',
      distance: '30px',
      duration: 1000,
      delay: 220,
    });
    ScrollReveal().reveal('.about-tech', {
      origin: 'bottom',
      distance: '30px',
      duration: 1000,
      delay: 250,
    });
  }, []);

  return (
    <section className='aboutContainer' id='about'>
      <h2 className='section-title about-title'>About Me</h2>

      <div className='about-layout'>
        <div className='about-photo-wrap'>
          <img
            src='./assets/about_pic.jpg'
            alt='Richard Schleckser, software integration engineer and full-stack developer'
            className='about-photo'
          />
        </div>

        <div className='about-copy'>
          <div className='about-description'>
            <p className='description-text'>
              I&apos;m Richard Schleckser — a Software Integration Engineer at Boeing
              in Seattle, where I own end-to-end software loading, validation, and
              configuration for large enterprise systems. Day to day that means
              Python and Bash automation, integration testing, and bridging
              engineering teams with stakeholders under strict compliance needs.
            </p>
            <p className='description-text'>
              Alongside that work I ship fullstack web apps with React, Node, and
              Django, and hold four AWS Associate certifications (2025). I&apos;m
              completing a BS in Computer Science at Western Governors University
              (expected December 2026).
            </p>
            <p className='description-text'>
              Off the clock: video games, guitar, and time with family.
            </p>
          </div>

          <div className='about-credentials'>
            <div className='credential-block'>
              <h3 className='tech-heading'>AWS Certifications</h3>
              <ul className='credential-chip-list' aria-label='AWS certifications'>
                {awsCerts.map((cert) => (
                  <li key={cert} className='credential-chip'>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div className='credential-block'>
              <h3 className='tech-heading'>Education</h3>
              <ul className='education-list' aria-label='Education'>
                {education.map((item) => (
                  <li key={item.school}>
                    <span className='education-school'>{item.school}</span>
                    <span className='education-detail'>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='about-tech'>
            <h3 className='tech-heading'>Tech Stack</h3>
            <ul className='tech-chip-list'>
              {techStack.map((tech) => (
                <li key={tech.name} className='tech-chip'>
                  {tech.icon ? (
                    <img
                      src={tech.icon}
                      alt={tech.alt || ''}
                      width='20'
                      height='20'
                    />
                  ) : null}
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
