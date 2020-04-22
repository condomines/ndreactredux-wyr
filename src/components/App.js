import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { initData } from '../actions/initData'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Home from './Home'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import LoginPage from './LoginPage'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

  componentDidMount () {
    this.props.dispatch(initData())
  }

  render () {
    return (
      <Router>
        <LoadingBar />
        {this.props.isLoading
          ? <div>Loading...</div>
          : <div className='main'>
              <Nav />
              {!this.props.isLoggedIn
                ? <LoginPage />
                : <Fragment>
                    <Route path='/' exact component={Home} />
                    <Route path='/question/:id' component={QuestionPage} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                  </Fragment>
              }
            </div>
        }
      </Router>
      )
  }
}

function mapStateToProp ({authedUser, questions, users}) {
  return {
    isLoading: questions === null || users === null,
    isLoggedIn: authedUser !== null
  }
}

export default connect(mapStateToProp)(App)
