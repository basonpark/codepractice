import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider desiredChainId={11155111}>
        <Router>
            <App />
        </Router>
    </ThirdwebProvider>
)