import React, { Component } from 'react'
import Input from '../Utils/Input'
import Button from '../Utils/Button'

export class Education extends Component {
  render() {
    const { addItem, deleteItem, section } = this.props
    const educationAmount = []

    for (let i = 0; i < this.props.amount; i++) {
      educationAmount.push(
        <div className='item' key={i}>
          <h2 className='title'>Education</h2>
          <Input title='University or School Name' />
          <Input title='Degree' />
          <Input title='Course' />
          <Input title='From' />
          <Input title='To' />
          <div className='buttons'>
            <Button title='Add' onClick={addItem} section={section} />
            <Button title='Delete' onClick={deleteItem} section={section} />
          </div>
        </div>
      )
    }

    return <div className='section'>{educationAmount}</div>
  }
}

export default Education
