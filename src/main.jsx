// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { RouterProvider } from "react-router-dom";
// import { router } from "./routes";
// import './index.css';
// import App from './App.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router}>
//       <App />
//     </RouterProvider>
//   </StrictMode>
// );


// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

