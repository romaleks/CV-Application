import React, { Component } from 'react'
import Input from '../Utils/Input'
import Button from '../Utils/Button'

export class Education extends Component {
  render() {
    const { addItem, deleteItem, section } = this.props
    const educationAmount = []

    for (let i = 0; i < this.props.amount; i++) {
      const isLast = i === this.props.amount - 1

      educationAmount.push(
        <div className='item' key={i}>
          <h2 className='title'>Education</h2>
          <Input title='University or School Name' />
          <Input title='Degree' />
          <Input title='Course' />
          <Input title='From' />
          <Input title='To' />
          <div className='buttons'>
            {isLast ? <Button title='Add' onClick={addItem} section={section} /> : ''}
            <Button title='Delete' onClick={deleteItem} section={section} />
          </div>
        </div>
      )
    }

    return this.props.amount ? (
      <div className='section'>{educationAmount}</div>
    ) : (
      <div className='section'>
        <h2 className='title'>Education</h2>
        <Button title='Add' onClick={addItem} section={section} />
      </div>
    )
  }
}

export default Education
