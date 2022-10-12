import React, { Component } from 'react'
import Input from '../Utils/Input'
import TextArea from '../Utils/TextArea'
import Button from '../Utils/Button'

export class Practice extends Component {
  render() {
    const { addItem, deleteItem, section } = this.props
    const practiceAmount = []

    for (let i = 0; i < this.props.amount; i++) {
      const isLast = i === this.props.amount - 1

      practiceAmount.push(
        <div className='item' key={i}>
          <h2 className='title'>Work Experience</h2>
          <Input title='Job Title' />
          <Input title='Company Name' />
          <Input title='City' />
          <Input title='From' />
          <Input title='To' />
          <TextArea title='Description' />
          <div className='buttons'>
            {isLast ? <Button title='Add' onClick={addItem} section={section} /> : ''}
            <Button title='Delete' onClick={deleteItem} section={section} />
          </div>
        </div>
      )
    }

    return this.props.amount ? (
      <div className='section'>{practiceAmount}</div>
    ) : (
      <div className='section'>
        <h2 className='title'>Work Experience</h2>
        <Button title='Add' onClick={addItem} section={section} />
      </div>
    )
  }
}

export default Practice
