import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class LeaderBoard extends Component {
  render () {
    return (
      <div className='container'>
        <ul>
          {this.props.users.map((user)=>(
            <li key={user.id}>
              <User user={user} />
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
    users: Object.values(users).sort((a,b)=>(score(b) - score(a)))
  })
}

export default connect(mapStateToProp)(LeaderBoard)
