function ServiceCard({ icon, title, text }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm p-4 text-center border-0">
        <div className="fs-1 text-primary mb-3">
          {icon}
        </div>

        <h4 className="fw-bold mb-3">{title}</h4>

        <p className="text-muted">{text}</p>
      </div>
    </div>
  );
}

export default ServiceCard;

