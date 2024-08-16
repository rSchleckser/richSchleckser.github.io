import { Divider, Icon, Grid, GridColumn, GridRow } from 'semantic-ui-react';
import './AnimationContainer.css';
import LottieAnimation from '../LottieAnimation/LottieAnimation';
import CardBar from '../CardBar/CardBar';
import programmer from '../LottieAnimation/programmer.json';
import collab from '../LottieAnimation/collab.json';
import Textbar from '../TextBar/Textbar';

const AnimationContainer = () => {
  return (
    <div className='animateContainer'>
      <Grid divided='vertically'>
        <GridRow columns={2}>
          <GridColumn>
            {' '}
            <div className='animateBox'>
              <h1>
                Embarking on a journey in software, fueled by a commitment to
                growth{' '}
                <section className='animation'>
                  <div className='first'>
                    <div> Web Developer </div>
                  </div>
                  <div className='second'>
                    <div> Frontend Engineer </div>
                  </div>
                  <div className='third'>
                    <div> Backend Engineer </div>
                  </div>
                </section>
              </h1>
            </div>
          </GridColumn>
          <GridColumn>
            {' '}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '3rem',
                position: 'relative',
              }}
            >
              <LottieAnimation animationData={collab} />
              <Divider vertical style={{ position: 'absolute', left: '50%' }}>
                <Icon
                  className='arrows alternate horizontal'
                  style={{ fontSize: '2rem', color: '#DFFF5D' }}
                ></Icon>
              </Divider>
              <LottieAnimation animationData={programmer} />
            </div>
          </GridColumn>
        </GridRow>
      </Grid>

      <CardBar />
      <Textbar />
    </div>
  );
};

export default AnimationContainer;
