import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Header, Segment, Image, Grid } from 'semantic-ui-react';
import './AboutSection.css';
// import ReactIcon from '';

const AboutSection = () => {
  useEffect(() => {
    ScrollReveal().reveal('.about-title', {
      origin: 'top',
      distance: '80px',
      duration: 1500,
      delay: 200,
    });

    ScrollReveal().reveal('.about-description', {
      origin: 'right',
      distance: '80px',
      duration: 1500,
      delay: 400,
    });

    ScrollReveal().reveal('.about-tech', {
      origin: 'bottom',
      distance: '80px',
      duration: 1500,
      delay: 400,
    });

    ScrollReveal().reveal('.about-photo', {
      origin: 'left',
      distance: '80px',
      duration: 1500,
      delay: 600,
      afterReveal: () => {
        const aboutPhoto = document.querySelector('.about-photo');
        aboutPhoto.style.animation = 'floatImage 4s ease-in-out 2';
        aboutPhoto.style.boxShadow = '10px 10px 10px #172523';

        ('');
      },
    });
  }, []);

  return (
    <div className='aboutContainer' id='about'>
      <Segment basic>
        <Header textAlign='center' className='about-title'>
          About Me
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Image
              src='./assets/about_pic.jpg'
              alt='About me Img'
              className='about-photo'
            />
          </Grid.Column>
          <Grid.Column>
            <div className='about-description'>
              <p className='description-text'>
                Hello! My name is Richard Schleckser. I&apos;m a passionate
                software developer with a focus on building intuitive and
                engaging web applications. My journey in software development
                began with a strong desire to build, create, and develop
                applications/software that are both useful and lasting.
              </p>
              <p className='description-text'>
                Whether I&apos;m working on frontend development, or backend, I
                bring enthusiasm and a willingness to learn. I&apos;m always
                working to improve my code, my knowledge base of software
                development, and technology use cases.
              </p>
              <p className='description-text'>
                When I&apos;m not coding, you can find me playing videos games,
                playing guitar, or spending time with the family. Let&apos;s
                connect and see what we can create together!
              </p>
            </div>
            <div className='about-tech'>
              <h2 className='tech-title'>Tech Stack</h2>
              <Grid columns={2}>
                <Grid.Column>
                  {' '}
                  <ul>
                    <li>
                      <img
                        src='./assets/icons/react-color.svg'
                        alt='React'
                        width='24'
                        height='24'
                      />{' '}
                      React.js
                    </li>
                    <li>
                      <img
                        src='./assets/icons/node.svg'
                        alt='Node'
                        width='24'
                        height='24'
                      />{' '}
                      Node.js
                    </li>
                    <li>
                      <img
                        src='./assets/icons/express.svg'
                        alt='Express'
                        width='24'
                        height='24'
                      />{' '}
                      Express.js
                    </li>
                    <li>
                      <img
                        src='./assets/icons/mongodb.svg'
                        alt='Mongo'
                        width='24'
                        height='24'
                      />{' '}
                      MongoDB
                    </li>
                  </ul>
                </Grid.Column>
                <Grid.Column>
                  {' '}
                  <ul>
                    <li>
                      <img
                        src='./assets/icons/python.svg'
                        alt='Python'
                        width='24'
                        height='24'
                      />{' '}
                      Python
                    </li>
                    <li>
                      <img
                        src='./assets/icons/django.svg'
                        alt='Django'
                        width='24'
                        height='24'
                      />{' '}
                      Django
                    </li>
                    <li>
                      <img
                        src='./assets/icons/postgresql.svg'
                        alt='PostgresSQL'
                        width='24'
                        height='24'
                      />{' '}
                      PostgreSQL
                    </li>
                  </ul>
                </Grid.Column>
              </Grid>
            </div>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};

export default AboutSection;
