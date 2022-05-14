import React from "react";
import Card from "./Card/Card";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ pizza, handleDelete }) => {
  return (
    <Card>
      <div className='num-display'>{pizza.rating}</div>
      <button onClick={() => handleDelete(pizza.id)} className='close'>
        <FaTimes color='green' fontSize={20}></FaTimes>
      </button>
      <div className='text-display'>
        {pizza.text} 💡: {pizza.bio}
      </div>
    </Card>
  );
};


export default FeedbackItem;
