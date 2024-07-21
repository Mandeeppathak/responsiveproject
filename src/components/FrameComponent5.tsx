import FrameComponent6 from "./FrameComponent6";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <header className={`content-bg-parent ${className}`}>
      <div className="content-bg" />
      <div className="content-container">
        <div className="top-links">
          <div className="top-left-links">
            <img
              className="top-left-links-child"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <img
              className="top-left-links-item"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <a className="influencer">Influencer</a>
          <a className="marketinghub">MarketingHub</a>
        </div>
        <FrameComponent6 />
      </div>
    </header>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
