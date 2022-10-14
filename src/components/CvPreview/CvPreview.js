import React, { Component } from 'react'
import Main from './Main'
import SideBar from './SideBar'
import Header from './Header'

export class CvPreview extends Component {
  render() {
    return (
      <div className='cv-preview'>
        <Header />
        <SideBar />
        <Main />
      </div>
    )
  }
}

export default CvPreview
