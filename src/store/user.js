import { defineStore } from "pinia";
import axios from 'axios'

export const useUserStore = defineStore({
    id:'user',

    state: ( ) =>({
        user:{
            isAuthenticated:false,
            id:null,
        }
    }),


})