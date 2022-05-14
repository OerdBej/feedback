import { useState } from "react";
import FeedbackData from "./Data/FeedbackData";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);


  const addFeedback = (newFeedback) => {
    console.log(newFeedback)

  }

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id)); 
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />

        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      
      </div>

    </>
  );
}

export default App;

