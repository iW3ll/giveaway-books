// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import your main component
import App from './App'; // Assumes your main component file is named `App.jsx`

// Render the main component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
