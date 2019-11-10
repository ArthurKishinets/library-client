import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { StoreContext } from '../../stores/Auth';
import { observer } from 'mobx-react';

type State = {
    email: string,
    password: string
}

type InputNames = 'email' | 'password';

@observer
export default class Signup extends React.Component<{}, State> {
    state: State = {
        email: '',
        password: ''
    };
    static contextType = StoreContext;

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            let resp = await axios.post('/api/auth/login', this.state)
            localStorage.setItem('token', resp.data.accessToken);
            this.context.authStore.loggedIn = true;
            this.context.authStore.token = resp.data.accessToken;
        } catch(e) {
            console.log(e);
        }
    }

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const value = target.value;
        const name: InputNames = target.name as InputNames;
        const newState = { [name]: value } as any;
        this.setState(newState);
    }

    render() {
        const { loggedIn } = this.context.authStore;
        if (loggedIn) {
            return <Redirect push to="/home" />;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label> Email:
                        <input
                            name='email'
                            type='text'
                            onChange={this.handleInputChange}
                            value={this.state.email}
                        />
                    </label>
                </div>
                <div>
                    <label> Password:
                        <input
                            name='password'
                            type='password'
                            onChange={this.handleInputChange}
                            value={this.state.password}
                        />
                    </label>
                </div>
                <input type='submit' value='Submit' />
            </form>
        );
    }
};
