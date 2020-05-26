import React from 'react';
import ReactDOM from 'react-dom';
//Se envuelve la aplicación con el tipo de enrutado que queremos utilizar
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

