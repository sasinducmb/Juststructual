import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const HeroSliderOneSingle = ({ data }) => {
  return (
    <div className="single-slider slider-height-1 bg-none">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-5 col-12 col-sm-6">
            <div className="slider-content slider-animated-1">
              <h3 className="animated">{data.title}</h3>
              <h1 className="animated">{data.subtitle}</h1>
              <div className="slider-btn btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7 col-12 col-sm-6">
            <div className="slider-single-img slider-animated-1">
              <img
                className="animated img-fluid"
                src={process.env.PUBLIC_URL + data.image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderOneSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderOneSingle;
