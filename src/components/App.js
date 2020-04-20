import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initData } from '../actions/initData'
import LoadingBar from 'react-redux-loading'
import Home from './Home'

class App extends Component {

  componentDidMount () {
    console.log('mounted')
    this.props.dispatch(initData())
  }
  render () {
    return (
      <div>
        <LoadingBar />
        {this.props.isLoading
          ? <div>Loading...</div>
          :
            <div>
              <div>My Nav</div>
              <div>User login</div>
              <h3 className="center">My App</h3>
              <Home />
            </div>
        }
      </div>
      )
  }
}

function mapStateToProp ({authedUser}) {
  return {
    isLoading: authedUser === null
  }
}

export default connect(mapStateToProp)(App)