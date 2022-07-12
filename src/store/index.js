import { createContext } from "react";
import { AuthStore } from "./AuthStore";
import { UserStore } from "./UserStore";
import { PostsStore } from "./PostsStore";
import { MessagesStore } from "./MessagesStore";

export const MainStoreContext = createContext(null);

export class MainStore {
    constructor() {
        this.AuthStore = new AuthStore();
        this.UserStore = new UserStore(this.AuthStore);
        this.PostsStore = new PostsStore(this.AuthStore);
        this.MessagesStore = new MessagesStore(this.AuthStore);
    }
}