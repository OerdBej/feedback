const FeedbackStats = ({ feedback }) => {
  return (
    //! this lines comes from passing the data to the state, and passing the state as a props for this component. In this way, having the feedback.length its going to update automatically also the colon of the review session.
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: 10</h4>
    </div>
  );
};

export default FeedbackStats;
