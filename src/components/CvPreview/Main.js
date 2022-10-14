import React, { Component } from 'react'
import PracticeItem from './PracticeItem'

export class main extends Component {
  render() {
    return (
      <div className='cv-main'>
        <div className='section'>
          <h2 className='title'>Profile</h2>
          <div className='description'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo maiores sint
            veritatis est ullam ea amet culpa harum libero autem!
          </div>
        </div>
        <div className='section'>
          <h2 className='title'>Work Experience</h2>
          <div className='items'>
            <PracticeItem />
          </div>
        </div>
      </div>
    )
  }
}

export default main
