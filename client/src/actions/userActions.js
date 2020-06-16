import AUTH from '../utilities/auth-service';

export function loginUser(user){
    return function(dispatch){
        dispatch({type: "LOGIN_USER_START", payload: AUTH.logIn(user)});
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