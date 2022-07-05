const { makeObservable, flow, observable } = require('mobx');

export class UserStore {
    @observable currentUserData = null;

    constructor() {
        makeObservable(this);
    }

    @flow *getUserData() {
        const response = yield fetch('http://localhost:8081/api/users/user', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include',
        });

        if (response.status >= 400) {
            console.log('err');
            return;
        }
        const {user} = yield response.json();
        this.currentUserData = user;
    }
}