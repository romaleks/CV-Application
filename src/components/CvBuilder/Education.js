import React, { Component } from 'react'
import Input from '../Utils/Input'
import Button from '../Utils/Button'

export class Education extends Component {
  render() {
    const { items, addItem, deleteItem, section } = this.props

    return this.props.items.length ? (
      <div className='section'>
        {items.map((id, index) => {
          const isLast = index === this.props.items.length - 1

          return (
            <div className='item' key={id}>
              <h2 className='title'>Education #{index + 1}</h2>
              <Input title='University or School Name' />
              <Input title='Degree' />
              <Input title='Course' />
              <Input title='From' />
              <Input title='To' />
              <div className='buttons'>
                {isLast ? <Button title='Add' onClick={addItem} section={section} /> : ''}
                <Button title='Delete' onClick={deleteItem} section={section} id={id} />
              </div>
            </div>
          )
        })}
      </div>
    ) : (
      <div className='section'>
        <h2 className='title'>Education</h2>
        <Button title='Add' onClick={addItem} section={section} />
      </div>
    )
  }
}

export default Education
