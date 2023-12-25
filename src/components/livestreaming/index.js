import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import LiveStreamApp from './LiveStreamApp'; // Updated import for the main app component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <LiveStreamApp /> {/* Updated component reference */}
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
