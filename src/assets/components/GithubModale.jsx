import "./GitHubModal.css";
import Doraemon from "../images/doraemon_character.png";

const GithubModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bg-dark text-white">

          <div className="modal-header">
            <h5 className="modal-title">Mon profil GitHub</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body row">
            <div className="col-md-5 text-center">
              <img
                src={Doraemon}
                alt="avatar"
                className="img-fluid rounded"
              />
            </div>

            <div className="col-md-7">
              <h6>John Doe</h6>
              <p>
                As we all know, John Doe's identity is unknown.
                I just wanted to contribute without being known.
              </p>

              <p>Repositories : 1</p>
              <p>Followers : 16</p>
              <p>Following : 0</p>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Fermer
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GithubModal;
