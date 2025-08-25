import "./Trusted.scss";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";

const Trusted = () => {
  return (
    <div className="trusted">
      <div className="container">
        <div className="title">
          <h4>Trusted by</h4>
          <div className="trusted__logo">
            <img src={image1} alt="svg" />
            <img src={image2} alt="svg" />
            <img src={image3} alt="svg" />
            <img src={image4} alt="svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
