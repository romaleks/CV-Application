import React, { Component } from 'react'
import Main from './Main'
import SideBar from './SideBar'
import Header from './Header'

export class CvPreview extends Component {
  render() {
    const { educationItems, practiceItems } = this.props

    return (
      <div className='cv-preview'>
        <Header />
        <SideBar items={educationItems} />
        <Main items={practiceItems} />
      </div>
    )
  }
}

export default CvPreview
