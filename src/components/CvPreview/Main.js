import React, { Component } from 'react'
import PracticeItem from './PracticeItem'

export class main extends Component {
  render() {
    const { items } = this.props

    return (
      <div className='cv-main'>
        <div className='section'>
          <h2 className='title'>Profile</h2>
          <div className='description'></div>
        </div>
        <div className='section'>
          <h2 className='title'>Work Experience</h2>
          <div className='items'>
            {items.map(item => {
              return <PracticeItem key={item.id} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default main
