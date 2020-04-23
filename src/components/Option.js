import React from 'react'

export const OPTION_ONE = 'optionOne'
export const OPTION_TWO = 'optionTwo'

export default function Option (props) {
  const {question, option, answer } = props

  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
  const optionVotes = question[option].votes.length
  const pctVotes = optionVotes / totalVotes

  const styleOption = {
   style: 'percent',
   maximumFractionDigits: 1
  }
  const numberFormat = new Intl.NumberFormat('en-US', styleOption)
  const pctVotesFormatted = numberFormat.format(pctVotes)

  const votedStyle = (answer === option) ? {
    backgroundColor: 'lightgreen'
  } : null

  return (
    <div className='option' style={votedStyle}>
      <div className='option-title'>
        Would you rather {question[option].text}?
      </div>

      {(answer === option) && <span>This is your vote!</span>}
      <div className='pct-votes'>
        {pctVotesFormatted}
      </div>
      <div className='number-votes'>
        {optionVotes} out of {totalVotes}
      </div>
    </div>
  )
}

