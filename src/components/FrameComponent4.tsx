import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({
  className = "",
  rectangle5627,
  instagramHashtagGenerator,
}) => {
  return (
    <div className={`rectangle-group ${className}`}>
      <img
        className="component-child"
        loading="lazy"
        alt=""
        src={rectangle5627}
      />
      <div className="instagram-hashtag-generator">
        {instagramHashtagGenerator}
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  rectangle5627: PropTypes.string,
  instagramHashtagGenerator: PropTypes.string,
};

export default FrameComponent4;
