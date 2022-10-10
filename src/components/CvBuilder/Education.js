import React, { Component } from 'react'
import Input from '../Utils/Input'
import Button from '../Utils/Button'

export class Education extends Component {
  render() {
    return (
      <div className='section'>
        <h2 className='title'>Education</h2>
        <Input title='University or School name' />
        <Input title='Degree' />
        <Input title='Subject' />
        <Input title='From' />
        <Input title='To' />
        <div className='buttons'>
          <Button title='Add' />
          <Button title='Delete' />
        </div>
      </div>
    )
  }
}

export default Education
