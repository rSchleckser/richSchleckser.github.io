import Lottie from 'react-lottie';

const LottieAnimation = ({
  animationData,
  height,
  width,
  autoplay,
  loop,
  isStopped,
  direction,
}) => {
  const defaultOptions = {
    loop: loop,
    autoplay: autoplay,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={height}
      width={width}
      isStopped={isStopped}
      direction={direction}
    />
  );
};

export default LottieAnimation;
