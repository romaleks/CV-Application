import React from 'react'
import Main from './Main'
import SideBar from './SideBar'
import Header from './Header'

const CvPreview = props => {
  const { profile, education, practice } = props

  return (
    <div className='cv-preview'>
      <Header profile={profile} />
      <SideBar profile={profile} items={education} />
      <Main profile={profile} items={practice} />
    </div>
  )
}

export default CvPreview
