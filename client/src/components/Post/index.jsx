import React from 'react';
import Dopeness from "../Dopeness"
import {useState} from "react";
import useLocalStorage from '../../useLocalStorage';

function Post(props){
    const [name, setName] = useLocalStorage('insert name here')

    return (
        <div>
            <h2 className= "new">{props.title}</h2>
            <h2 className= "new">{props.author}</h2> 
            <h2 className= "new">{props.body} </h2>

            <input 
            type="text"
            value={name}
            onChange = {(e) => setName(e.target.value)}
           />
            
            <Dopeness />
            </div>
    )
}

export default Post;