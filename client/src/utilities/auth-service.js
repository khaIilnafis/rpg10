import axios from 'axios';

export default {
    login: function(user){
        // this.isAuthenticated = true;
        return axios.post('/api/auth/login', user);
    },
    register: function(){
        return true
    },
    isAuthenticated: false,
    getUser: function(){
        return JSON.parse(localStorage.getItem("user"));
    },
    logOut: function(){
        // localStorage.removeItem("user");
        this.isAuthenticated = false;
    }
}