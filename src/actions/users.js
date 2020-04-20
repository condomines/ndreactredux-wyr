export const RECEIVE_DATA = 'RECEIVE_DATA'

export function receiveUsers (users) {
  return ({
    type: RECEIVE_DATA,
    users
  })
}


