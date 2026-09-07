import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footerContent'>
        <p>&copy; {year} Richard Schleckser. All rights reserved.</p>
        <div className='footerLinks'>
          <a
            href='https://github.com/rSchleckser'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/richard-schleckser-b4808487/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
