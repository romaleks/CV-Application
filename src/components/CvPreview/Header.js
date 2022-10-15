import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div className='cv-header'>
        <div className='photo'></div>
        <div className='names'>
          <div className='name'>
            {this.props.firstName}
            {this.props.LastName}
          </div>
          <div className='prof-title'></div>
        </div>
      </div>
    )
  }
}

export default Header
