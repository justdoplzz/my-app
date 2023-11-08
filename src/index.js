import React from 'react';
import ReactDOM from 'react-dom';
import AttendanceBook from './chapter10/AttendanceBook';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AttendanceBook/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
