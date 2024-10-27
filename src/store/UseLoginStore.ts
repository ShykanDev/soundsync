import { defineStore } from "pinia";

export const useLoginStore = defineStore('useLoginStore', {
    state: () => {
        return {
            loggedIn: true
        }
    },
    getters:{
        getIsLogin: (state) => {
            return state.loggedIn
        }
    },
    actions: {
        setIsLogin(loggedIn: boolean) {
            this.loggedIn = loggedIn
        }
    }
})