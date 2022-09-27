import React from 'react'
import { useState } from 'react'


export default function CommentBox() {

const [text, setText] =useState("Enter text here");

const handleUpClick=()=>{

   console.log("button click ######################");
   let newText=text.toUpperCase();
   setText(newText);

}

const handleOnChange=(event)=>{

   
    setText(event.target.value);   
}
 
  return (
    <>
    <div className='container'>    
    <div className="mb-3">
    <label htmlFor="myBox">Enter the text to analyze below</label>
    <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange}  value={text} ></textarea>

    <button className="btn btn-primary"  onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Convert to Lowercase</button>
    </div>
    </div>
    
    <div className='container my-3'>  
     <h1>Your text summary</h1>
     <p>{text.split(" ").length} word {text.length} characters</p>
    </div>
    </>
  )
}
