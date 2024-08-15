import './AnimationContainer.css';
import LottieAnimation from '../LottieAnimation/LottieAnimation';

const AnimationContainer = () => {
  return (
    <div className='animateContainer'>
      <div className='animateBox'>
        <h1>The world’s leading skills verification for tomorrow’s</h1>
      </div>
      <LottieAnimation />
    </div>
  );
};

export default AnimationContainer;
