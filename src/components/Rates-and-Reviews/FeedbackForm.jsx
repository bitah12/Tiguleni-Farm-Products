import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import StarRating from './StarRating';
import { Link, useParams } from 'react-router-dom';
import './RatingAndReviews.css';

const FeedbackForm = ({ onSubmit }) => {
  const { productId } = useParams();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0 && review.trim() === '') {
      alert("Please, provide a rating or type your feedback before submitting.");
      return;
    }

    const accessToken = localStorage.getItem('token');
    if (!accessToken) {
      alert('Please log in to submit feedback.');
      return;
    }

    const feedbackData = {
      rating,
      review,
      productId,
    };

    try {
      const response = await fetch('http://localhost:3000/ratesandreviews/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(feedbackData),
      });

      if (!response.ok) {
        alert('Failed to submit feedback. Please try again.');
      }
      alert('Feedback submitted successfully!');
      const responseData = await response.json();
      console.log('Feedback submitted:', responseData);

      onSubmit({ rating, review });

      setRating(0);
      setReview('');
      
    } catch (err) {
      
    }
  };

  return (
    <div className='flex-container'>
      <div className='content'>
        <h1>Send Feedback.</h1>
        <h3>Your feedback improves experience.</h3>
        <Form onSubmit={handleSubmit} className="justify-content-center">
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
            <Button variant="primary" type="submit">
              Send
            </Button>
            <Link to="/reviews" className="btn btn-link">
              See Reviews...
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FeedbackForm;
