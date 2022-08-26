import React from "react";
import { nanoid } from "nanoid";

const WordGuess = (props) =>{
    const word = props.myWords;
    
    const cells = word.map(val =>{
        const id = nanoid();
        return (
            <div key={nanoid()}>

              { props.won ? <input
                         key = {id}
                         id = {nanoid()}
                         type = "text"
                        
                         className= {`text-2xl h-10 w-10 bg-gray-500 text-center text-white`}/> :
                         <input onChange = {(e)=>{
                        props.handleChange(e,word.indexOf(val),id)
                             }}
                         key = {id}
                         id = {nanoid()}
                         type = "text"
                         value ={val} 
                         className= {`text-2xl h-10 w-10 bg-gray-500 text-center text-white`}/>  }
            </div>
                     
        )
    })



    return (
        <div className="bg-gray-200 flex-1 flex flex-col items-center justify-start">
            <div>
                <p className="text-2xl text-green-800 font-bold my-2">HANGMAN</p>
            </div>
            <div className="flex gap-2 flex-wrap justify-center my-2">
                {cells}
            </div>
            <button onClick = {props.restart} className="my-5 bg-gray-800 px-2 py-1 text-cyan-200 hover:bg-gray-600 rounded">RESTART</button>
        </div>
    )
}

export default WordGuess;