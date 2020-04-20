import { RECEIVE_DATA } from '../actions/users'

export function users (prevState = {}, action) {
  switch(action.type) {
    case  RECEIVE_DATA :
      return {...prevState, ...action.users}
    default:
      return prevState
  }
}
