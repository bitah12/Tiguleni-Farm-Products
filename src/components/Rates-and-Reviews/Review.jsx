import React, { useState } from 'react';
import FeedbackForm from './FeedbackForm';
import SellerProfile from './SellerProfile';

const FeedbackManager = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (feedback) => {
    const newFeedback = {
      ...feedback,
      name: "Victor Magreta",
      profilePic: "https://via.placeholder.com/150",
      dateTime: new Date().toLocaleString()
    };
    setFeedbacks([...feedbacks, newFeedback]);
  };

  return (
    <div>
      <FeedbackForm onSubmit={addFeedback} />
      <SellerProfile feedbacks={feedbacks} />
    </div>
  );
};

export default FeedbackManager;
