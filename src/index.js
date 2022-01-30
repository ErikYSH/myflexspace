import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './components/Welcome';
import Post from "./components/Post"
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';

const post = {
  title : "Hey Title",
  author : "Erik Yang",
  body : `This is the body of body of React`,
}
  
  ReactDOM.render(
    <React.StrictMode>
    {/* additiona help to spot error in dev mode */}
    <Welcome name={"Erik"} 
    location={"Irvine"} />
  
  <Post 
  title={post.title} 
  author={post.author}
  body={post.body}
  input={post.input}
  />

  </React.StrictMode>,
  document.getElementById('root')
  // document.getElementById('ro'),
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
