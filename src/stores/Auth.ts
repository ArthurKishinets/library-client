import React from 'react';
import { observable } from 'mobx';

export default class AuthStore {
    @observable loggedIn = false;
    @observable user = {};
    @observable token = null;
}

export const authStore = new AuthStore();

export const StoreContext = React.createContext({
    authStore
})
