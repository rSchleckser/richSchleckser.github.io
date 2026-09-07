import './Navbar.css';
import { useState, useEffect, useId } from 'react';
import { Link } from 'react-scroll';
import { Button, Sidebar, Menu } from 'semantic-ui-react';
import LottieAnimation from '../LottieAnimation/LottieAnimation';
import closingX from '../LottieAnimation/closingX.json';

const RESUME_HREF =
  `${import.meta.env.BASE_URL}Richard_Schleckser_Aircraft_Resume_Software.docx`;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [direction, setDirection] = useState(0);
  const sidebarId = useId();

  const toggleSidebar = () => {
    setVisible((prev) => !prev);
    setIsStopped(false);
    setDirection((prev) => (prev === 1 ? -1 : 1));
  };

  useEffect(() => {
    if (visible) {
      setDirection(1);
      setIsStopped(false);
    } else {
      setDirection(-1);
      setIsStopped(false);
    }
  }, [visible]);

  const closeSidebar = () => setVisible(false);

  return (
    <header className='navContainer'>
      <Button
        className='toggleButton'
        onClick={toggleSidebar}
        aria-label={visible ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={visible}
        aria-controls={sidebarId}
        type='button'
      >
        <LottieAnimation
          animationData={closingX}
          autoplay={false}
          loop={false}
          height={25}
          width={25}
          isStopped={isStopped}
          direction={direction}
        />
      </Button>

      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={closeSidebar}
        vertical
        visible={visible}
        width='thin'
        className='sideBar'
        id={sidebarId}
        aria-label='Mobile navigation'
      >
        <Menu.Item>
          <Link
            to='home'
            smooth={true}
            duration={500}
            onClick={closeSidebar}
            className='nav-link'
          >
            Home
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to='about'
            smooth={true}
            duration={500}
            onClick={closeSidebar}
            className='nav-link'
          >
            About
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to='projects'
            smooth={true}
            duration={500}
            onClick={closeSidebar}
            className='nav-link'
          >
            Projects
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to='experience'
            smooth={true}
            duration={500}
            onClick={closeSidebar}
            className='nav-link'
          >
            Experience
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            onClick={closeSidebar}
            className='nav-link'
          >
            Contact
          </Link>
        </Menu.Item>
        <Menu.Item>
          <a href={RESUME_HREF} download='Richard_Schleckser_Aircraft_Resume_Software.docx'>
            Download Resume
          </a>
        </Menu.Item>
      </Sidebar>

      <h1 className='mainBar brand-name'>Richard Schleckser</h1>
      <nav className='mainBar' aria-label='Primary'>
        <ul>
          <li>
            <Link to='home' smooth={true} duration={500} className='nav-link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500} className='nav-link'>
              About
            </Link>
          </li>
          <li>
            <Link to='projects' smooth={true} duration={500} className='nav-link'>
              Projects
            </Link>
          </li>
          <li>
            <Link to='experience' smooth={true} duration={500} className='nav-link'>
              Experience
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500} className='nav-link'>
              Contact
            </Link>
          </li>
          <li>
            <a
              className='downloadButton'
              href={RESUME_HREF}
              download='Richard_Schleckser_Aircraft_Resume_Software.docx'
            >
              Download Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
