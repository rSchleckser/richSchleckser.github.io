import { Header, Segment, Image, Grid } from 'semantic-ui-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className='aboutContainer'>
      <Segment basic>
        <Header as='h1' textAlign='center'>
          About Me
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Image
              src='https://via.placeholder.com/300' // Replace with your own image
              alt='About me'
              rounded
            />
          </Grid.Column>
          <Grid.Column>
            <p style={{ fontSize: '18px', lineHeight: '1.6rem' }}>
              Hello! I'm a passionate software developer with a focus on
              building intuitive and engaging web applications. My journey in
              software development started with a curiosity for technology and
              has evolved into a deep commitment to creating innovative
              solutions.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.6rem' }}>
              Whether I'm working on frontend development, backend logic, or
              collaborating with teams, I bring enthusiasm and a willingness to
              learn to every project. I'm always exploring new tools, methods,
              and ideas to stay at the forefront of the industry.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.6rem' }}>
              When I'm not coding, you can find me exploring the outdoors,
              reading up on the latest in tech, or experimenting with new
              recipes in the kitchen. Let's connect and see what we can create
              together!
            </p>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};

export default AboutSection;
