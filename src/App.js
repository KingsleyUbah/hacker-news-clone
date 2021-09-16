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
                <img src={logo} alt="" />
              </div>

              <h1 className="logo">Hacker News</h1>
              <h3><a href="">new</a></h3> <span className="stroke">|</span>
              <h3><a href="">past</a></h3> <span className="stroke">|</span>
              <h3><a href="">comments</a></h3> <span className="stroke">|</span>
              <h3><a href="">ask</a></h3> <span className="stroke">|</span>
              <h3><a href="">show</a></h3> <span className="stroke">|</span>
              <h3><a href="">job</a></h3> <span className="stroke">|</span>
              <h3><a href="">submit</a></h3> <span className="stroke">|</span>
          </div>

          <div className="part-2">
              <h3><a href="">login</a></h3>
          </div>
        </div>

          <Posts />
    </div>
  </div>
  );
}

export default App;
