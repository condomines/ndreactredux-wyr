import React from 'react'

export default function User (props) {
  const { avatarURL, name, answers, questions} = props.user
  const totalQuestions = questions.length
  const totalAnswers = Object.keys(answers).length
  const score = totalQuestions + totalAnswers

  return (
    <div className='container-user'>
      <div className='container-avatar'>
        <img src={avatarURL} alt={`Avatar of ${name}`}
          className='avatar' />
      </div>
      <div className='user-info'>
        <div><b>{name}</b></div>
        <div className='answer-line'>
          <div>Answered questions:</div>
          <div>{totalAnswers}</div>
        </div>
         <div className='answer-line'>
          <div>Created questions:</div>
          <div>{totalQuestions}</div>
        </div>
      </div>
      <div className='score'>
        <div className='score-title'>Score</div>
        <div className='score-value'>{score}</div>
      </div>
    </div>
    )
}
