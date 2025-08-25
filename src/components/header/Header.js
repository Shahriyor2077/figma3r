import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <div className="navbar__logo">Portfolio Creator</div>
          <ul className="navbar__title">
            <li className="navbar__item">
              <a href="/about">About</a>
            </li>
            <li className="navbar__item">
              <a href="service">Service</a>
            </li>
            <li className="navbar__item">
              <a href="projects">Projects</a>
            </li>
            <li className="navbar__item">
              <a href="blog">Blog</a>
            </li>
            <li className="navbar__item">
              <a href="book">Book a call</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
