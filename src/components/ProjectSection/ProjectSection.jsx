import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './ProjectSection.css';

const projects = [
  {
    title: 'Mage Hopper',
    description:
      'A 2D Phaser game where the mage dodges Vikings, collects keys, and escapes each level.',
    image: './assets/mage-hopper.png',
    imageAlt: 'Screenshot of Mage Hopper gameplay with a mage character',
    tech: ['Phaser', 'JavaScript', 'HTML5'],
    outcomes: [
      'Shipped a playable browser game with collision, scoring, and level progression.',
      'Built reusable Phaser scenes for menus, gameplay, and win/lose states.',
    ],
    liveUrl: 'https://rschleckser.github.io/mage-hopper/',
    codeUrl: 'https://github.com/rSchleckser/mage-hopper',
  },
  {
    title: 'Buster Movies',
    description:
      'A movie discovery and review app where users browse titles, read details, and share reviews.',
    image: './assets/buster-movies.png',
    imageAlt: 'Screenshot of the Buster Movies review interface',
    tech: ['React', 'Node.js', 'MongoDB'],
    outcomes: [
      'Integrated a React client with a Node API for discovery and review CRUD flows.',
      'Automated persistent review storage with MongoDB so feedback survives across sessions.',
    ],
    liveUrl: 'https://buster-movies-1.onrender.com/',
    codeUrl: 'https://github.com/rSchleckser/Buster-movies',
  },
  {
    title: 'QuizMate',
    description:
      'A Django app for courses, quizzes, and students — includes an instructor/student dashboard.',
    image: './assets/quiz_mate.png',
    imageAlt: 'Screenshot of the QuizMate course and quiz dashboard',
    tech: ['Django', 'Python', 'PostgreSQL'],
    outcomes: [
      'Delivered role-based instructor and student dashboards for courses and quizzes.',
      'Integrated Django auth and PostgreSQL models for reliable enrollment and quiz data.',
    ],
    liveUrl: 'https://courses-service-1f17.onrender.com',
    codeUrl: 'https://github.com/rSchleckser/QuizMate',
  },
];

const isRenderHost = (url) =>
  typeof url === 'string' && url.toLowerCase().includes('render.com');

const ProjectSection = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    projects.forEach((_, index) => {
      ScrollReveal().reveal(`.card-${index}`, {
        origin: 'bottom',
        distance: '40px',
        duration: 1000,
        delay: 150 + index * 100,
      });
    });
  }, []);

  return (
    <section className='projectSection' id='projects'>
      <h2 className='section-title'>Projects</h2>
      <div className='project-grid'>
        {projects.map((project, index) => {
          const needsWakeNote = isRenderHost(project.liveUrl);

          return (
            <article
              key={project.title}
              className={`project-card card-${index}`}
            >
              <div className='project-image-wrap'>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className='project-image'
                />
                {needsWakeNote && (
                  <span className='project-preview-badge' aria-hidden='true'>
                    PREVIEW
                  </span>
                )}
              </div>
              <div className='project-body'>
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-description'>{project.description}</p>
                {project.outcomes?.length > 0 && (
                  <ul className='project-outcomes' aria-label={`${project.title} outcomes`}>
                    {project.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                )}
                {needsWakeNote && (
                  <p className='project-wake-banner' role='note'>
                    Live demo may take a few seconds to wake — free hosting
                    spins down when idle.
                  </p>
                )}
                <ul
                  className='project-tech'
                  aria-label={`${project.title} technologies`}
                >
                  {project.tech.map((item) => (
                    <li key={item} className='project-tech-chip'>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className='project-actions'>
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='project-btn project-btn-live'
                  >
                    View live
                  </a>
                  <a
                    href={project.codeUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='project-btn project-btn-code'
                  >
                    View code
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
