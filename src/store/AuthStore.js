const { makeObservable, reaction, flow, observable, action } = require('mobx');

export class AuthStore {
    @observable currentUser = fetch('http://localhost:8080/api/login/currentUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        credentials: 'include'
    });

    isLoggedIn = false;

    constructor() {
        makeObservable(this);

        reaction(
            () => this.currentUser,
            (currentUser) => {
                if (currentUser) {
                    this.isLoggedIn = true;
                } else {
                    this.isLoggedIn = false;
                }
            }
        )
    }

    @flow *getUser(email, password) {
        yield fetch('http://localhost:8080/api/login/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        });
    }

    @action logout() {
        fetch('http://localhost:8080/api/login/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include'
        });
    }
}
