import React, { Component } from 'react'

export class EducationItem extends Component {
  render() {
    const { degree, name, course, from, to } = this.props

    return (
      <div className='item'>
        <h3 className='sub-title'>{degree}</h3>
        <div className='description'>
          <ul>
            <li>{name}</li>
            <li>{course}</li>
            <li>
              {from} - {to}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default EducationItem
