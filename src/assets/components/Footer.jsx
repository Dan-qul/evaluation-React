import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">John Doe</h5>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-3">john.doe@gmail.com</p>

            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-white">
                <FaGithub />
              </a>
              <a href="#" className="text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-white">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Liens utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Accueil</Link></li>
              <li><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Me contacter</Link></li>
              <li><Link to="/mentions-legales" className="text-white text-decoration-none">Mentions légales</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d'une API</li>
              <li>Maquette d'un site</li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          <small>© {new Date().getFullYear()} John Doe - Tous droits réservés</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

