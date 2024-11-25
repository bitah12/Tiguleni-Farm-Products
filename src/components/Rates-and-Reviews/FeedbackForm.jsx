import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import StarRating from './StarRating';
import './RatingAndReviews.css';

const FeedbackForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0 && review.trim() === '') {
      alert("Please, provide a rating or type your feedback before submitting.");
      return;
    }

    onSubmit({ rating, review });
    setRating(0);
    setReview('');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white-100'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
        <h1 className='text-2xl font-bold text-center text-blue-600'>Send Feedback.</h1>
        <h3 className='text-center text-gray-600 mb-4'>Your feedback improves experience.</h3>
        <Form onSubmit={handleSubmit} className="space-y-4">
          <Form.Group controlId="rating">
            <StarRating rating={rating} setRating={setRating} />
          </Form.Group>
          <Form.Group controlId="review">
            <Form.Control
              as="textarea"
              rows={3}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder='What is your comment?'
              className='w-full p-2 border border-gray-300 rounded'
            />
          </Form.Group>
          <div className="flex justify-center">
            <Button variant="primary" type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" link="FeedbackFormPage">
              Send
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FeedbackForm;
