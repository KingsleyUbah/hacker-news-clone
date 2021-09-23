import React from 'react';
import './App.css';
import Posts from './components/Posts';
import logo from './hacker-news.svg'

function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="header flex">
          <div className="part-1 flex">
              <div className="image">
                <img src={logo} alt="Image For Hacker News" />
              </div>

              <h1 className="logo">Hacker News</h1>
              <h3><a href="https://news.ycombinator.com/newest">new</a></h3> <span className="stroke">|</span>
              <h3><a href="https://news.ycombinator.com/front">past</a></h3> <span className="stroke">|</span>
              <h3><a href="https://news.ycombinator.com/newcomments">comments</a></h3> <span className="stroke">|</span>
              <h3><a href="https://news.ycombinator.com/ask">ask</a></h3> <span className="stroke">|</span>
              <h3><a href="https://news.ycombinator.com/show">show</a></h3> <span className="stroke">|</span>
              <h3><a href="https://news.ycombinator.com/job">job</a></h3> <span className="stroke">|</span>
              <h3><a href="https://news.ycombinator.com/submit">submit</a></h3> <span className="stroke">|</span>
          </div>

          <div className="part-2">
              <h3><a href="https://news.ycombinator.com/login">login</a></h3>
          </div>
        </div>

          <Posts />
    </div>
  </div>
  );
}

export default App;
