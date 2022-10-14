import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div className='cv-header'>
        <div className='photo'></div>
        <div className='names'>
          <div className='name'>
            {this.props.firstName}
            {this.props.LastName}Alexandr Romanov
          </div>
          <div className='prof-title'>Web Developer</div>
        </div>
      </div>
    )
  }
}

export default Header
