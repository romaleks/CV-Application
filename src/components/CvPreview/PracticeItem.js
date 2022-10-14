import React, { Component } from 'react'

export class PracticeItem extends Component {
  render() {
    return (
      <div className='item'>
        <h3 className='job-title'>{this.props.title}</h3>
        <div className='job'>
          {this.props.name} | {this.props.from} - {this.props.to} | {this.props.city}
        </div>
        <div className='description'>{this.props.description}</div>
      </div>
    )
  }
}

export default PracticeItem
