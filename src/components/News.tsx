import CardsContainer from "./CardsContainer";
import PropTypes from "prop-types";
import "./News.css";

const News = ({ className = "" }) => {
  return (
    <section className={`news ${className}`}>
      <div className="news-container">
        <h1 className="latest-news">Latest News</h1>
        <div className="news-content">
          <div className="top-news">
            <div className="news-card-one">
              <img
                className="card-one-image"
                loading="lazy"
                alt=""
                src="/rectangle-5624@2x.png"
              />
              <h1 className="essential-tools-for">
                7 Essential Tools for Forward-Thinking Creative Agencies
              </h1>
              <div className="creative-agencies-work">
                Creative agencies work on many projects simultaneously, making
                advanced project management tools necessary. However, many
                agencies are still…
              </div>
            </div>
            <div className="read-more">
              <div className="read-more1">Read More</div>
              <img className="read-more-child" alt="" src="/line-18.svg" />
            </div>
          </div>
          <div className="news-card-two">
            <CardsContainer
              cardImages="/rectangle-5623@2x.png"
              trendsShapingTheFutureOfC="8 Trends Shaping the Future of Creative Agencies"
              creativeAgenciesHaveAnInd="Creative agencies have an indisputable role as change agents amid evolving consumer behavior and client expectations. Agencies stretch…"
            />
            <CardsContainer
              cardImages="/rectangle-5623-1@2x.png"
              trendsShapingTheFutureOfC="Ultimate Guide to Choosing Tools for Digital Marketing Agencies..."
              creativeAgenciesHaveAnInd="In the throes of 2024’s digital marketing agency arena, the tremors from OpenAI’s latest conference have sent a…"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

News.propTypes = {
  className: PropTypes.string,
};

export default News;
