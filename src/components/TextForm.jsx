import React, { useState } from "react";

const TextForm = (props) => {

    // const [text, setText] = useState("Enter text here");
    const [text, setText] = useState("");

    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        const newText = "";
        setText(newText);
        props.showAlert("Cleared the text!", "success");
    }

    const handleCopy = () => {
        const text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        const newText = text.split(/[ ] +/);
        setText(newText.join(" "));
        props.showAlert("Cleared the extra spaces!", "success");
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#042743" }}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Click to clear text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Click to copy text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Click to remove extra spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}

export default TextForm;