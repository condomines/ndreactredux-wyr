import { RECEIVE_DATA } from '../actions/questions'

export default function questions (prevState = {}, action) {
  switch(action.type) {
    case  RECEIVE_DATA :
      return {...prevState, ...action.questions}
    default:
      return prevState
  }
}

