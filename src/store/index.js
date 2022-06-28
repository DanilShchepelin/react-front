import { createContext } from "react";
import { AuthStore } from "./AuthStore";

export const MainStoreContext = createContext(null);

export class MainStore {
    constructor() {
        this.AuthStore = new AuthStore();
    }
}