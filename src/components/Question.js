import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component {

  render () {
    const { question, id } = this.props

    return (
      <Link to={`/question/${id}`}>
        <div>
          {question.optionOne.text}
        </div>
      </Link>
      )
  }
}

function mapStateToProp ({questions}, {id} ) {
  const question = questions[id]
  return {question}
}

export default connect(mapStateToProp)(Question)
