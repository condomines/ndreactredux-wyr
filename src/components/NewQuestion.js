import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleNewQuestion } from '../actions/questions.js'

class NewQuestion extends Component {

  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleChange = (e) => {
    e.persist()

    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state

    this.props.dispatch(handleNewQuestion(optionOne, optionTwo))

    this.setState({
      optionOne: '',
      optionTwo: '',
      toHome: true
    })
  }

  render() {

    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }

    const { optionOne, optionTwo } = this.state
    const disabled = (optionOne === '' || optionTwo === '')

    return (
      <div className='container newquestion-container'>
            <div className='container-title'>

        <h3>Create new question</h3>
        </div>
        <div className='container'>
          Complete the question
          <br/>
          <br/>
          <b>Would you rather...</b>
          <form onSubmit={this.handleSubmit}>
            <input type='textarea'
              name='optionOne'
              className='text-area'
              value={optionOne}
              onChange={this.handleChange}
              placeholder='Enter option one text here'
              />
            <div className='separator'>OR</div>
            <input type='textarea'
              name='optionTwo'
              className='text-area'
              value={optionTwo}
              onChange={this.handleChange}
              placeholder='Enter option two text here'
              />
            <button type='submit'
              className='btn newquestion-btn'
              disabled={disabled}>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(NewQuestion)
