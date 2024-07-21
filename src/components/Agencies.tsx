import PropTypes from "prop-types";
import "./Agencies.css";

const Agencies = ({ className = "" }) => {
  return (
    <section className={`agencies1 ${className}`}>
      <div className="agencies-container">
        <div className="agencies-image" />
        <div className="agencies-content">
          <div className="top-agencies">
            <img
              className="agencies-card-one-image"
              loading="lazy"
              alt=""
              src="/rectangle-5625@2x.png"
            />
            <div className="agencies-card-one-content">
              <div className="agencies-card-one-heading">
                <h1 className="influencer-marketing-agencies">
                  Influencer Marketing Agencies
                </h1>
                <div className="view-a-collection">
                  View a collection of the globe's leading marketing agencies
                  all in one place
                </div>
              </div>
              <div className="view-agencies">
                <div className="view-agencies1">View Agencies</div>
                <img
                  className="view-agencies-child"
                  alt=""
                  src="/line-18.svg"
                />
              </div>
            </div>
          </div>
          <div className="agencies-card-two">
            <div className="agencies-card-two-content">
              <div className="agencies-card-two-heading">
                <h1 className="influencer-marketing-platforms">
                  Influencer Marketing Platforms
                </h1>
                <div className="all-the-leading">
                  All the leading influencer marketing platforms rated and
                  reviewed
                </div>
              </div>
              <div className="view-platforms">
                <div className="view-platforms1">View Platforms</div>
                <img
                  className="view-platforms-child"
                  alt=""
                  src="/line-18.svg"
                />
              </div>
            </div>
            <img
              className="bottom-image-icon"
              loading="lazy"
              alt=""
              src="/rectangle-5626@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="line-parent">
        <div className="frame-item" />
        <div className="frame-inner" />
      </div>
    </section>
  );
};

Agencies.propTypes = {
  className: PropTypes.string,
};

export default Agencies;
