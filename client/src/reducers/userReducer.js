export default function reducer(state={
    user: {
      isLoggedIn: false,
      logoutPending: false,
    },
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
          user: action.payload,
        }
      }
      case "LOGIN_USER_START_FULFILLED":{
          return {
              ...state,
              isLoggedIn: true,
              fetching: false,
              fetched: true,
              user: action.payload.user
          }
      }
      case "REGISTER_USER_PENDING":{
        return {
            ...state,
            isLoggedIn: false,
            fetching: true,
            fetched: true,
            user: action.payload
        }
      }
      case "REGISTER_USER_FULFILLED":{
        return {
            ...state,
            isLoggedIn: true,
            fetching: false,
            fetched: false,
            user: action.payload
        }
      } 
      case "REGISTER_USER_REJECTED":{
        return {
            ...state,
            isLoggedIn: false,
            fetching: false,
            fetched: false,
            auth: action.payload.response.data
        }
      }
      case "LOGIN_USER_START_REJECTED":{
        return {
            ...state,
            isLoggedIn: false,
            fetching: false,
            fetched: false,
            auth: action.payload.response.data
        }
    }
      case "LOGOUT_USER":{
        return {
          ...state,
          logoutPending: true,
          user: action.payload
        }
      }
      case "LOGOUT_USER_PENDING":{
        return {
          ...state,
          logoutPending: true,
          isLoggedIn: false,
          user: action.payload
        }
      }
      case "LOGOUT_USER_FULFILLED":{
        return {
          ...state,
          logoutPending: false,
          isLoggedIn: false,
          user: action.payload
        }
      }
      default:
        return state
    }
}