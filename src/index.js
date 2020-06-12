import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider as ThemeContex } from './context/ContextTheme'


ReactDOM.render(

  <React.StrictMode>
    <ThemeContex>
      <App />

    </ThemeContex>

  </React.StrictMode>,
  document.getElementById('root')
);


