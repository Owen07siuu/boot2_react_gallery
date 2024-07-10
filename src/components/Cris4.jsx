import cris4 from  "../assets/img/cris4.jpg"
import PropTypes from "prop-types";

export const Cris4 = ( {className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={cris4} alt="foto cristiano" className="image" />
    </div>
  )
}

Cris4.propTypes = {
  className: PropTypes.string
};
