import React from "react";
import Title from "./components/Title.js";
import NavigationButtons from "./components/NavigationButtons.js";
import Footer from "./components/Footer.js";
import './css/index.css';

const App = () => {
    return(
        <>
        <div className="top-bar">
            <Title />
            <NavigationButtons />
        </div>
        <div className="footer">
            <Footer />
        </div>
        </>
    );
};

export default App;