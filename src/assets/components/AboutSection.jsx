import Skills from "./Skills";
import JohnDoe from "../images/john-doe-about.jpg";


function AboutSection() {
  return (
    <section className="container my-5">
      <div className="row shadow p-5 bg-white rounded">

        <div className="col-md-6">
          <h3 className="fw-bold section-title">À propos</h3>
          <div className="section-underline mb-4"></div>

          <img
            src={JohnDoe}
            alt="John Doe"
            className="img-fluid rounded mb-3"
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi, voluptate doloremque, dolores cumque deleniti quisquam corporis quasi, voluptate doloremque, dolores cumque deleniti quisquam corporis quasi, voluptate doloremque, dolores cumque deleniti quisquam corporis.
          </p>

          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi, voluptate doloremque, dolores cumque deleniti quisquam corporis quasi, voluptate doloremque, dolores cumque deleniti quisquam corporis quasi, voluptate doloremque, dolores cumque deleniti quisquam corporis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>

        <div className="col-md-6">
          <h3 className="fw-bold section-title">Mes compétences</h3>
          <div className="section-underline mb-4"></div>

          <Skills />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
