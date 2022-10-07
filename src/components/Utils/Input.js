import React, { Component } from 'react'

export class Input extends Component {
  render() {
    return <input type='text' placeholder={this.props.title} className='title'></input>
  }
}

export default Input
