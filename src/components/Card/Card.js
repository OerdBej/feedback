import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  //todo💡 This is a conditional Class with the props that is passed into the Card component as an object destructuring.
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  //! This is a conditional style to check the Card:

  return (
    <div
      className='card'
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
};

//! in order to use it here, we need to import it to the beggining.
Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
