import React from "react";

const FeedbackItem = ({ pizza }) => {
  return (
    <div className='card'>
      <div className='num-display'>{pizza.rating}</div>
      <div className='text-display'>
        {pizza.text}💡: {pizza.bio}
      </div>
    </div>
  );
};

export default FeedbackItem;
