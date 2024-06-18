import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { AppProvider } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <App />
    </AppProvider>
);
