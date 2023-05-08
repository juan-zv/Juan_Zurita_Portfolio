# Overview

This is a simple web page which uses a cloud database to create, read, update and delete information stored in the database. It is open to everyone who wants to interact with it and it does not require any authentication service 

The page uses a simple and basic structure. It consists of an index.html document with a "styles" folder which contains the css file to style the page, and a "scripts" folder which contains the JavaScript files to (1) interact with the DOM and (2) connect wiht the Cloud Database and interact with it. 

The purpose for this project is to demonstrate my ability to develop a simple web page with a basic interface which uses CRUD features and succesfully interacts with a cloud database known as Firestore.

[Software Demo Video](http://youtube.link.goes.here)

# Cloud Database

For this project, I'm using Firestore. Firestore is a cloud database provided by Firebase and Google Cloud. It is simple to use and handy for projects like this or for more complex ones.

This project makes use of a document-oriented database. This type of databases stores data as documents in collections. Each document can contain a set of key-value pairs. In this project, the collection is "People" and each document is an individual. Information for each individual is stored as pairs of Age and its value, ID and its value and Name and its value.

# Development Environment

- VSCode v.1.78.0
- HTML5
- CSS3

- JavaScript

I used Javascript to import the modules from the cloud database to the JavaScript document. This project does not use any framework or library other than the ones included in the firebase module or Vanilla JavaScript

# Useful Websites

- [Cloud Firestore Docs](https://firebase.google.com/docs/firestore)
- [JavaScript modules mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [W3Schools DOM Tutorial](https://www.w3schools.com/js/js_htmldom.asp)

# Future Work

- Add auth method 
- Add a framework to the project