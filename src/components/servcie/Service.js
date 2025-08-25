import "./Service.scss";
import image5 from "../assets/image5.svg";
import image6 from "../assets/image6.svg";
import image7 from "../assets/image7.svg";

const Service = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="title">
          <h4>Services</h4>
          <h4>Design that solves problems, one product at a time.</h4>
        </div>

        <div className="service__list">
          <div className="service__item">
            <img src={image5} alt="rasm" />
            <h5>What I can do for you</h5>
            <p>
              Faster, better products that your users love. Here's all the
              services I provide:
            </p>
            <ul>
              <li>Design Strategy</li>
              <li>Web and Mobile App Design</li>
              <li>Front-end Development</li>
            </ul>
          </div>

          <div className="service__item">
            <img src={image6} alt="rasm" />
            <h5>Applications I'm fluent in</h5>
            <p>
              Every designer needs the right tools to do the perfect job.
              Thankfully, I'm multilingual.
            </p>
            <ul>
              <li>Sketch</li>
              <li>Webflow</li>
              <li>Figma</li>
            </ul>
          </div>

          <div className="service__item">
            <img src={image7} alt="rasm" />
            <h5>What you can expect</h5>
            <p>
              I design products that are more than pretty. I make them shippable
              and usable.
            </p>
            <ul>
              <li>Clean and functional</li>
              <li>Device and user friendly</li>
              <li>Efficient and maintainable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
