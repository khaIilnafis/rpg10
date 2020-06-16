export default function reducer(state={
    user: {},
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
              fetching: false,
              fetched: true,
              user: action.payload.user
          }
      }
      default:
        return state
    }
}