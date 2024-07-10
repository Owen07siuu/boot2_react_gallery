import cris6 from  "../assets/img/cris6.jpg"
import PropTypes from "prop-types";

export const Cris6 = ( {className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={cris6} alt="foto cristiano" className="image" />
    </div>
  )
}

Cris6.propTypes = {
  className: PropTypes.string};
