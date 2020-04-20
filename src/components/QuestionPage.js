import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPage extends Component {
  render () {
    const { id, question, author } = this.props
    return (
      <div>
        <h4>{author.name} ask:</h4>
              <div className="question">

        <img src={author.avatarURL} alt={`avatar of ${author.name}`}
          className="avatar" />
          <div className="question-info">
            <h3>Would you rather...</h3>
            <form>
              <input type="radio" name="votingOption" value="optionOne"/>
              {question.optionOne.text}
              <br/>
              <input type="radio" name="votingOption" value="optionTwo"/>
              {question.optionTwo.text}
              <br/><input type="submit" value="submit"/>
          <button
              className='btn'
              type='submit'
              >
            Submit
          </button>            </form>
          </div>
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