import "./rocketboost.css";

const ProjectDetail = ({ boter, kaas, ei }) => {
  return (
    <div className="whole">
      <section className="leftie">
        <h1>Project Details</h1>
        <h2>{boter}</h2>
        <p>{kaas}</p>
      </section>

      <section className="rightie">
        <img src={ei} alt={boter} />
      </section>
    </div>
  );
};

export default ProjectDetail;
