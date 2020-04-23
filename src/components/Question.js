import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component {

  render () {
    const { question, id , author} = this.props

    return (
      <div className='container-question'>
        <div className='container-title'>
          {author.name} aks:
        </div>
        <div className='content-question'>
          <img src={author.avatarURL} alt={`Avatar of ${author.name}`}
            className='avatar' />
          <div className='question'>
            <b>Would you rather...</b>
            <br/>...{question.optionOne.text}...
            <Link to={`/question/${id}`} className='link-question'>
              View poll
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProp ({questions, users}, {id} ) {
  const question = questions[id]
  const author = question ? users[question.author] : null

  return {question, author}
}

export default connect(mapStateToProp)(Question)
