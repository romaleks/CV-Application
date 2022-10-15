import React, { Component } from 'react'

export class PracticeItem extends Component {
  render() {
    const { title, name, from, to, city, description } = this.props

    return (
      <div className='item'>
        <h3 className='sub-title'>{title}</h3>
        <div className='job'>
          {name} | {from} - {to} | {city}
        </div>
        <div className='description'>{description}</div>
      </div>
    )
  }
}

export default PracticeItem
