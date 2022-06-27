import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
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

    const removeBodyClassess = () => {

        document.body.classList.remove("bg-dark");
        document.body.classList.remove("bg-light");
        document.body.classList.remove("bg-primary");
        document.body.classList.remove("bg-danger");
        document.body.classList.remove("bg-success");
        document.body.classList.remove("bg-warning");
    }

    const toggleMode = (cls) => {

        removeBodyClassess();

        document.body.classList.add("bg-" + cls)

        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#042743";
            showAlert("Dark mode has been enabled", "success");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled", "success");
        }
    }

    return (
        <>
            {/* <Navbar />  For Default props */}
            {/* <Navbar title="Text Utils" /> */}

            <Navbar title="Text Utils" aboutTextUtils="About" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <Routes>
                <Route exact path="/" element={<TextForm
                    showAlert={showAlert}
                    heading="Try Text Utils - Word counter, Character counter, Remove extra spaces"
                    mode={mode}
                />} />
                <Route exact path="about" element={<About mode={mode} />} />
            </Routes>
        </>
    );
}

export default App;