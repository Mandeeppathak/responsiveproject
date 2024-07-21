import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ArticleItem.css";

const ArticleItem = ({
  className = "",
  component71,
  digitalMarketing,
  aDeepDiveIntoDigitalMarke,
  inTheEarlyDaysOfDigitalMa,
  propFlex,
  propMinWidth,
  propBackgroundColor,
}) => {
  const articleItemStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      backgroundColor: propBackgroundColor,
    };
  }, [propFlex, propMinWidth, propBackgroundColor]);

  return (
    <div className={`article-item ${className}`} style={articleItemStyle}>
      <img
        className="component-71-icon"
        loading="lazy"
        alt=""
        src={component71}
      />
      <div className="title-content">
        <div className="content">
          <div className="label">
            <div className="digital-marketing-wrapper">
              <div className="digital-marketing">{digitalMarketing}</div>
            </div>
          </div>
          <div className="title">
            <div className="a-deep-dive">{aDeepDiveIntoDigitalMarke}</div>
          </div>
          <div className="subtitle">
            <div className="in-the-early">{inTheEarlyDaysOfDigitalMa}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ArticleItem.propTypes = {
  className: PropTypes.string,
  component71: PropTypes.string,
  digitalMarketing: PropTypes.string,
  aDeepDiveIntoDigitalMarke: PropTypes.string,
  inTheEarlyDaysOfDigitalMa: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propBackgroundColor: PropTypes.any,
};

export default ArticleItem;
