import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  rectangle5627,
  modash,
  tenYearsAgoIfSomeoneSaidT,
}) => {
  return (
    <div className={`frame-div ${className}`}>
      <img
        className="component-item"
        loading="lazy"
        alt=""
        src={rectangle5627}
      />
      <div className="modash-content">
        <div className="modash-name">
          <h2 className="modash">{modash}</h2>
          <div className="ten-years-ago">{tenYearsAgoIfSomeoneSaidT}</div>
        </div>
        <div className="view-details">
          <div className="view-details1">View Details</div>
          <img className="view-details-child" alt="" src="/line-18-5.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  rectangle5627: PropTypes.string,
  modash: PropTypes.string,
  tenYearsAgoIfSomeoneSaidT: PropTypes.string,
};

export default FrameComponent2;
