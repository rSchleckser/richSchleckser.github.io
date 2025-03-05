import './Navbar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Button, Sidebar, Menu } from 'semantic-ui-react';
import LottieAnimation from '../LottieAnimation/LottieAnimation';
import closingX from '../LottieAnimation/closingX.json';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [direction, setDirection] = useState(0);

  const toggleSidebar = () => {
    setVisible(!visible);
    setIsStopped(false);
    setDirection(direction === 1 ? -1 : 1);
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

  return (
    <div className='navContainer'>
      <Button className='toggleButton' onClick={toggleSidebar}>
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
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width='thin'
        className='sideBar'
      >
        <Menu.Item>
          <Link
            to='home'
            smooth={true}
            duration={500}
            onClick={() => setVisible(false)}
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
            onClick={() => setVisible(false)}
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
            onClick={() => setVisible(false)}
            className='nav-link'
          >
            Projects
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            onClick={() => setVisible(false)}
            className='nav-link'
          >
            Contact
          </Link>
        </Menu.Item>
        <Menu.Item>
          <a
            href='/richSchleckser.github.io/Richard_Schleckser_Aircraft_Resume_Software.docx'
            download='Richard_Schleckser_Aircraft_Resume_Software.docx'
          >
            Download Resume
          </a>
        </Menu.Item>
      </Sidebar>

      <h1 className='mainBar'>Richard Schleckser</h1>
      <nav className='mainBar'>
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
            <Link
              to='projects'
              smooth={true}
              duration={500}
              className='nav-link'
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              className='nav-link'
            >
              Contact
            </Link>
          </li>
          <li>
            <button className='downloadButton'>
              <a
                href='/richSchleckser.github.io/Richard_Schleckser_Aircraft_Resume_Software.docx'
                download='Richard_Schleckser_Aircraft_Resume_Software.docx'
              >
                Download Resume
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
