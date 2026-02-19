

const MentionsLegales = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold">Mentions légales</h2>

      {/* 🔵 Barre bleue */}
      <div className="d-flex justify-content-center my-3">
        <div className="section-underline"></div>
      </div>

      <div className="accordion mt-4" id="mentionsAccordion">

        {/* ÉDITEUR */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              Éditeur du site
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <h5>John Doe</h5>
              <p>
                40 rue Laure Diebold <br />
                69009 Lyon, France <br />
                10 20 30 40 50 <br />
                john.doe@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* HÉBERGEUR */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              Hébergeur
            </button>
          </h2>

          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <h5>Alwaysdata</h5>
              <p>
                91 Rue du Faubourg Saint-Honoré <br />
                75008 Paris <br />
                www.alwaysdata.com
              </p>
            </div>
          </div>
        </div>

        {/* CRÉDITS */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              Crédits
            </button>
          </h2>

          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <p>
                Site réalisé par John Doe. <br />
                Images libres de droits.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MentionsLegales;
