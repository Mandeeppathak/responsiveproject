import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div className={`navbar-links-wrapper ${className}`}>
      <div className="navbar-links">
        <div className="top-navbar-links">
          <div className="home-link">
            <a className="home">Home</a>
          </div>
          <div className="links-container">
            <a className="articles">Articles</a>
            <img
              className="dropdown-arrow-svgrepo-com-1-icon"
              alt=""
              src="/dropdownarrowsvgrepocom-1.svg"
            />
          </div>
          <div className="links-container1">
            <a className="platforms">Platforms</a>
            <img
              className="dropdown-arrow-svgrepo-com-1-icon1"
              alt=""
              src="/dropdownarrowsvgrepocom-1.svg"
            />
          </div>
          <div className="links-container2">
            <a className="agencies">Agencies</a>
            <img
              className="dropdown-arrow-svgrepo-com-1-icon2"
              alt=""
              src="/dropdownarrowsvgrepocom-1.svg"
            />
          </div>
          <div className="links-container3">
            <a className="resources">Resources</a>
            <img
              className="dropdown-arrow-svgrepo-com-1-icon3"
              alt=""
              src="/dropdownarrowsvgrepocom-1.svg"
            />
          </div>
          <div className="links-container4">
            <a className="about-us">About Us</a>
            <img
              className="dropdown-arrow-svgrepo-com-1-icon4"
              alt=""
              src="/dropdownarrowsvgrepocom-1.svg"
            />
          </div>
        </div>
        <div className="search-benchmark">
          <div className="benchmark-link">
            <a className="benchmark-report-2024">Benchmark Report 2024</a>
          </div>
          <div className="search-link">
            <img
              className="search-svgrepo-com-1-icon"
              alt=""
              src="/searchsvgrepocom-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
