import React, { Component } from 'react'
import Input from '../Utils/Input'
import PhotoInput from '../Utils/PhotoInput'
import TextArea from '../Utils/TextArea'

export class GeneralInfo extends Component {
  render() {
    return (
      <div className='section'>
        <h2 className='title'>General Information</h2>
        <div className='container'>
          <div className='name'>
            <Input title='First Name' />
            <Input title='Last Name' />
          </div>
          <PhotoInput title='Photo' />
        </div>
        <Input title='Professional Title' />
        <TextArea title='Desctiption' />
        <Input title='Phone Number' />
        <Input title='Email' />
        <Input title='Address' />
      </div>
    )
  }
}

export default GeneralInfo
