
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import './index.css';
import App from './App.jsx';
import store from './store/store.jsx';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider></Provider>
  </StrictMode>
);



