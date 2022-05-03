import PropTypes from "prop-types";

const FeedbackStats = ({ feedback }) => {
  //!calculating the ratings avg: loop through the ratings and

  let average =
    feedback.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    //! this lines comes from passing the data to the state, and passing the state as a props for this component. In this way, having the feedback.length its going to update automatically also the colon of the review session.
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
