import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
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

  const cardStyle = {
    margin: '0 auto',
    float: 'none',
  };

  return (
    <div className='flex-container'>
      <div className='content'>
        <h1>Send Feedback.</h1>
        <h3>Your feedback improves experience.</h3>
        <Form onSubmit={handleSubmit} className="justify-content-center" style={cardStyle}>
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
            />
          </Form.Group>
          <div className="button-group">
            <Button variant="primary" type="submit" className="justify-content-center">
              Send
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FeedbackForm;
