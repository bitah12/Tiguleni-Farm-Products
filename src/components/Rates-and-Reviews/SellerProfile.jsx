import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import StarRating from './StarRating';
import './RatingAndReviews.css';

const SellerProfile = ({ feedbacks = [] }) => { 
  const [visibleFeedbacks, setVisibleFeedbacks] = useState(3);
  const [showAllFeedbacks, setShowAllFeedbacks] = useState(false);

  const handleSeeMore = () => {
    setVisibleFeedbacks(feedbacks.length);
    setShowAllFeedbacks(true);
  };

  const handleSeeLess = () => {
    setVisibleFeedbacks(3);
    setShowAllFeedbacks(false);
  };

  const cardStyle = {
    margin: '0 auto',
    float: 'none',
  };

  return (
    <div>
      <h1>REVIEWS</h1>
      <div className='container'>
        <div id="reviews">
          <Row className="justify-content-center">
            {feedbacks.slice(0, visibleFeedbacks).map((feedback, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card style={cardStyle}>
                  <Card.Body>
                    <div className="feedback-header">
                      <img src={feedback.profilePic} alt="Profile" className="profile-pic" />
                      <div className="feedback-info">
                        <Card.Title>{feedback.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{feedback.dateTime}</Card.Subtitle>
                      </div>
                    </div>
                    <StarRating rating={feedback.rating} />
                    <Card.Text>{feedback.review}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {visibleFeedbacks < feedbacks.length && !showAllFeedbacks && (
            <Button variant="primary" onClick={handleSeeMore} className='seeMore'>
              See More
            </Button>
          )}
          {showAllFeedbacks && (
            <Button variant="secondary" onClick={handleSeeLess} className='seeLess'>
              See Less
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
