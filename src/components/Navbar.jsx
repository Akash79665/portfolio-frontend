

// import { Link } from "react-router-dom";
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="nav-link"><span>Home</span></Link>
//       <Link to="/about" className="nav-link"><span>About</span></Link>
//       <Link to="/skills" className="nav-link"><span>Skills</span></Link>
//       <Link to="/contact" className="nav-link"><span>Contact</span></Link>
//     </nav>
//   );
// }

///////

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-link"><span>Home</span></a>
      <a href="#about" className="nav-link"><span>About</span></a>
      <a href="#skills" className="nav-link"><span>Skills</span></a>
      <a href="#contact" className="nav-link"><span>Contact</span></a>
    </nav>
  );
}
