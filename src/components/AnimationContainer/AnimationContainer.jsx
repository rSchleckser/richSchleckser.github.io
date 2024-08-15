import './AnimationContainer.css';
import LottieAnimation from '../LottieAnimation/LottieAnimation';
import CardBar from '../CardBar/CardBar';

const AnimationContainer = () => {
  return (
    <div className='animateContainer'>
      <div className='animateBox'>
        <h1>
          The world’s leading skills verification for tomorrow{' '}
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
      <LottieAnimation />
      <CardBar />
    </div>
  );
};

export default AnimationContainer;
