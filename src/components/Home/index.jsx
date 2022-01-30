// HOME COMPONENTS
import React from "react";
import Welcome from '../Welcome';
import Post from "../Post"

const post = {
    title : "Hey Title",
    author : "Erik Yang",
    body : `This is the body of body of React`,
  }

function Home(props) {
	return (
		<div>
			<Welcome name={"Teri"} location={"San Francisco"} />
			<Post title={post.title} author={post.author} body={post.body} />
		</div>
	);
}

export default Home;