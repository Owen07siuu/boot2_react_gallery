import cris1 from  "../assets/img/cris1.jpg"
import PropTypes from "prop-types";

export const Cris1 = ( {className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={cris1} alt="foto cristiano" className="image" />
    </div>
  )
}
Cris1.propTypes = {
  className: PropTypes.string
};

