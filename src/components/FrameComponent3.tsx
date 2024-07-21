import HashtagGenerator from "./HashtagGenerator";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`rectangle-container ${className}`}>
      <div className="rectangle-div" />
      <div className="popular-tools">
        <div className="popular-tool-title">
          <h1 className="popular-tool">{`Popular Tool `}</h1>
          <div className="see-all-articles1">
            <div className="link2">
              <div className="see-alal-tools">See Alal Tools</div>
            </div>
          </div>
        </div>
        <div className="instagram-hashtag-generator1">
          <HashtagGenerator
            rectangle5627="/rectangle-5627@2x.png"
            instagramHashtagGenerator="Instagram Hashtag Generator"
            rectangle56271="/rectangle-5627-1@2x.png"
            instagramHashtagGenerator1="Instagram Sponsored Post Calculator"
          />
          <HashtagGenerator
            rectangle5627="/rectangle-5627-2@2x.png"
            instagramHashtagGenerator="YouTube Money Calculator (earnings estimator)"
            rectangle56271="/rectangle-5627-3@2x.png"
            instagramHashtagGenerator1="TikTok Money Calculator"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
