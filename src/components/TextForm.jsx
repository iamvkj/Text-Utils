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
        document.getSelection().removeAllRanges();
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
                <h2 className="mb-3">{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === "dark" ? "white" : "#042743" }}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Click to clear text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Click to copy text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Click to remove extra spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").filter((e) => { return e.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((e) => { return e.length !== 0 }).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}

export default TextForm;