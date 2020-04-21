import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleVoteQuestion } from '../actions/questions.js'
import { Redirect } from 'react-router-dom'

class QuestionPage extends Component {
  state = {
    votingOption: '',
    toHome: false
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
      toHome: true,
    }))
  }

  render () {
    const { toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    const { id, question, author } = this.props

    return (
      <div>
        <h3 className="question-author">{author.name} ask:</h3>
        <div className="question">
          <img src={author.avatarURL} alt={`avatar of ${author.name}`}
            className="avatar" />
          <form className="question-info" onSubmit={this.handleSubmit}>
               <h3>Would you rather...</h3>
               <label>
                 <input
                    type="radio"
                    name="votingOption"
                    value="optionOne"
                    onChange={this.handleChange}
                    selected={this.state.votingOption === "optionOne"
                                ? "selected"
                                : ""}/>
                  {question.optionOne.text}
                </label>
                <label>
                  <input
                    type="radio"
                    name="votingOption"
                    value="optionTwo"
                    onChange={this.handleChange}
                    selected={this.state.votingOption === "optionTwo"
                                ? "selected"
                                : ""}/>
                  {question.optionTwo.text}
                </label>
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

function mapStateToProps ({ users, questions}, props) {
  const { id } = props.match.params
  const question = questions[id]
  const authorId = question.author
  const author = users[authorId]

  return {
    id,
    question,
    author
  }
}

export default connect(mapStateToProps)(QuestionPage)