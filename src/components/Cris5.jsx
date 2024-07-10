import cris5 from  "../assets/img/cris5.jpg"
import PropTypes from "prop-types";

export const Cris5 = ( {className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={cris5} alt="foto cristiano" className="image" />
    </div>
  )
}

Cris5.propTypes = {
  className: PropTypes.string
};
