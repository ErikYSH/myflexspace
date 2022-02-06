// HOME COMPONENTS
import React from "react";
import Welcome from "../../components/Welcome";
import Post from '../../components/Post'
import NavBar from "../../components/NavBar";
import HomiePage from "../HomiePage"
import { Routes, Route } from "react-router-dom";

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
          <Route path="/homies" element={<HomiePage />}>
              
          </Route>
	</Routes>

    </div>
  );
}

export default Home;
