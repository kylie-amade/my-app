import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Weather from "./Weather";
import reportWebVitals from './reportWebVitals';
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Weather />
    <div className="git">
      This project was coded by{" "}
      <a href="https://github.com/kylie-amade/my-app">Kylie Amade</a> .
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
