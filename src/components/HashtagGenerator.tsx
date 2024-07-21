import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import "./HashtagGenerator.css";

const HashtagGenerator = ({
  className = "",
  rectangle5627,
  instagramHashtagGenerator,
  rectangle56271,
  instagramHashtagGenerator1,
}) => {
  return (
    <div className={`hashtag-generator ${className}`}>
      <FrameComponent4
        rectangle5627="/rectangle-5627@2x.png"
        instagramHashtagGenerator="Instagram Hashtag Generator"
      />
      <FrameComponent4
        rectangle5627="/rectangle-5627-1@2x.png"
        instagramHashtagGenerator="Instagram Sponsored Post Calculator"
      />
    </div>
  );
};

HashtagGenerator.propTypes = {
  className: PropTypes.string,
  rectangle5627: PropTypes.string,
  instagramHashtagGenerator: PropTypes.string,
  rectangle56271: PropTypes.string,
  instagramHashtagGenerator1: PropTypes.string,
};

export default HashtagGenerator;
