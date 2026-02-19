import Hero from "../assets/components/Hero";
import AboutSection from "../assets/components/AboutSection";
import "./Home.css";
import { useState } from "react";
import GithubModal from "../assets/components/GithubModale"


const Home = () => {
    const [showModal, setShowModal] = useState(false);


       
  return (
    <>
        <Hero onOpenModal={() => setShowModal(true)} />
        <GithubModal show={showModal}onClose={() => setShowModal(false)} /> 
        <AboutSection />
    </>
  );
}

export default Home;
