import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "" }) => {
  return (
    <div className={`hero ${className}`}>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-left-container">
            <div className="hero-heading">
              <img
                className="vector-icon"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="hero-description">
              <div className="hero-paragraph">
                <div className="description-content">
                  <h1 className="the-leading-social">
                    The leading Social Media resource for Brands
                  </h1>
                </div>
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  et efficitur lorem, ut condimentum nisi. Integer molestie
                  tellus vel nunc sagittis dignissim
                </div>
                <div className="about-contact">
                  <div className="links">
                    <div className="about-us1">About Us</div>
                    <img className="links-child" alt="" src="/line-18.svg" />
                  </div>
                  <div className="links1">
                    <div className="contact-us">Contact Us</div>
                    <img className="links-item" alt="" src="/line-18.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vector-wrapper">
            <img
              className="vector-icon1"
              loading="lazy"
              alt=""
              src="/vector-11.svg"
            />
          </div>
        </div>
        <div className="image-container">
          <div className="hero-image">
            <img
              className="images-icon"
              loading="lazy"
              alt=""
              src="/rectangle-5631@2x.png"
            />
            <div className="image-one">
              <img
                className="image-one-child"
                alt=""
                src="/rectangle-5632@2x.png"
              />
              <div className="image-one-content" />
            </div>
            <div className="image-two">
              <img
                className="image-two-child"
                alt=""
                src="/rectangle-5633@2x.png"
              />
              <div className="image-two-content" />
            </div>
            <img
              className="images-icon1"
              loading="lazy"
              alt=""
              src="/rectangle-5634@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
