import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './pages/App';
import reportWebVitals from './routes/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();