const { makeObservable, reaction, flow, observable, action, computed } = require('mobx');

export class AuthStore {
    @observable currentUser = localStorage.getItem('SessionID');

    constructor() {
        makeObservable(this);

        reaction(
            () => this.currentUser,
            (currentUser) => {
                if (currentUser) {
                    localStorage.setItem('SessionID', currentUser);
                } else {
                    localStorage.removeItem('SessionID');
                }
            }
        )
    }

    @flow *getUser(email, password) {
        const response = yield fetch('http://localhost:8081/api/login/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        });

        if (response.status >= 400) {
            console.log('err');
            return;
        }
        const {sessionID} = yield response.json();
        this.currentUser = sessionID;
    }

    @action logout() {
        fetch('http://localhost:8081/api/login/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include'
        });
    }

    @computed get isLoggedIn() {
        return Boolean(this.currentUser);
    }
}

