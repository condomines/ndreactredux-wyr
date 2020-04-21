import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initData } from '../actions/initData'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Userbox from './Userbox'
import Home from './Home'
import Question from './Question'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

  componentDidMount () {
    console.log('mounted')
    this.props.dispatch(initData())
  }
  render () {
    return (
      <Router>
        <div>
          <LoadingBar />
          {this.props.isLoading
            ? <div>Loading...</div>
            :
              <div>
                <Nav />
                <Userbox />
                <h3 className="center">My App</h3>
                  <Route path='/' exact component={Home} />
                  <Route path='/question/:id' component={QuestionPage} />
                  <Route path='/add' component={NewQuestion} />
              </div>
          }
        </div>
      </Router>
      )
  }
}

function mapStateToProp ({authedUser}) {
  return {
    isLoading: authedUser === null
  }
}

export default connect(mapStateToProp)(App)