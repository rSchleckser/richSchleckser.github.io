import { CardGroup, Card, Image } from 'semantic-ui-react';
import './ProjectSection.css';

const projects = [
  {
    title: 'Mage Hopper',
    description:
      'A 2D game built with Phaser where the mage must avoid Vikings, collect keys, and escape the level.',
    image: 'https://via.placeholder.com/400x225',
  },
  {
    title: 'Buster Movies',
    description:
      'A movie review website similar to IMDB, where users can gather information on movies, post reviews, and more.',
    image: 'https://via.placeholder.com/300x168',
  },
  {
    title: 'QuizMate',
    description:
      'A Django-based application for managing courses, quizzes, and students with a comprehensive instructor dashboard.',
    image: 'https://via.placeholder.com/300x168',
  },
];

const ProjectSection = () => {
  return (
    <div className='projectSection'>
      <h2 className='sectionTitle'>Projects</h2>
      <CardGroup itemsPerRow={3}>
        {projects.map((project, index) => (
          <Card key={index} className='projectCard'>
            <Image src={project.image} alt={project.title} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{project.title}</Card.Header>
              <Card.Description>{project.description}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default ProjectSection;
