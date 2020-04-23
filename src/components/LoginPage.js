import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../logo.svg'
import '../App.css';
import { setAuthedUser } from '../actions/authedUser'

class LoginPage extends Component {
  state = {
    user: '',
  }

  handleChange = (e) => {
    this.setState ({user: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { user } = this.state
    const { dispatch } = this.props

    dispatch(setAuthedUser(user))
  }

  render () {
    return (
      <div className='container'>
        <div className='login-title'>
          <h1>Welcome to the would you rather app!</h1>
          <br/>Please sign in to continue
        </div>
        <div className='container-content'>
          <img src={logo} className="App-logo" alt="logo" />
          Sign in
          <form onSubmit={this.handleSubmit}>
            <select value={this.state.user} onChange={this.handleChange}>
              <option value='' disabled>
                Please select an user from this list
              </option>
              {this.props.users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
              }
            </select>
            <button type='submit' className='btn login-btn'
              disabled={ this.state.user === '' }>
              Sign in
            </button>
          </form>
        </div>
      </div>
      )
  }
}

function mapStateToProps ({users}) {
  return {users: Object.values(users)}
}

export default connect(mapStateToProps)(LoginPage)
