import React, { Component } from 'react'
import Question from './Question'
import { connect } from 'react-redux'

class Home extends Component {
  state = {
    showPending: true
  }

  showPending(show) {
   this.setState((state)=>({showPending: show}))
  }

  questionList = (questions) => (
    <div className='questions-list'>
      <ul>
        {questions.length > 0 && questions.map( (question) => (
        <li key={question}>
          <Question id={question} />
        </li>
        ))}
      </ul>
    </div>
  )

  render () {
    const { questionsPending, questionsDone } = this.props
    const { showPending } = this.state

    return (
      <div className='container'>
      <div className='container-title'>
        <h3 className={showPending ? 'selected' : null}
            onClick={() => this.showPending(true)}>Unanswered questions</h3>
        <h3 className={!showPending ? 'selected' : ''}
            onClick={() => this.showPending(false)}>Answered questions</h3>
      </div>
        {showPending === true
          ? this.questionList(questionsPending)
          : this.questionList(questionsDone)
        }
      </div>
    )
  }
}

// From a questions object to a sorted array of entries
const sortQuestions = (questions) => (
  Object.entries(questions)
    .sort((a,b)=>questions[b[0]].timestamp - questions[a[0]].timestamp)
)

// From entries to a filtered array of ids
const filterAnswered = (questions, answersIds, answered = true) => (
  questions.filter((elem) => (
    answered
      ? answersIds.includes(elem[1].id)
      : !answersIds.includes(elem[1].id)
  )).map((e)=>e[0])
)

function mapStateToProp ({questions, authedUser, users}) {

  const sortedQuestions = sortQuestions(questions)
  const answersIds = Object.keys(users[authedUser].answers)

  const questionsPending = filterAnswered(sortedQuestions, answersIds, false)
  const questionsDone = filterAnswered(sortedQuestions, answersIds, true)

  return {
    questionsPending: questionsPending,
    questionsDone: questionsDone
  }
}

export default connect(mapStateToProp)(Home)
