import AUTH from '../utilities/auth-service';

export function loginUser(user){
    return function(dispatch){
        dispatch({type: "LOGIN_USER_START", payload: AUTH.logIn(user)})
        .catch(error => {
            console.log(error);
        });
    }
}
export function registerUser(user){
    return function(dispatch){
        dispatch({type: "REGISTER_USER", payload: AUTH.register(user)})
        .catch(error => {
            console.log(error);
        });
    }
}
export function logOutUser(){
    return function(dispatch){
        dispatch({type: "LOGOUT_USER", payload: AUTH.logOut()});
    }
}
export function fetchUser() {
    return function(dispatch){
        dispatch({type: 'FETCH_USER', payload: AUTH.getUser()})
    }
  }
  
  export function setUserName(name) {
    return {
      type: 'SET_USER_NAME',
      payload: name,
    }
  }