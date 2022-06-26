import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

const App = () => {

    const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
    const [alert, setAlert] = useState("");

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#042743";
            showAlert("Dark mode has been enabled", "success");
            document.title = "Text Utils - Dark Mode";
            // setInterval(() => {
            //     document.title = "Text Utils is amazing Mode";
            // }, 2000);
            // setInterval(() => {
            //     document.title = "Install Text Utils now";
            // }, 1500);
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled", "success");
            document.title = "Text Utils - Light Mode";
        }
    }

    return (
        <>
            {/* <Navbar title="Text Utils" aboutTextUtils="About Text Utils" /> */}
            {/* <Navbar />  For Default props */}
            <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            {/* <Routes>
                <Route exact path="/" element={<TextForm
                    showAlert={showAlert}
                    heading="Enter the text analyze below"
                    mode={mode}
                />} />
                <Route exact path="about" element={<About />} />
            </Routes> */}
            <TextForm showAlert={showAlert} heading="Enter the text analyze below" mode={mode} />
        </>
    );
}

export default App;