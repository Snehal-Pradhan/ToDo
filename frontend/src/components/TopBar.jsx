import React, { Component } from 'react'

export class TopBar extends Component {
  render() {
    return (
      <header className='p-4 px-20  w-full flex items-center justify-between h-20'>
        <div class="logo" className='font-outfit text-3xl font-extrabold text-green-400'>TODO'S</div>
        <button id="Darkmode_button" className='  text-green-300 h-9 w-9 border-2 rounded-lg border-emerald-800'>0</button>
      </header>
    )
  }
}

export default TopBar