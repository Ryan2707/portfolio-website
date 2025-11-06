const HomePageTopText = ({title, subtitle}) => {
        return (
            <div className="home-top-text">
                <h1 className="home-title">{title}</h1>
                <h2 className="home-subtitle">{subtitle}</h2>
            </div>
        );
    }

const HomePageBottomText = ({paragraph}) => {
    return (
            <div className="home-bottom-text">
                <p className="home-paragraph">{paragraph}</p>
            </div>
      );
}



export default HomePageTopText;
export { HomePageBottomText };