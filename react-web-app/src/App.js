import React from 'react';
import { useState, useEffect } from 'react';
import CardComponent from './postCard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>React Web App</h1>
      <h3>by Juan Zurita</h3>
      <h6>
        This is an example of a web app which will let you comment 
        and like a post which is in a feed. When interacting with a specific
        post, it will unfold showing comments and allowing you to write in there.
        </h6>
        <div>
          <CardComponent title="card1" />
        </div>
    </div>
  );
}

export default App;
