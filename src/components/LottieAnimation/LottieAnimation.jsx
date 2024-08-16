import Lottie from 'react-lottie';

const LottieAnimation = ({ animationData }) => {
  // Destructure animationData from props
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
      style={{ display: 'flex', justifyContent: 'right', marginLeft: 'auto' }}
      options={defaultOptions}
      height={400}
      width={400}
    />
  );
};

export default LottieAnimation;
