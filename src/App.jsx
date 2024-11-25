import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductBuyNowPage from './components/buyNow/ProductBuyNowPage';
import FeedbackFormPage from './components/Rates-and-Reviews/FeedbackFormPage';

const App = () => {
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
      <Routes>
        <Route path="/" element={<ProductBuyNowPage feedbacks={feedbacks} />} />
        <Route path="/feedback" element={<FeedbackFormPage addFeedback={addFeedback} />} />
      </Routes>
    </Router>
  );
};

export default App;
