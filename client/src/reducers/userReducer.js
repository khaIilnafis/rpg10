export default function reducer(state={
    isLoggedIn: false,
    logoutPending: false,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_USER": {
        return {...state, fetching: true}
      }
      case "FETCH_USER_PENDING":{
          return {...state, fetching: true}
      }
      case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          ...action.payload,
        }
      }
      case "LOGIN_USER_PENDING":{
        return {
            ...state,
            isLoggedIn: false,
            fetching: true,
            fetched: false,
            ...action.payload
        }
    }
      case "LOGIN_USER_FULFILLED":{
          return {
              ...state,
              isLoggedIn: true,
              fetching: false,
              fetched: true,
              ...action.payload.user
          }
      }
      case "LOGIN_USER_REJECTED":{
        return {
            ...state,
            isLoggedIn: false,
            fetching: false,
            fetched: false,
            ...action.payload.response.data
        }
    }
      case "REGISTER_USER_PENDING":{
        return {
            ...state,
            isLoggedIn: false,
            fetching: true,
            fetched: true,
            ...action.payload
        }
      }
      case "REGISTER_USER_FULFILLED":{
        return {
            ...state,
            isLoggedIn: true,
            fetching: false,
            fetched: false,
            ...action.payload
        }
      } 
      case "REGISTER_USER_REJECTED":{
        return {
            ...state,
            isLoggedIn: false,
            fetching: false,
            fetched: false,
            ...action.payload.response.data
        }
      }
      
      case "LOGOUT_USER":{
        return {
          ...state,
          logoutPending: true,
          ...action.payload
        }
      }
      case "LOGOUT_USER_PENDING":{
        return {
          ...state,
          logoutPending: true,
          isLoggedIn: false,
          ...action.payload
        }
      }
      case "LOGOUT_USER_FULFILLED":{
        return {
          ...state,
          logoutPending: false,
          isLoggedIn: false,
          ...action.payload
        }
      }
      default:
        return state
    }
}