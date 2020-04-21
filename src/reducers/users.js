import { RECEIVE_DATA } from '../actions/users'
// TODO: the action definition should be in a shared file??
import { VOTE_QUESTION } from '../actions/questions'

export function users (prevState = {}, action) {
  switch(action.type) {
    case  RECEIVE_DATA :
      return {...prevState, ...action.users}
    case  VOTE_QUESTION :
      const { authedUser, qid, answer } = action

      // Check if already voted
      if (Object.keys(prevState[authedUser].answers).includes(qid))
        return prevState

      const result = {...prevState,
        [authedUser]: {
          ...prevState[authedUser],
          answers: {
              ...prevState[authedUser].answers,
              [qid]: answer
              }
          }
        }
        // debugger
        return result
    default:
      return prevState
  }
}

