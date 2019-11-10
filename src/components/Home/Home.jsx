import React from 'react';
import { Redirect } from "react-router-dom";
import { observer } from 'mobx-react';
import { StoreContext } from '../../stores/Auth';

@observer
export default class App extends React.Component {
    static contextType = StoreContext;

    render() {
        if (!this.context.authStore.loggedIn && location.pathname !== '/login' && location.pathname !== '/signup') {
            return <Redirect to='/login' />;
        }

        return (
            <div>
                Home page
            </div>
        );
    }
};
