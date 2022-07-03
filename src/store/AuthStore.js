const { makeObservable, reaction, flow, observable, action, computed } = require('mobx');

export class AuthStore {
    @observable currentSession = localStorage.getItem('SessionID');

    constructor() {
        makeObservable(this);

        reaction(
            () => this.currentSession,
            (currentSession) => {
                if (currentSession) {
                    localStorage.setItem('SessionID', currentSession);
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
        this.currentSession = sessionID;
    }

    // @flow *getCurrentUser() {
    //     const response = yield fetch('http://localhost:8081/api/login/currentUser', {
    //         method: 'GET',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*'
    //         },
    //         credentials: 'include'
    //     });

    //     if (response.status >= 400) {
    //         console.log('err');
    //         return;
    //     }
    //     const {user} = yield response.json();
    //     this.currentUser = user;
    // };

    @action logout() {
        fetch('http://localhost:8081/api/login/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include'
        });

        this.currentSession = null;
    }

    @computed get isLoggedIn() {
        return Boolean(this.currentSession);
    }
}

