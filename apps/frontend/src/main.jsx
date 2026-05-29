import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3500,
        style: {
          background: 'rgba(8, 16, 36, 0.92)',
          color: '#eaf2ff',
          border: '1px solid rgba(62, 240, 255, 0.18)',
          boxShadow: '0 24px 80px rgba(3, 8, 32, 0.45)',
        },
      }}
    />
  </React.StrictMode>,
);
