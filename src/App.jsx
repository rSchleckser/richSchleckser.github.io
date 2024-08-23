import './App.css';
import Navbar from './components/Navbar/Navbar';
import AnimationContainer from './components/AnimationContainer/AnimationContainer';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Navbar />
        <AnimationContainer />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
