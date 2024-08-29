import { Grid, GridColumn, GridRow, Icon } from 'semantic-ui-react';
import './Textbar.css';

const Textbar = () => {
  return (
    <div style={{ marginTop: '3.5rem', marginBottom: '6rem' }}>
      <Grid divided='vertically'>
        <GridRow columns={2}>
          <GridColumn>
            <p style={{ fontSize: '18px' }}>
              Hello! Welcome to my website! I&apos;m thrilled to have you here
              as I embark on my journey into the tech world. This website will
              highlight my focus areas in this field, and is growing everyday.
              Feel free to explore my projects, learn more about my story, and
              reach out if you&apos;d like to connect. Enjoy your visit!
            </p>
          </GridColumn>
          <GridColumn style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <a
                href='https://www.linkedin.com/in/richard-schleckser-b4808487/'
                target='_blank'
              >
                <button className='iconButton'>
                  <Icon name='linkedin' size='huge' />
                </button>
              </a>
              <a href='https://github.com/rSchleckser/' target='_blank'>
                <button className='iconButton' style={{ marginLeft: '2rem' }}>
                  <Icon name='github' size='huge' />
                </button>
              </a>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
};

export default Textbar;
