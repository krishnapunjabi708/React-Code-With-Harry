import React from 'react';
import { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} ></textarea>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            </div>
        </div>
    )
}