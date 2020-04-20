import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

// todo: useless??
export const INIT_DATA = 'INIT_DATA'

const UID = 'johndoe'

export function initData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(
        ({questions, users}) => {
          dispatch(receiveUsers(users))
          dispatch(receiveQuestions(questions))
          dispatch(setAuthedUser(UID))
          dispatch(hideLoading())
        })
  }
}

