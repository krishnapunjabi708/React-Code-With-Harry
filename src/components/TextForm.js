import React from 'react';
import { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleClearClick=()=>{     
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleColorChange=()=>{   
        let newText = text;    
        document.getElementById("myBox").style.color="blue";
        
        setText(newText);
        props.showAlert("Text Color Changed to Blue","success");
    }
    const handleCopy=()=>{   
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard","success");
    }
    const handleExtraSpaces=()=>{   
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }   
    return (
        <>
        <div className='container'>
            <h1 className='mb-4' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label "></label>
                <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8" value={text} onChange={handleOnChange} ></textarea>
                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleColorChange}>Change Color</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters  </p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h2>Preview</h2>
                <p >{text.length>0 ? text : "Nothing to preview"}</p>
                </div>

        </div>
        </>
    )
}