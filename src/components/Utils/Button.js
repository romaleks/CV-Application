import React, { Component } from 'react'

export class Button extends Component {
  render() {
    const { section, id, onClick } = this.props
    return (
      <div className='button' onClick={() => onClick(section, id)}>
        {this.props.title}
      </div>
    )
  }
}

export default Button
