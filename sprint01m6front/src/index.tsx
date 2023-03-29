import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { UserProvider } from './contexts/userContext';
import { ModalProvider } from './contexts/modalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

