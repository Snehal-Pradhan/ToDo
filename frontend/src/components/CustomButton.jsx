import React, { Component } from 'react'

export class CustomButton extends Component {
  render() {
    const { text, bgColor, border} = this.props; // Destructure the props
    return (
      <button className={`p-2 rounded  ${bgColor} hover:transition-all hover:bg-gray-100 active:scale-95 active:bg-gray-200 shadow-md shadow-gray-200`}>eadfhg</button>
    )
  }
}

export default CustomButton