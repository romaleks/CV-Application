import React, { Component } from 'react'

export class TextArea extends Component {
  render() {
    const { onChange, title, section, index, id } = this.props

    return (
      <textarea
        type='text'
        placeholder={title}
        className='title'
        onChange={e => onChange(e, section, index, id)}
      ></textarea>
    )
  }
}

export default TextArea
