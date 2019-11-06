import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

type State = {
    email: string,
    password: string,
    loggedIn: boolean,
}

type InputNames = 'email' | 'password';

export default class Signup extends React.Component<{}, State> {
    state: State = {
        email: '',
        password: '',
        loggedIn: false,
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('/api/auth/login', this.state)
            .then(r => {
                localStorage.setItem('token', r.data.accessToken);
                this.setState({ loggedIn: true });
            });
    }

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const value = target.value;
        const name: InputNames = target.name as InputNames;
        const newState = { [name]: value } as any;
        this.setState(newState);
    }

    render() {
        const { loggedIn } = this.state;
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
