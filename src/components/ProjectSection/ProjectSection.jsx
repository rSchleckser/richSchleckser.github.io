import { CardGroup, Card, Image } from 'semantic-ui-react';
import ScrollReveal from 'scrollreveal';
import './ProjectSection.css';
import { useEffect } from 'react';

const projects = [
  {
    title: 'Mage Hopper',
    description:
      'A 2D game built with Phaser where the mage must avoid Vikings, collect keys, and escape the level.',
    image: './assets/mage-hopper.png',
    url: 'https://rschleckser.github.io/mage-hopper/',
  },
  {
    title: 'Buster Movies',
    description:
      'A movie review website similar to IMDB, where users can gather information on movies, post reviews, and more.',
    image: './assets/buster-movies.png',
    url: 'https://buster-movies-1.onrender.com/',
  },
  {
    title: 'QuizMate',
    description:
      'A Django-based application for managing courses, quizzes, and students with a comprehensive instructor dashboard.',
    image: './assets/quiz_mate.png',
    url: 'https://courses-service-1f17.onrender.com',
  },
];

const ProjectSection = () => {
  useEffect(() => {
    ScrollReveal().reveal('.card-0', {
      origin: 'right',
      distance: '80px',
      duration: 1500,
      delay: 400,
    });
    ScrollReveal().reveal('.card-1', {
      origin: 'bottom',
      distance: '80px',
      duration: 1500,
      delay: 400,
    });
    ScrollReveal().reveal('.card-2', {
      origin: 'left',
      distance: '80px',
      duration: 1500,
      delay: 400,
    });
  }, []);

  return (
    <div className='projectSection' id='projects'>
      <h2 className='sectionTitle'>Projects</h2>
      <CardGroup itemsPerRow={3}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Card key={index} className={`projectCard card-${index}`}>
              <Image src={project.image} alt={project.title} />
              <Card.Content>
                <Card.Header>{project.title}</Card.Header>
                <Card.Description>{project.description}</Card.Description>
              </Card.Content>
            </Card>
          </a>
        ))}
      </CardGroup>
    </div>
  );
};

export default ProjectSection;
