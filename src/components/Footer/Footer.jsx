import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerContent'>
        <p>&copy; 2024 Richard Schleckser. All rights reserved.</p>
        <div className='footerLinks'>
          <a href='/about'>About</a>
          <a href='/projects'>Projects</a>
          <a href='/contact'>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
