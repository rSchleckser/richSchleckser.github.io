import './App.css';
import Navbar from './components/Navbar/Navbar';
import AnimationContainer from './components/AnimationContainer/AnimationContainer';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectSection from './components/ProjectSection/ProjectSection';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Navbar />
        <AnimationContainer />
        <AboutSection />
        <ProjectSection />
      </div>
    </>
  );
}

export default App;
