import "./Testimonials.scss";
import image8 from "../assets/image8.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonials__title">
          <h2>Testimonials</h2>
          <h1>Word on the street</h1>
        </div>
        <div className="testimonials__list">
          <img src={image8} alt="boy" />
          <div className="testimonials__body">
            <h2>
              Jade helped us build a software so intuitive that it didn't need a
              walkthrough. He solved complex problems with brilliant design.
            </h2>
            <h5>John Frankin</h5>
            <p>Founder, Double Bunch</p>
            <div className="list__btn">
            <button className="testimonials__btn">Back</button>
            <button className="testimonials__btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
