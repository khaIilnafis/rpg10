import axios from 'axios';

export default {
    logIn: function(user){
        return new Promise(function(resolve, reject){
            axios.post('/api/auth/login', user)
            .then(res => {
                localStorage.setItem("user", JSON.stringify(res.data.user))
                localStorage.setItem("isAuth", true);
                return resolve(res.data);
            })
            .catch(err => {
                return reject(err);
            })
        })
    },
    register: function(){
        return true
    },
    isAuthenticated: function(){
        return localStorage.getItem("isAuth");
    },
    getUser: function(){
        return new Promise(function(resolve, reject){
            let user = JSON.parse(localStorage.getItem("user"));
            if(user){
                return resolve(user)
            }else{
                return resolve("No user");
            }
        })
    },
    logOut: function(){
        localStorage.removeItem("user");
        localStorage.removeItem("isAuth");
    }
}