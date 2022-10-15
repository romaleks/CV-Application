import React, { Component } from 'react'
import EducationItem from './EducationItem'

export class SideBar extends Component {
  render() {
    const { items } = this.props

    return (
      <div className='cv-sidebar'>
        <div className='section'>
          <h2 className='title'>Education</h2>
          <div className='items'>
            {items.map(item => (
              <EducationItem
                key={item.id}
                degree={item.degree}
                name={item.universityName}
                course={item.course}
                from={item.from}
                to={item.to}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar
