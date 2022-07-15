const {makeObservable, observable, flow, computed, reaction, action} = require('mobx');
const {io} = require('socket.io-client');

export class MessagesStore {
    @observable dialogsData = null;
    @observable messagesData = null;
    @observable dialog = null;

    constructor() {
        makeObservable(this);

        this.socket = io('http://localhost:8081', { transports: ['websocket'] });
        reaction(
            () => this.dialog,
            (dialog) => {
                if (dialog) {
                    localStorage.setItem('dialog', dialog.id);
                } else {
                    localStorage.removeItem('dialog');
                }
            }
        )
    }

    @flow *getDialogs() {
        const response = yield fetch('http://localhost:8081/api/messages/dialogs', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include'
        });

        if (response.status >= 400) {
            console.log('err dialogs');
            return;
        }

        const {dialogs} = yield response.json();
        this.dialogsData = dialogs;
    };

    @flow *getMessages(userTwoId) {
        const response = yield fetch('http://localhost:8081/api/messages/messages/' + userTwoId, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include'
        });

        if (response.status >= 400) {
            console.log('err messages');
            return;
        }
        const {messages} = yield response.json();

        this.messagesData = messages;

        this.socket.on('receive message', data => {
            this.messagesData.push({text: data.text, userTwoId: data.userTwoId})
        })
    };

    @flow *addNewMessage(text, userTwoId) {
        yield fetch('http://localhost:8081/api/messages/addMessage/' + userTwoId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include',
            body: JSON.stringify({ text })
        });

        this.socket.emit('send message', {text, userTwoId})
    }

    @flow *createChat(userTwoId) {
        yield fetch('http://localhost:8081/api/messages/createChat/' + userTwoId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include'
        });
    }

    @flow *getDialog(userTwoId) {
        const response = yield fetch('http://localhost:8081/api/messages/dialog/' + userTwoId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include'
        });

        if (response.status >= 400) {
            console.log('err messages');
            return;
        }

        const {dialog} = yield response.json();

        this.dialog = dialog;
    }
}

