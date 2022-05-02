import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";

function App() {
  //🎈 Using the state and store in that the FeedBackData file.

  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className='container'>
        {/* 🎈 passing the state as a props */}
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
