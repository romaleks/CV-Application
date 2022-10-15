import React, { Component } from 'react'
import Input from '../Utils/Input'
import TextArea from '../Utils/TextArea'
import Button from '../Utils/Button'

export class Practice extends Component {
  render() {
    const { items, addItem, deleteItem, section } = this.props

    return this.props.items.length ? (
      <div className='section'>
        {items.map((item, index) => {
          const isLast = index === this.props.items.length - 1

          return (
            <div className='item' key={item.id}>
              <h2 className='title'>Work Experience #{index + 1}</h2>
              <Input title='Job Title' />
              <Input title='Company Name' />
              <Input title='City' />
              <Input title='From' />
              <Input title='To' />
              <TextArea title='Description' />
              <div className='buttons'>
                {isLast ? <Button title='Add' onClick={addItem} section={section} /> : ''}
                <Button
                  title='Delete'
                  onClick={deleteItem}
                  section={section}
                  id={item.id}
                />
              </div>
            </div>
          )
        })}
      </div>
    ) : (
      <div className='section'>
        <h2 className='title'>Work Experience</h2>
        <Button title='Add' onClick={addItem} section={section} />
      </div>
    )
  }
}

export default Practice
