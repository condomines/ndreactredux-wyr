import { RECEIVE_DATA, VOTE_QUESTION, NEW_QUESTION } from '../actions/questions'

export default function questions (prevState = {}, action) {
  switch(action.type) {
    case  RECEIVE_DATA :
      return {...prevState, ...action.questions}
    case VOTE_QUESTION :
      const { authedUser, qid, answer } = action
      const question = prevState[qid]

      // Checks if the user already voted for this poll
      if (question['optionOne'].votes.includes(authedUser)
          || question['optionTwo'].votes.includes(authedUser)) {
        return prevState
      }

      const newVotes = question[answer].votes.concat(authedUser)

      const result = {
        ...prevState,
        [qid]: {
          ...question,
          [answer]: {...question[answer], votes: newVotes}
          }
        }
      // debugger
      return result
    case NEW_QUESTION :
      return {
        ...prevState,
        [action.question.id]: action.question
      }
    default:
      return prevState
  }
}

