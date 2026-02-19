import Position from "../images/gps-og-image.jpg";


function ContactForm() {
  
  return (
    <div className="row shadow p-4 bg-white rounded">
      
      <div className="col-md-6">
        <h4>Formulaire de contact</h4>

        <input className="form-control mb-3" placeholder="Votre nom" />
        <input className="form-control mb-3" placeholder="Votre email" />
        <input className="form-control mb-3" placeholder="Téléphone" />
        <input className="form-control mb-3" placeholder="Sujet" />
        <textarea
          className="form-control mb-3"
          rows="5"
          placeholder="Votre message"
        ></textarea>

        <button className="btn btn-primary">Envoyer</button>
      </div>

      <div className="col-md-6">
        <h4>Mes coordonnées</h4>
        <p>John Doe</p>
        <p>40 rue Laure Diebold</p>
        <p>69009 Lyon</p>
        <p>10 20 30 40 50</p>
        <p>john.doe@gmail.com</p>
        <img src={Position} alt="position" className="img-fluid rounded" />
      </div>

    </div>
  );
}

export default ContactForm;
