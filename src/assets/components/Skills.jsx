function Skills() {
  return (
    <>
      <p>HTML5 90%</p>
      <div className="progress mb-3">
        <div className="progress-bar bg-danger" style={{ width: "90%" }}></div>
      </div>

      <p>CSS3 80%</p>
      <div className="progress mb-3">
        <div className="progress-bar bg-info" style={{ width: "80%" }}></div>
      </div>

      <p>JAVASCRIPT 70%</p>
      <div className="progress mb-3">
        <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
      </div>

      <p>PHP 60%</p>
      <div className="progress mb-3">
        <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
      </div>

      <p>REACT 50%</p>
      <div className="progress">
        <div className="progress-bar bg-primary" style={{ width: "50%" }}></div>
      </div>
    </>
  );
}

export default Skills;
