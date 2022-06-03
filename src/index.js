import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.css';
import App from './pages/App';
import reportWebVitals from './services/test/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();