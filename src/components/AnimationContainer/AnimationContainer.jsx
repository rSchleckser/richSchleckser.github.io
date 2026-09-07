import './AnimationContainer.css';
import { Link } from 'react-scroll';
import LottieAnimation from '../LottieAnimation/LottieAnimation';
import programmer from '../LottieAnimation/programmer.json';
import collab from '../LottieAnimation/collab.json';

const AnimationContainer = () => {
  return (
    <section className='hero' id='home' aria-label='Introduction'>
      <div className='hero-content'>
        <p className='hero-eyebrow'>Portfolio</p>
        <h1 className='hero-name'>Richard Schleckser</h1>
        <p className='hero-role'>Full-stack developer</p>
        <p className='hero-tagline'>
          Building intuitive web apps with React, Node, and Django — focused on
          clean UX and lasting code.
        </p>
        <Link
          to='projects'
          smooth={true}
          duration={500}
          className='hero-cta'
          role='button'
        >
          View projects
        </Link>
        <div className='hero-social'>
          <a
            href='https://github.com/rSchleckser'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/richard-schleckser-b4808487/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className='hero-visual' aria-hidden='true'>
        <LottieAnimation
          animationData={collab}
          autoplay={true}
          loop={true}
          height={220}
          width={220}
        />
        <LottieAnimation
          animationData={programmer}
          autoplay={true}
          loop={true}
          height={220}
          width={220}
        />
      </div>
    </section>
  );
};

export default AnimationContainer;
