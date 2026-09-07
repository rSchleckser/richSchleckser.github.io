import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './ExperienceSection.css';

const experienceItems = [
  {
    role: 'Full-stack Developer (Portfolio focus)',
    org: 'Personal / Contract-ready',
    period: '2024 — Present',
    chips: ['React', 'Node.js', 'Django', 'PostgreSQL'],
    summary:
      'Building end-to-end web apps with clear UX, API design, and deployable demos. Placeholder copy for preview — replace with real roles.',
  },
  {
    role: 'Software Engineering Student',
    org: 'General Assembly',
    period: 'Immersive program',
    chips: ['JavaScript', 'Python', 'MongoDB', 'Agile'],
    summary:
      'Shipped team and solo projects across the MERN stack and Django. Placeholder education entry for preview layout.',
  },
];

const ExperienceSection = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    ScrollReveal().reveal('.experience-title', {
      origin: 'top',
      distance: '40px',
      duration: 1000,
      delay: 100,
    });
    ScrollReveal().reveal('.experience-card', {
      origin: 'bottom',
      distance: '30px',
      duration: 1000,
      delay: 150,
      interval: 100,
    });
  }, []);

  return (
    <section className='experienceSection' id='experience'>
      <div className='experience-header'>
        <h2 className='section-title experience-title'>Experience</h2>
        <span className='experience-preview-note'>Preview placeholder</span>
      </div>

      <div className='experience-list'>
        {experienceItems.map((item) => (
          <article key={item.role} className='experience-card'>
            <div className='experience-card-top'>
              <div>
                <h3 className='experience-role'>{item.role}</h3>
                <p className='experience-org'>{item.org}</p>
              </div>
              <p className='experience-period'>{item.period}</p>
            </div>
            <p className='experience-summary'>{item.summary}</p>
            <ul className='experience-chips' aria-label={`${item.role} focus areas`}>
              {item.chips.map((chip) => (
                <li key={chip} className='experience-chip'>
                  {chip}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
