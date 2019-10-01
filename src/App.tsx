import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/signup">
                        <Auth />
                    </Route>
                    <Route>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        );
    }
};