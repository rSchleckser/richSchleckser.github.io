import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './ExperienceSection.css';

const experienceItems = [
  {
    role: 'Software Integration Engineer',
    org: 'Boeing · Seattle, WA',
    period: '2019 – Present',
    chips: ['Python', 'Bash', 'Integration', 'Automation'],
    bullets: [
      'Own end-to-end software loading, validation, and configuration for complex enterprise systems before deployment.',
      'Build Python and Bash automation for deployment and configuration verification, cutting manual processing time.',
      'Run integration testing and advanced troubleshooting on large-scale systems under strict operational and compliance requirements.',
      'Serve as technical liaison between engineering teams and external stakeholders to gather requirements and deliver solutions.',
    ],
  },
  {
    role: 'Systems Technician',
    org: 'Various Technical Operators (Regional, MRO, Corporate)',
    period: '2014 – 2019',
    chips: ['Systems', 'Troubleshooting', 'Operations'],
    bullets: [
      'Performed advanced troubleshooting and maintenance on complex technical systems in high-volume operational environments.',
      'Partnered with teams to resolve issues and improve operational processes.',
    ],
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
      </div>

      <div className='experience-list'>
        {experienceItems.map((item) => (
          <article key={`${item.org}-${item.role}`} className='experience-card'>
            <div className='experience-card-top'>
              <div>
                <h3 className='experience-role'>{item.role}</h3>
                <p className='experience-org'>{item.org}</p>
              </div>
              <p className='experience-period'>{item.period}</p>
            </div>
            <ul
              className='experience-bullets'
              aria-label={`${item.role} highlights`}
            >
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <ul
              className='experience-chips'
              aria-label={`${item.role} focus areas`}
            >
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
