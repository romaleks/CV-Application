import React, { Component } from 'react'
import EducationItem from './EducationItem'

export class SideBar extends Component {
  render() {
    return (
      <div className='cv-sidebar'>
        <div className='section'>
          <h2 className='title'>Education</h2>
          <div className='items'>
            <EducationItem />
            <EducationItem />
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar
