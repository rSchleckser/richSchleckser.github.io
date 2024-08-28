import './Navbar.css';
import { useState } from 'react';
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
        <Menu.Item as='a' href='#'>
          Home
        </Menu.Item>
        <Menu.Item as='a' href='#about'>
          About
        </Menu.Item>
        <Menu.Item as='a' href='#projects'>
          Projects
        </Menu.Item>
        <Menu.Item as='a' href='#contact'>
          Contact
        </Menu.Item>
        <Menu.Item
          as='a'
          href='/richSchleckser.github.io/Richard_Schleckser_Resume.docx'
          download='Richard_Schleckser_Resume.docx'
        >
          {' '}
          Download Resume
        </Menu.Item>
      </Sidebar>

      <h1 className='mainBar'>Richard Schleckser</h1>
      <nav className='mainBar'>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <button className='downloadButton'>
              <a
                href='/richSchleckser.github.io/Richard_Schleckser_Resume.docx'
                download='Richard_Schleckser_Resume.docx'
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
