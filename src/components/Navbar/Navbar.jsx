import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navContainer'>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Projects</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
          <li>
            <button className='downloadButton'>
              <a
                href='/Richard_Schleckser_Resume.docx'
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
