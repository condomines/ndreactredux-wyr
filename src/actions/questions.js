import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestionAnswer } from '../utils/api.js'

export const RECEIVE_DATA = 'RECEIVE_DATA'
export const VOTE_QUESTION = 'VOTE_QUESTION'

export function receiveQuestions (questions) {
  return ({
    type: RECEIVE_DATA,
    questions
  })
}

function voteQuestion (authedUser, qid, answer) {
  return ({
    type: VOTE_QUESTION,
    authedUser,
    qid,
    answer
  })
}

export function handleVoteQuestion (qid, answer) {
  return (dispatch, getState) => {
    // No way to revert the change, so no optimistic UI update
    const { authedUser } = getState()
    dispatch(showLoading())
    console.log('calling save api: ',{authedUser, qid, answer} )
    saveQuestionAnswer({authedUser, qid, answer})
      .then(
          dispatch(voteQuestion(authedUser, qid, answer))
        )
      .catch(
          (e) => console.log(e)
        )
      .finally(dispatch(hideLoading()))
  }
}
