import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index2.css'
import { Provider } from 'react-redux'
import Store from './love/bRedux/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <App />
        </Provider>
    </React.StrictMode>
);
