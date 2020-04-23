import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestionAnswer, saveQuestion } from '../utils/api.js'

export const RECEIVE_DATA = 'RECEIVE_DATA'
export const VOTE_QUESTION = 'VOTE_QUESTION'
export const NEW_QUESTION = 'NEW_QUESTION'

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

export function handleNewQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    // Need new id before updating the state, couldn't be optimistic
    dispatch(showLoading())
    const { authedUser } = getState()
    const question = {author: authedUser, optionOneText, optionTwoText}

    saveQuestion( question )
      .then( (res) => {
        dispatch(newQuestion(res))
        dispatch(hideLoading())
      })
  }
}

function newQuestion (question) {
  return ({
    type: NEW_QUESTION,
    question
  })
}
