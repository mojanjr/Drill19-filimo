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
      <div className="container1">
        <MovieList data={familial} title="خانوادگی" />
        <MovieList data={drama} title="درام" />
        <MovieList data={comedy} title="کمدی" />
      </div>
    </div>
    <div className="filimo-box">
      <div className="container2">
        <VideoList data={filimoBox1} title="فیلیمو‌باکس چیست؟" img src="https://www.filimo.com/assets/web/ui/img-23SjILqYCSaEPakKNJTVXw/campaigns/big-screen_v2/filimobox_colored.png"/>
        <VideoList data={filimoBox2} title="فیلیمو‌باکس چیست؟" />
        <VideoList data={filimoBox3} title="فیلیمو‌باکس چیست؟" />
      </div>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
