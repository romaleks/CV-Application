import React, { Component } from 'react'
import Input from '../Utils/Input'
import PhotoInput from '../Utils/PhotoInput'
import TextArea from '../Utils/TextArea'

export class GeneralInfo extends Component {
  render() {
    return (
      <div>
        <h2 className='title'>General Information</h2>
        <Input title='First Name' />
        <Input title='Last Name' />
        <PhotoInput title='Photo' />
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
