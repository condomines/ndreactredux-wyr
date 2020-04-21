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
    const question = {
      optionOne: this.state.optionOne,
      optionTwo: this.state.optionTwo
    }
    this.props.dispatch(handleNewQuestion(this.state.optionOne,this.state.optionTwo))

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

    return (
      <div className='container'>
        <h3>Create new question</h3>
        <div className='container'>
          Complete the question
          <b>Would you rather...</b>
          <form onSubmit={this.handleSubmit}>
            <input type='textarea'
              name='optionOne'
              className='text-area'
              value={this.state.optionOne}
              onChange={this.handleChange}
              />
            <div className='separator'>OR</div>
            <input type='textarea'
              name='optionTwo'
              className='text-area'
              value={this.state.optionTwo}
              onChange={this.handleChange}
              />
            <button type='submit'
              className='btn'>
              submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}



export default connect()(NewQuestion)