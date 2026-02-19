import ServiceCard from "../assets/components/ServiceCard";
import servicesBanner from "../assets/images/banner.jpg";
import "./Service.css";

import { FaPaintBrush, FaCode, FaSearch } from "react-icons/fa";

function Services() {
  return (
    <>
      {/* 🔵 BANNIÈRE */}
      <div
        className="d-flex align-items-center justify-content-center text-white"
        style={{
          height: "300px",
          backgroundImage: `url(${servicesBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
      </div>

      {/* 🔵 SECTION SERVICES */}
      <section className="container my-5 text-center section-title">
        <h1 className="fw-bold display-5">Mon offre de services</h1>
        <p className="text-muted mb-5 section-underline mx-auto">
          Voici les prestations que je propose pour accompagner vos projets web.
        </p>

        <div className="row g-4">
          <ServiceCard
            icon={<FaPaintBrush />}
            title="UX Design"
            text="Conception d'interfaces modernes, intuitives et centrées utilisateur."
          />

          <ServiceCard
            icon={<FaCode />}
            title="Développement Web"
            text="Création de sites web et applications performantes et sécurisées."
          />

          <ServiceCard
            icon={<FaSearch />}
            title="Référencement"
            text="Optimisation SEO pour améliorer votre visibilité sur Google."
          />
        </div>
      </section>
    </>
  );
}

export default Services;
