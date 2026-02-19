import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 px-md-4">
      {/* Logo / Brand */}
      <Link className="navbar-brand fw-bold" to="/">
        JOHN DOE
      </Link>

      {/* Bouton hamburger pour mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav text-center text-lg-start">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>HOME</NavLink>          
          </li>
          <li className="nav-item">
            <NavLink to="/services"className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>SERVICES</NavLink>           
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>CONTACT</NavLink>            
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>PORTFOLIO </NavLink>          
          </li>
          <li className="nav-item">
            <NavLink to="/mentions-legales"className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>MENTIONS LÉGALES </NavLink>
          </li>         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


