import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {

  render () {
    console.log('props', this.props)
    return (
      <div>
        {this.props.question.optionOne.text}
      </div>
      )
  }
}

function mapStateToProp ({questions}, {id} ) {
  const question = questions[id]
  return {question}
}

export default connect(mapStateToProp)(Question)
