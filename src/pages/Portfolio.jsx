import FreshFood from "../assets/images/fresh-food.jpg";
import Restaurant from "../assets/images/restaurant-japonais.jpg";
import EspaceBienEtre from "../assets/images/espace-bien-etre.jpg";
import Seo from "../assets/images/seo.jpg";
import Api from "../assets/images/coder.jpg";
import Maquette from "../assets/images/screens.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Fresh Food",
      description: "Site de vente de produits frais en ligne",
      tech: "PHP & MySQL",
      src: FreshFood,
    },
    {
      title: "Restaurant Akira",
      description: "Site vitrine pour restaurant japonais",
      tech: "WordPress",
      src: Restaurant,
    },
    {
      title: "Espace bien-être",
      description: "Site pour centre de relaxation",
      tech: "Laravel",
      src: EspaceBienEtre,
    },
    {
      title: "SEO",
      description: "Optimisation du référencement",
      tech: "Outils SEO",
      src: Seo,
    },
    {
      title: "Création d'une API",
      description: "API REST publique",
      tech: "Symfony",
      src: Api,
    },
    {
      title: "Maquette d’un site web",
      description: "Prototype UI/UX",
      tech: "Figma",
      src: Maquette,
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center mb-3">Portfolio</h2>
      <p className="text-center text-muted mb-5">
        Voici quelques-unes de mes réalisations.
      </p>

      <div className="row justify-content-center g-4">
        {projects.map((project, index) => (
          <div
            className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center"
            key={index}
          >
            <div className="card h-100 shadow-sm" style={{ maxWidth: "300px" }}>
              <img
                src={project.src}
                alt={project.title}
                className="card-img-top"
              />

              <div className="card-body text-center">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>

                <button className="btn btn-primary">Voir le site</button>
              </div>

              <div className="card-footer text-muted text-center">
                {project.tech}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
