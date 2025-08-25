import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero__content">
        <div className="hero__title">
          <h1>I design products</h1>
          <h2>that delight and inspire people.</h2>
          <p>
            Hi! I’m Jake, a product designer based in Berlin. I create
            user-friendly interfaces for fast-growing startups.
          </p>
          <button className="hero__btn">Book a call</button>
          <button className="hero__btn">Download CV</button>
        </div>

        <div className="hero__image"></div>
      </div>
    </div>
  );
};

export default Hero;
