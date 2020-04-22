import React from 'react'
import { NavLink } from 'react-router-dom'
import Userbox from './Userbox'

export default function Nav () {
  return (
    <div className="header">
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
        </ul>
      </nav>
      <Userbox />
    </div>
  )
}
