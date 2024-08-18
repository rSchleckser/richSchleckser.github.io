import './App.css';
import Navbar from './components/Navbar/Navbar';
import AnimationContainer from './components/AnimationContainer/AnimationContainer';
import AboutSection from './components/AboutSection/AboutSection';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Navbar />
        <AnimationContainer />
        <AboutSection />
      </div>
    </>
  );
}

export default App;
