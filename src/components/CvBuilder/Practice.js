import React, { Component } from 'react'
import Input from '../Utils/Input'
import TextArea from '../Utils/TextArea'
import Button from '../Utils/Button'

export class Practice extends Component {
  render() {
    return (
      <div className='section'>
        <h2 className='title'>Work Experience</h2>
        <Input title='Job Title' />
        <Input title='Company Name' />
        <Input title='City' />
        <Input title='From' />
        <Input title='To' />
        <TextArea title='Description' />
        <div className='buttons'>
          <Button title='Add' />
          <Button title='Delete' />
        </div>
      </div>
    )
  }
}

export default Practice
