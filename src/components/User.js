import React from 'react'

export default function User (props) {
  const { avatarURL, name, answers, questions} = props.user
  const totalQuestions = questions.length
  const totalAnswers = Object.keys(answers).length
  const score = totalQuestions + totalAnswers

  return (
    <div className='container'>
      <div className='avatar'>
        <img src={avatarURL} alt={`Avatar of ${name}`}
          className='avatar' />
      </div>
      <div className='user-info'>
        {name}
        <br/>Answered questions: {totalAnswers}
        <br/>Created questions: {totalQuestions}
      </div>
      <div className='score'>
        Score
        <br/>{score}
      </div>
    </div>
    )
}
