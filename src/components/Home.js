import React, { Component } from 'react'
import Question from './Question'
import { connect } from 'react-redux'

class Home extends Component {

  render () {
    const questionsPending = this.props.questionsIds
    const questionsDone = this.props.questionsIds

    return (
      <div>
        <h3>Pending questions</h3>
        <ul>
            {questionsPending.length > 0 && questionsPending.map( (questionId) => (
          <li key={questionId}>
              <Question id={questionId} />
          </li>

              ))}
        </ul>
        {/*
        <h3>Answered questions</h3>
        <ul>
            {questionsDone.length > 0 && questionsDone.map( (question) => (
          <li>
              <Question id={question.id} />
          </li>
              ))}
        </ul>
      */}
      </div>
    )
  }
}

function mapStateToProp ({questions}) {
  return {
    questionsIds: Object.keys(questions)
  }
}

export default connect(mapStateToProp)(Home)
