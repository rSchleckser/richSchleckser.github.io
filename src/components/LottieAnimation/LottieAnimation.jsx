import Lottie from 'react-lottie';
import animationData from './programmer.json';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Lottie
      style={{ display: 'block' }}
      options={defaultOptions}
      height={400}
      width={400}
    />
  );
};

export default LottieAnimation;
