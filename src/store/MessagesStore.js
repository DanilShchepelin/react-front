const {makeObservable, observable, flow} = require('mobx');

export class MessagesStore {
    @observable dialogsData = null;
    @observable messagesData = null;

    constructor() {
        makeObservable(this);
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
}

