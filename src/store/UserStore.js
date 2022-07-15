const { makeObservable, flow, observable } = require('mobx');

export class UserStore {
    @observable currentUserData = null;
    @observable allUsers = null;

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

    @flow *getAllUsers() {
        const response = yield fetch('http://localhost:8081/api/users', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include',
        });

        if (response.status >= 400) {
            console.log('err')
        }

        const {users} = yield response.json();
        this.allUsers = users; 
    }

    @flow *updateUser(name, lastName) {
        yield fetch('http://localhost:8081/api/users/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include',
            body: JSON.stringify({
                name, lastName
            })
        })
    }

    @flow *deleteUser(userId) {
        yield fetch('http://localhost:8081/api/users/delete/' + userId, {
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include'
        });
    }
}