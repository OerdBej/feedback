import React from "react";
import Card from "./Card/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ pizza, handleDelete }) => {
  return (
    //💡 passing a props to the card and adding the class to the Card component
    <Card>
      <div className='num-display'>{pizza.rating}</div>

      {/* //! We can have the id of each button because of the iteration, We are passing the handleDelete with the id of iteration to the feedback list as a PROPS in order to get the id. We are passing props with iteration of the id. So now we know what is been clicked at what moment. Items are into the APP.js stored into a useState*/}
      <button onClick={() => handleDelete(pizza.id)} className='close'>
        <FaTimes color='red' fontSize={20}></FaTimes>
      </button>
      <div className='text-display'>
        {pizza.text}💡: {pizza.bio}
      </div>
    </Card>
  );
};

FeedbackItem.prototype = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
