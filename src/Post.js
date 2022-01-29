import React from 'react';

function Post(props){
    return (
        <div>
            <h1 className= "new">{props.title}</h1>
            <h1 className= "new">{props.author}</h1> 
            <h1 className= "new">{props.body} </h1>
            <input id={"inputs"}></input>
        </div>
    )
}

export default Post;