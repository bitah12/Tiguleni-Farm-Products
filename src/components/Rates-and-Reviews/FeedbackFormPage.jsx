import React from 'react';
import FeedbackForm from './FeedbackForm';
import { useNavigate } from 'react-router-dom';

const FeedbackFormPage = ({ addFeedback }) => {
  const navigate = useNavigate();

  const handleFeedbackSubmit = (feedback) => {
    addFeedback(feedback);
    navigate('ProductBuyNowPage');
  };

  return (
    <FeedbackForm onSubmit={handleFeedbackSubmit} />
  );
};

export default FeedbackFormPage;
