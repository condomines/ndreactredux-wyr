import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initData } from '../actions/initData'
import LoadingBar from 'react-redux-loading'

class App extends Component {

  componentDidMount () {
    console.log('mounted')
    this.props.dispatch(initData())
  }
  render () {
    return (
      <div>
        <LoadingBar />
        My App
      </div>
      )
  }
}

export default connect()(App)