import React, { Component } from 'react'

export class TopBar extends Component {
  render() {
    return (
      <header className='p-4 px-20  w-full flex items-center justify-between h-20 bg-emerald-950'>
        <div className='border-4 text-green-300'>ToDo</div>
        <button id="Darkmode_button" className='  text-green-300 h-9 w-9 border-2 border-emerald-800'>0</button>
      </header>
    )
  }
}

export default TopBar