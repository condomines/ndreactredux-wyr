export const RECEIVE_DATA = 'RECEIVE_DATA'

export function receiveQuestions (questions) {
  return ({
    type: RECEIVE_DATA,
    questions
  })
}

