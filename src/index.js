import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './assets/css/main.css'
import './assets/css/noscript.css'

import App from './App';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
