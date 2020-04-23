import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function initData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(
        ({questions, users}) => {
          dispatch(receiveUsers(users))
          dispatch(receiveQuestions(questions))
          dispatch(hideLoading())
        })
  }
}

