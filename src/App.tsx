import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import axios from 'axios';
import { observer } from 'mobx-react';
import { StoreContext, authStore } from './stores/Auth';

@observer
export default class App extends React.Component {
    async componentDidMount() {
        try {
            let user = await axios.get('/api/profile');
            authStore.user = user;
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <StoreContext.Provider value={{ authStore }}>
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route>
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </StoreContext.Provider>
        );
    }
};