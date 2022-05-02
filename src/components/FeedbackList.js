import FeebackItem from "./FeedbackItem";
//🎈 destructuring and passing the props from another component.

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>;
  }

  //🎈 Getting the props as a State from App and passing throgh this in order to do the map()
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeebackItem key={item.id} pizza={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
