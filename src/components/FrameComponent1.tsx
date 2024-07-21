import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`top-agencies-wrapper ${className}`}>
      <div className="top-agencies1">
        <div className="top-agencies-title">
          <h1 className="top-agencies2">Top Agencies</h1>
        </div>
        <div className="agencies2">
          <div className="modash-agency">
            <FrameComponent2
              rectangle5627="/rectangle-5627-4@2x.png"
              modash="Modash"
              tenYearsAgoIfSomeoneSaidT="Ten years ago, if someone said to you, “Content creators for me were kind of the beacon of hope; they were the people I looked up to,” you’d pause for a second before asking, “What’s a content creator?” But social media...
"
            />
            <FrameComponent2
              rectangle5627="/rectangle-5627-5@2x.png"
              modash="Ubiquitous"
              tenYearsAgoIfSomeoneSaidT="While TikTok had reached “most downloaded app” status by 2018, it wasn’t until 2020 when the social network really became enmeshed in our cultural fabric. TikTok was a major way that people connected during the pandemic as..."
            />
            <FrameComponent2
              rectangle5627="/rectangle-5627-6@2x.png"
              modash="InsightIQ"
              tenYearsAgoIfSomeoneSaidT="Overview The world of influencer marketing is awash with platforms of all kinds: There are influencer marketplaces, influencer relationship platforms, analytics platforms, and end-to-end suites that cover just about everything. What the..."
            />
            <FrameComponent2
              rectangle5627="/rectangle-5627-7@2x.png"
              modash="Skeepers"
              tenYearsAgoIfSomeoneSaidT="Overview Influencer marketing, for all its 21st century bells and whistles, is just a more advanced, programmatic form of word-of-mouth marketing. Word-of-mouth marketing, of course, is just a more programmatic version of actual..."
            />
          </div>
          <div className="see-all-articles2">
            <div className="link3">
              <div className="see-all-agencies">See All Agencies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
