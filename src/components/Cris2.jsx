import cris2 from  "../assets/img/cris2.jpg"
import PropTypes from "prop-types";

export const Cris2 = ( {className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={cris2} alt="foto cristiano" className="image" />
    </div>
  )
}

Cris2.propTypes = {
  className: PropTypes.string
};
