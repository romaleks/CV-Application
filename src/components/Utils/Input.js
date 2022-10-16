import React, { Component } from 'react'

export class Input extends Component {
  render() {
    const { onChange, title, section, index, id } = this.props

    return (
      <input
        type='text'
        placeholder={title}
        onChange={e => onChange(e, section, index, id)}
      ></input>
    )
  }
}

export default Input
