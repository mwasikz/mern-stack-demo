/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

*/
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(


  <App />

);


