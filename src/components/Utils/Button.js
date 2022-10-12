import React, { Component } from 'react'

export class Button extends Component {
  render() {
    const { section, id } = this.props
    return (
      <div className='button' onClick={() => this.props.onClick(section, id)}>
        {this.props.title}
      </div>
    )
  }
}

export default Button
