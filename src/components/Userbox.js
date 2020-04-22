import React, { Component } from 'react'
// TODO: link o navlink ???
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Userbox extends Component {
  render () {
    const { user } = this.props

    if (!user)
      return null

    return (
      <div className='userbox'>
        Hello {user.name}
        <img src={user.avatarURL} alt={`Avatar of ${user.name}`}
          className='avatar-userbox' />
        <NavLink to='/' exact activeClassName='active'>
          Logout
        </NavLink>
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
