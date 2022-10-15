import React, { Component } from 'react'
import Input from '../Utils/Input'
import PhotoInput from '../Utils/PhotoInput'
import TextArea from '../Utils/TextArea'

export class GeneralInfo extends Component {
  render() {
    const { onChange } = this.props
    const section = 'profile'

    return (
      <div className='section'>
        <h2 className='title'>General Information</h2>
        <div className='container'>
          <div className='name'>
            <Input
              title='First Name'
              onChange={onChange}
              section={section}
              id='firstName'
            />
            <Input
              title='Last Name'
              onChange={onChange}
              section={section}
              id='lastName'
            />
          </div>
          <PhotoInput title='Photo' onChange={onChange} section={section} id='photo' />
        </div>
        <Input
          title='Professional Title'
          onChange={onChange}
          section={section}
          id='title'
        />
        <TextArea
          title='Desctiption'
          onChange={onChange}
          section={section}
          id='description'
        />
        <Input title='Phone Number' onChange={onChange} section={section} id='phone' />
        <Input title='Email' onChange={onChange} section={section} id='email' />
        <Input title='Address' onChange={onChange} section={section} id='address' />
      </div>
    )
  }
}

export default GeneralInfo
