import PropTypes from "prop-types";
import "./CardsContainer.css";

const CardsContainer = ({
  className = "",
  cardImages,
  trendsShapingTheFutureOfC,
  creativeAgenciesHaveAnInd,
}) => {
  return (
    <div className={`cards-container ${className}`}>
      <img
        className="card-images-icon"
        loading="lazy"
        alt=""
        src={cardImages}
      />
      <div className="card-contents">
        <h2 className="trends-shaping-the">{trendsShapingTheFutureOfC}</h2>
        <div className="creative-agencies-have">
          {creativeAgenciesHaveAnInd}
        </div>
      </div>
    </div>
  );
};

CardsContainer.propTypes = {
  className: PropTypes.string,
  cardImages: PropTypes.string,
  trendsShapingTheFutureOfC: PropTypes.string,
  creativeAgenciesHaveAnInd: PropTypes.string,
};

export default CardsContainer;
