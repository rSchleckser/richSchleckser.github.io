import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navContainer'>
      <h1>Richard Schleckser</h1>

      <nav>
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
                href='./Richard_Schleckser_Resume.docx'
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
