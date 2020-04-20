import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPage extends Component {
  render () {
    const { id, question } = this.props
    return (
      <div>
        <h3>My QuestionPage</h3>
        {id}
        {question.optionOne.text}
      </div>
    )
  }
}

function mapStateToProps ({ questions}, props) {
  const { id } = props.match.params
  return {
    id,
    question: questions[id]
  }
}

export default connect(mapStateToProps)(QuestionPage)