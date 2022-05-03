import FeebackItem from "./FeedbackItem";
import PropTypes from "prop-types";

//🎈 destructuring and passing the props from another component.

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>;
  }

  //🎈 Getting the props as a State from App and passing throgh this in order to do the map()
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeebackItem
          key={item.id}
          pizza={item}
          //!We are passing as a props the handleDelete into the Feedbackitem and we getting that prop and calling on the click in order to get the ID.Items are into the APP.js stored into a useState. {handleDelete} => props
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  fedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
