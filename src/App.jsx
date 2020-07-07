import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/HomeRoute";
import HackathonCreateRoute from "./components/HackathonCreateRoute";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Link className="App-link" to="/">
                        HEMA
                    </Link>
                </header>
                <Switch>
                    <Route path="/hackathon/create">
                        <HackathonCreateRoute />
                    </Route>
                    <Route path="/users">
                        <h1>users</h1>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
