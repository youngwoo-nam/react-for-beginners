import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from '../delete file/App_#6';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 
// StrictMode : 개발 단계에서 사용


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*
  리액트 애플리케이션의 성능 지표를 측정하고 보고 하는 기능 (예: 로딩 시간, 반응성)

  const sendToAnalytics = (metric) => {
    // Google Analytics에 메트릭 전송
    console.log(metric);
  };
  reportWebVitals(sendToAnalytics);

  reportWebVitals(console.log);
*/
// reportWebVitals();