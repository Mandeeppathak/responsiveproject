import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <footer className={`company-footer-parent ${className}`}>
      <div className="company-footer">
        <div className="company-info">
          <div className="company-links">
            <div className="company">Company</div>
            <div className="footer-links">
              <div className="articles3">Articles</div>
              <div className="platforms1">Platforms</div>
              <div className="agencies3">Agencies</div>
              <div className="resources1">Resources</div>
              <div className="contact-us1">Contact Us</div>
            </div>
          </div>
          <div className="popular-links">
            <div className="popular">Popular</div>
            <div className="marketing-categories">
              <div className="influencer-marketing-platforms1">
                Influencer Marketing Platforms
              </div>
              <div className="influencer-marketing-agencies1">
                Influencer Marketing Agencies
              </div>
              <div className="social-media-marketing">
                Social Media Marketing Platforms
              </div>
              <div className="social-media-agencies">Social Media Agencies</div>
              <div className="email-marketing-software">
                Email Marketing Software
              </div>
              <div className="digital-marketing-agencies">
                Digital Marketing Agencies
              </div>
            </div>
          </div>
          <div className="free-tools-parent">
            <div className="free-tools">Free Tools</div>
            <div className="tiktok-engagement-calculator-parent">
              <div className="tiktok-engagement-calculator">
                TikTok Engagement Calculator
              </div>
              <div className="instagram-calculator">Instagram Calculator</div>
              <div className="youtube-calculator">YouTube Calculator</div>
              <div className="glossary">Glossary</div>
              <div className="image-resizer">Image Resizer</div>
            </div>
          </div>
          <div className="other-links-parent">
            <div className="other-links">Other Links</div>
            <div className="cookie-policy-parent">
              <div className="cookie-policy">Cookie Policy</div>
              <div className="privacy-policy">Privacy Policy</div>
              <div className="terms-conditions">{`Terms & Conditions`}</div>
              <div className="affiliate-disclaimer">Affiliate Disclaimer</div>
              <div className="member-login">Member Login</div>
              <div className="authors-and-experts">Authors and Experts</div>
              <div className="agency-hub">Agency Hub</div>
            </div>
          </div>
        </div>
        <div className="company-footer-child" />
      </div>
      <div className="frame-wrapper">
        <div className="copyright-2024-influencermarke-parent">
          <div className="copyright-2024-influencermarke">
            Copyright 2024 influencermarketinghub. all rights reserved
          </div>
          <div className="social-media-icons-parent">
            <div className="social-media-icons">
              <img
                className="logo-twitter-icon"
                loading="lazy"
                alt=""
                src="/logotwitter.svg"
              />
            </div>
            <div className="social-media-icons1">
              <img
                className="logo-facebook-icon"
                loading="lazy"
                alt=""
                src="/logofacebook.svg"
              />
            </div>
            <div className="social-media-icons2">
              <img
                className="logo-instagram-icon"
                loading="lazy"
                alt=""
                src="/logoinstagram@2x.png"
              />
            </div>
            <div className="social-media-icons3">
              <img
                className="tiktok-svgrepo-com-1-icon"
                loading="lazy"
                alt=""
                src="/tiktoksvgrepocom-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
