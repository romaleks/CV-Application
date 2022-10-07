import React, { Component } from 'react'

export class TextArea extends Component {
  render() {
    return <textarea placeholder={this.props.title}></textarea>
  }
}

export default TextArea
