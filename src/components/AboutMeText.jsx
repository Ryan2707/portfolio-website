

const AboutMeText = ({ paragraph1, paragraph2, paragraph3, paragraph4 }) => {
        return(
            <div className="about-me-text">
                <p className="paragraph1">{paragraph1}</p>
                <br/>
                <p className="paragraph2">{paragraph2}</p>
                <br/>
                <p className="paragraph3">{paragraph3}</p>
                <p className="paragraph4">{paragraph4}</p>
             </div>
        );
    }
 
export default AboutMeText;


