import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleVoteQuestion } from '../actions/questions.js'
import Option, { OPTION_ONE, OPTION_TWO } from './Option'

class QuestionPage extends Component {
  state = {
    votingOption: '',
  }

  handleChange = (event) => {
    this.setState({
      votingOption: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { dispatch, id } = this.props
    const { votingOption } = this.state
    dispatch(handleVoteQuestion(id, votingOption))
    this.setState(()=>({
      votingOption: '',
    }))
  }

  optionInput = (option) => (
    <label>
      <input
        type="radio"
        name="votingOption"
        value={option}
        onChange={this.handleChange}
        selected={this.state.votingOption === {option}
                    ? "selected"
                    : ""}/>
      {this.props.question[option].text}
    </label>
  )

  render () {
    const { question, author, answer } = this.props

    if (question === null)
      return <h3>404 - Not found - This poll doesn't exist</h3>

    if (answer) {
      return (
      <div className="result">
        <h3 className="question-author">{author.name} ask:</h3>
        <div className="question-result">
          <img src={author.avatarURL} alt={`avatar of ${author.name}`}
            className="avatar" />
          <div className='result-content'>
             <b>Results: </b>
             <Option question={question} option={OPTION_ONE} answer={answer}/>
             <Option question={question} option={OPTION_TWO} answer={answer}/>
          </div>
        </div>
      </div>
      )
    }

    return (
      <div>
        <h3 className="question-author">{author.name} ask:</h3>
        <div className="question">
          <img src={author.avatarURL} alt={`avatar of ${author.name}`}
            className="avatar" />
          <form className="question-info" onSubmit={this.handleSubmit}>
            <b>Would you rather...</b>
            {this.optionInput(OPTION_ONE)}
            {this.optionInput(OPTION_TWO)}
            <button
                className='btn'
                type='submit'
                disabled={this.state.votingOption === ""}
                >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users, questions, authedUser}, props) {
  const { id } = props.match.params
  const question = questions[id] ? questions[id] : null
  const author = question ? users[question.author] : null
  const answer = (Object.keys(users[authedUser].answers).includes(id))
    ? users[authedUser].answers[id]
    : null

  return {
    id,
    question,
    author,
    answer
  }
}

export default connect(mapStateToProps)(QuestionPage)