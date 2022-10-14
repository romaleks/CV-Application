import React, { Component } from 'react'

export class EducationItem extends Component {
  render() {
    return (
      <div className='item'>
        <h3 className='sub-title'>{this.props.degree}</h3>
        <div className='description'>
          <ul>
            <li>{this.props.name}</li>
            <li>{this.props.course}</li>
            <li>
              {this.props.from} - {this.props.to}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default EducationItem
