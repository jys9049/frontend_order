import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async'


const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <React.StrictMode>
      <HelmetProvider>
        <RecoilRoot>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          <ToastContainer />
        </RecoilRoot>
      </HelmetProvider>
    </React.StrictMode>
  )
} else {
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <RecoilRoot>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          <ToastContainer />
        </RecoilRoot>
      </HelmetProvider>
    </React.StrictMode>
  );

}
