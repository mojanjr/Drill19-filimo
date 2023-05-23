import React from 'react';
import ReactDOM from 'react-dom/client';
import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from './reportWebVitals';
import {MovieList} from './components/movieList';
import {VideoList} from './components/videoList';
import {familial, drama, comedy, filimoBox1, filimoBox2, filimoBox3} from './data';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <div className="MoviesRow">
        <MovieList data={familial} title="خانوادگی" />
        <MovieList data={drama} title="درام" />
        <MovieList data={comedy} title="کمدی" />
    </div>
    <div className="filimo-box">
        <VideoList data={filimoBox1} />
        <VideoList data={filimoBox2} />
        <VideoList data={filimoBox3} />
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
