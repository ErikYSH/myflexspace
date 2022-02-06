// HOME COMPONENTS
import React from "react";
import Welcome from "../Welcome";
import Post from "../Post";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import NavBar from "../NavBar"

const post = {
  title: "Hey Title",
  author: "Erik Yang",
  body: `This is the body of body of React`,
};

function Home(props) {
  return (
    <div>
		<NavBar />
	<Routes>
		<Route path="/" element={<Welcome name={"Erik"} location={"Irvine"} />}></Route>
		<Route path="/posts" element ={
			<Post
			title={post.title}
			author={post.author}
			body={post.body}
			input={post.input}
		  />}>

		  </Route>
	</Routes>

    </div>
  );
}

export default Home;
