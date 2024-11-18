import React from 'react';

const StarRating = ({ rating, setRating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={i <= rating ? 'star filled' : 'star'}
        onClick={() => setRating(i)}
      >
        &#9733;
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
