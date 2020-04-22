import React from 'react'

export const OPTION_ONE = 'optionOne'
export const OPTION_TWO = 'optionTwo'

export default function Option (props) {
  const {question, option, answer } = props

  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
  const optionVotes = question[option].votes.length
  const pctVotes = optionVotes / totalVotes

// TODO: move this to an helper
  const styleOption = {
   style: 'percent',
   maximumFractionDigits: 1
  }
  const numberFormat = new Intl.NumberFormat('en-US', styleOption)
  const pctVotesFormatted = numberFormat.format(pctVotes)

  return (
    <div className='option'>
      <div className='option-title'>
        Would you rather {question[option].text}?
      </div>

      {(answer === option) && <span>This is your vote!</span>}
      <br/>
      {pctVotesFormatted}
      <br/>
      {optionVotes} out of {totalVotes}
    </div>
  )
}

