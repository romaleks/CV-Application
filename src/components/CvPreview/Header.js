import React, { Component } from 'react'

export class Header extends Component {
  render() {
    const { profile } = this.props

    return (
      <div className='cv-header'>
        {profile[0].photo ? (
          <img src={profile[0].photo} alt='Avatar' className='photo'></img>
        ) : (
          <div className='photo'></div>
        )}
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
