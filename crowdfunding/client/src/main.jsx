import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Sepolia } from "@thirdweb-dev/chains";

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider 
        activeChain={ Sepolia }
        clientId='b833f407aba15aa92ef612d3304a44ea' >
        <Router>
            <App />
        </Router>
    </ThirdwebProvider>
)