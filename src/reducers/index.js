import { combineReducers } from 'redux'
import { users } from './users'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading'
import authedUser from './authedUser'

export default combineReducers ({
  users,
  questions,
  authedUser,
  loadingBar: loadingBarReducer})

