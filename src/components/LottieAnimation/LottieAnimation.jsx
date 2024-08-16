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
      height={300}
      width={300}
    />
  );
};

export default LottieAnimation;
