const { makeObservable, flow, observable } = require('mobx');

export class PostsStore {
    @observable postsData = null;

    constructor() {
        makeObservable(this);
    }

    @flow *getUserPosts() {
        const response = yield fetch('http://localhost:8081/api/posts/userPosts', {
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
        const {post} = yield response.json();
        this.postsData = post;
    }

    @flow *addNewPost(text) {
        yield fetch('http://localhost:8081/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include',
            body: JSON.stringify({ text })
        });
    }


}