import heroBg from "../images/hero-bg.jpg";


const Hero = ({ onOpenModal }) => { 

  
  return (
    <header
      className="text-white d-flex align-items-center justify-content-center text-center"
      style={{
        height: "90vh",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="display-4 fw-bold">Bonjour, je suis John Doe</h1>
        <h2 className="mb-4">Développeur web full stack</h2>
        <button className="btn btn-danger" onClick={onOpenModal}>En savoir plus</button>
      </div>
    </header>
  );
}

export default Hero;
