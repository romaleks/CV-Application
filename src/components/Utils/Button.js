import React, { Component } from 'react'

export class Button extends Component {
  render() {
    return (
      <div className='button' onClick={() => this.props.onClick(this.props.section)}>
        {this.props.title}
      </div>
    )
  }
}

export default Button
