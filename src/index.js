import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './Welcome';
import Post from "./Post"
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';

const post = {
  title : "Hey Title",
  author : "Erik Yang",
  body : `This is the body of body of React`,
}

ReactDOM.render(
  <Post 
  title={post.title} 
  author={post.author}
  body={post.body}
  input={post.input}
  />,
  document.getElementById('ro'),
);

ReactDOM.render(
  <React.StrictMode>
    {/* additiona help to spot error in dev mode */}
    <Welcome name={"Erik"} 
    location={"Irvine"}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
