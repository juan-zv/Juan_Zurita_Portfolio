import React from 'react';
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
        <CardComponent
          someone="Alice Smith"
          datePublished="May 15, 2023"
          title="Responsive Web Design"
          text="Learn how to create responsive web designs using media queries and CSS flexbox. This tutorial covers the basics of responsive design principles and demonstrates how to build a responsive layout that adapts to different screen sizes."
        />

        <CardComponent
          someone="Bob Johnson"
          datePublished="May 18, 2023"
          title="Introduction to JavaScript"
          text="Get started with JavaScript programming! This tutorial provides an introduction to the fundamentals of JavaScript, including variables, data types, control structures, functions, and more. By the end of the tutorial, you'll have a solid foundation in JavaScript programming."
        />

        <CardComponent
          someone="Charlie Brown"
          datePublished="May 20, 2023"
          title="Building a RESTful API with Node.js"
          text="Learn how to build a RESTful API using Node.js and Express.js. This tutorial guides you through the process of setting up a server, handling routes and requests, connecting to a database, and implementing CRUD (Create, Read, Update, Delete) operations."
        />

        <CardComponent
          someone="Diana Wilson"
          datePublished="May 22, 2023"
          title="Introduction to React Hooks"
          text="Discover the power of React Hooks! This tutorial introduces the concept of hooks in React and demonstrates how to use useState, useEffect, and custom hooks to build functional components with state, side effects, and reusable logic."
        />
        </div>
    </div>
  );
}

export default App;
