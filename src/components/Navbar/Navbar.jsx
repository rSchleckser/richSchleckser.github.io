import './Navbar.css';

const Navbar = () => {
  return (
    <div>
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
            <button>Download Resume</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
