import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Userbox extends Component {

  handleClick = (e) => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
  }

  render () {
    const { user } = this.props

    if (!user)
      return null

    return (
      <div className='userbox'>
        Hello {user.name}
        <img src={user.avatarURL} alt={`Avatar of ${user.name}`}
          className='avatar-userbox' />
        <Link to='/' onClick={this.handleClick}>
          Logout
        </Link>
      </div>
      )
  }
}

function mapStateToProps ({ authedUser, users}) {
  return ({
    user: users[authedUser]
  })
}

export default connect(mapStateToProps)(Userbox)
