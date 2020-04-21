import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class LeaderBoard extends Component {
  render () {
    return (
      <div className='container'>
        <ul>
          {this.props.users.map((user)=>(
            <li key={user[1].id}>
              <User user={user[1]} />
            </li>
          ))}
        </ul>
      </div>
      )
  }
}

const score = (user) => (
  Object.keys(user.answers).length + user.questions.length)

function mapStateToProp ({ users }) {
  return ({
    users: Object.entries(users).sort((a,b)=>(
    score(users[b[0]]) - score(users[a[0]])
    ))
  })
}

export default connect(mapStateToProp)(LeaderBoard)
