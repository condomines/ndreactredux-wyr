import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

// todo: useless??
export const INIT_DATA = 'INIT_DATA'

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

