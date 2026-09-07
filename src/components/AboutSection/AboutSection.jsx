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
            alt='Richard Schleckser, full-stack developer'
            className='about-photo'
          />
        </div>

        <div className='about-copy'>
          <div className='about-description'>
            <p className='description-text'>
              Hello! My name is Richard Schleckser. I&apos;m a passionate software
              developer with a focus on building intuitive and engaging web
              applications. My journey in software development began with a
              strong desire to build, create, and develop applications that are
              both useful and lasting.
            </p>
            <p className='description-text'>
              Whether I&apos;m working on frontend or backend development, I bring
              enthusiasm and a willingness to learn. I&apos;m always working to
              improve my code, expand my knowledge, and explore new technology
              use cases.
            </p>
            <p className='description-text'>
              When I&apos;m not coding, you can find me playing video games, playing
              guitar, or spending time with family. Let&apos;s connect and see what
              we can create together!
            </p>
          </div>

          <div className='about-tech'>
            <h3 className='tech-heading'>Tech Stack</h3>
            <ul className='tech-chip-list'>
              {techStack.map((tech) => (
                <li key={tech.name} className='tech-chip'>
                  <img
                    src={tech.icon}
                    alt={tech.alt}
                    width='20'
                    height='20'
                  />
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
