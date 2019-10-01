import React from 'react';
import axios from 'axios';

type State = {
    email: string,
    username: string,
    password: string
}

type InputNames = 'email' | 'username' | 'password';

export default class App extends React.Component<{}, State> {
    state: State = {
        email: '',
        username: '',
        password: ''
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('/signup', this.state);
    }

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const value = target.value;
        const name: InputNames = target.name as InputNames;
        const newState = { [name]: value } as any;
        this.setState(newState);
    }

    render() {
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
                <label> Username:
                    <input
                        name='username'
                        type='text'
                        onChange={this.handleInputChange}
                        value={this.state.username}
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
