import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">

        {/* Left */}
        <div className="nav-left">
          <span className="logo">Athar Siddiqui</span>
        </div>

        {/* Center */}
        <ul className={`nav-center ${menuOpen ? "open" : ""}`}>

          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          </li>

          <li>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          </li>


          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>

        </ul>

        {/* Right */}
        <div className="nav-right">
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Header;
