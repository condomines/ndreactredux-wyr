import React from 'react'

export const OPTION_ONE = 'optionOne'
export const OPTION_TWO = 'optionTwo'

export default function Option (props) {
  const {question, option, answer } = props

  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
  const optionVotes = question[option].votes.length
  const pctVotes = optionVotes / totalVotes

  return (
    <div className='option'>
      <div className='option-title'>
        Would you rather {question[option].text}?
      </div>

      {(answer === option) && <span>This is your vote!</span>}
      <br/>
      {pctVotes*100} %
      <br/>
      {optionVotes} out of {totalVotes}
    </div>
  )
}

