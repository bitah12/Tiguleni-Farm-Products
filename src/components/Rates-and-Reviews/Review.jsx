import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackForm from './Components/FeedbackForm';
import SellerProfile from './Components/SellerProfile';


function Review() {
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
    <Router>
      <div className="Review">
        <Routes>
          <Route path="/feedback" element={<FeedbackForm onSubmit={addFeedback} />} />
          <Route path="/reviews" element={<SellerProfile feedbacks={feedbacks} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Review;
