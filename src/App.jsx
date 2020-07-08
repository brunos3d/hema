import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { Container } from "./styles";

import Home from "./components/HomeRoute";
import HackathonRoute from "./components/HackathonRoute";
import HackathonCreateRoute from "./components/HackathonCreateRoute";
import FaqRoute from "./components/FaqRoute";

function App() {
    return (
        <BrowserRouter>
            <Container>
                <header className="App-header">
                    <div className="rule">
                        <Link className="App-link" to="/">
                            <img className="hema-logo" src={`${process.env.PUBLIC_URL}/img/3-HEMA-BRANCO.png`} alt="hema-logo" />
                        </Link>
                    </div>
                </header>
                <Switch>
                    <Route path="/hackathons/create">
                        <HackathonCreateRoute />
                    </Route>
                    <Route path="/hackathons/:id/faq" component={FaqRoute} />
                    <Route path="/hackathons/:id" component={HackathonRoute} />
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;
