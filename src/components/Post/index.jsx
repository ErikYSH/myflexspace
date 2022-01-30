import React from 'react';
import Dopeness from "../Dopeness"

function Post(props){
    return (
        <div>
            <h2 className= "new">{props.title}</h2>
            <h2 className= "new">{props.author}</h2> 
            <h2 className= "new">{props.body} </h2>
            <input id={"inputs"}></input>
            <div>
                <Dopeness />
            </div>
        </div>
    )
}

export default Post;