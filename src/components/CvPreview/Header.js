import React, { Component } from 'react'

export class Header extends Component {
  render() {
    const { profile } = this.props

    return (
      <div className='cv-header'>
        <div className='photo'>{profile[0].photo}</div>
        <div className='names'>
          <div className='name'>
            {profile[0].firstName} {profile[0].lastName}
          </div>
          <div className='prof-title'>{profile[0].title}</div>
        </div>
      </div>
    )
  }
}

export default Header
