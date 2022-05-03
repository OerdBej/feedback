import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  //!Here are stored the items from the component into the state
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    // console.log("App", id);

    //! a function and we filter for the item of ID is not equal to the equal to the ID that is passing is going to return an array with the one that is being deleted. Because we are using the setFeedback state.
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <div className='container'>
        {/* Whenever the states changes its changes also the props that we are passing throgh  */}
        <FeedbackStats feedback={feedback} />
        {/* 🎈 passing the state as a props. passing a props as a function to the other props */}
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
