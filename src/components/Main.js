import React, { Component } from 'react'
import CvBuilder from './CvBuilder/CvBuilder'
import CvPreview from './CvPreview/CvPreview'

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <CvBuilder />
        <CvPreview />
      </div>
    )
  }
}

export default Main
