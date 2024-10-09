import React, { Component } from 'react'

export class InputPanel extends Component {
  render() {
    return (
      <div className="h-40 flex justify-center">
        <input className="h-10 w-2/4 translate-y-5 rounded p-4 focus:ring-pink-500 align-middle border-emerald-800 text-white border bg-emerald-300 bg-opacity-10 " type="text" placeholder='Enter To Do...'/>
        <button className='p-5 ml-5 bg-slate-200 translate-y-5 rounded h-10 align-middle'>Add</button>
      </div>
    )
  }
}

export default InputPanel