import FeebackItem from "./FeedbackItem";


const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>;
  }


  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeebackItem
          key={item.id}
          pizza={item}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};



export default FeedbackList;
