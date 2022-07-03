import { createContext } from "react";
import { AuthStore } from "./AuthStore";
import { UserStore } from "./UserStore";

export const MainStoreContext = createContext(null);

export class MainStore {
    constructor() {
        this.AuthStore = new AuthStore();
        this.UserStore = new UserStore(this.AuthStore);
    }
}