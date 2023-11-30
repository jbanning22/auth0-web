import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";

function App() {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={"http://localhost:4100/home"}
        >
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/" element={<Login />} />
                    </Routes>
                </div>
            </Router>
        </Auth0Provider>
    );
}

export default App;
