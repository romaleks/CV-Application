import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import Practice from './Practice'

export class CvBuilder extends Component {
  render() {
    return (
      <div className='cv-builder'>
        <GeneralInfo />
        <Education />
        <Practice />
      </div>
    )
  }
}

export default CvBuilder
