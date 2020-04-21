import React, { Component } from 'react'
import Question from './Question'
import { connect } from 'react-redux'

class Home extends Component {

  render () {
    const { questionsPending, questionsDone } = this.props

    return (
      <div>
        <h3>Pending questions</h3>
        <ul>
          {questionsPending.length > 0 && questionsPending.map( (question) => (
          <li key={question[0]}>
            <Question id={question[0]} />
          </li>
          ))}
        </ul>
        <h3>Answered questions</h3>
        <ul>
          {questionsDone.length > 0 && questionsDone.map( (question) => (
          <li key={question[0]}>
            <Question id={question[0]} />
          </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProp ({questions, authedUser, users}) {
  const sortedQuestions = Object.entries(questions)
    .sort((a,b)=>questions[b[0]].timestamp - questions[a[0]].timestamp)

  const questionsPending = sortedQuestions
    .filter((elem) => (
      !Object.keys(users[authedUser].answers).includes(elem[1].id)))

  const questionsDone = sortedQuestions
    .filter((elem) => (
      Object.keys(users[authedUser].answers).includes(elem[1].id)))

  return {
    questionsIds: Object.keys(questions),
    questionsPending: questionsPending,
    questionsDone: questionsDone
  }
}

export default connect(mapStateToProp)(Home)
