import cris3 from  "../assets/img/cris3.jpg"
import PropTypes from "prop-types";

export const Cris3 = ( {className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={cris3} alt="foto cristiano" className="image" />
  </div>
  )
}

Cris3.propTypes = {
  className: PropTypes.string
};
