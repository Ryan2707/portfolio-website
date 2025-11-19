const ProjectDetail = ({ detailtitle, detailparagraph, detailImg }) => {
  return (
    <div className="whole">
      <section className="leftie">
        <h2>{detailtitle}</h2>
        <p>{detailparagraph}</p>
      </section>

      <section className="rightie">
        <img src={detailImg} alt={detailtitle} />
      </section>
    </div>
  );
};

export default ProjectDetail;