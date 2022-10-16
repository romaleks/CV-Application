import React, { Component } from 'react'
import Main from './Main'
import SideBar from './SideBar'
import Header from './Header'

export class CvPreview extends Component {
  render() {
    const { profile, educationItems, practiceItems } = this.props

    return (
      <div className='cv-preview'>
        <Header profile={profile} />
        <SideBar profile={profile} items={educationItems} />
        <Main profile={profile} items={practiceItems} />
      </div>
    )
  }
}

export default CvPreview
