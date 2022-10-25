import React from 'react'
import EducationItem from './EducationItem'
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg'
import { ReactComponent as AddressIcon } from '../../assets/home.svg'
import { ReactComponent as EmailIcon } from '../../assets/email.svg'

const SideBar = props => {
  const { profile, items } = props

  return (
    <div className='cv-sidebar'>
      <div className='section'>
        <h2 className='title'>Contacts</h2>
        <div className='items'>
          <div className='item'>
            <div className='icon-title'>
              <PhoneIcon />
              {profile[0].phone}
            </div>
            <div className='icon-title'>
              <EmailIcon />
              {profile[0].email}
            </div>
            <div className='icon-title'>
              <AddressIcon />
              {profile[0].address}
            </div>
          </div>
        </div>
      </div>
      <div className='section'>
        <h2 className='title'>Education</h2>
        <div className='items'>
          {items.map(item => (
            <EducationItem
              key={item.id}
              degree={item.degree}
              name={item.universityName}
              course={item.course}
              from={item.from}
              to={item.to}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar
