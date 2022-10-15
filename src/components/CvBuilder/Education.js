import React, { Component } from 'react'
import Input from '../Utils/Input'
import Button from '../Utils/Button'

export class Education extends Component {
  render() {
    const { items, addItem, deleteItem, section, onChange } = this.props

    return this.props.items.length ? (
      <div className='section'>
        {items.map((item, index) => {
          const isLast = index === this.props.items.length - 1

          return (
            <div className='item' key={item.id}>
              <h2 className='title'>Education #{index + 1}</h2>
              <Input
                title='Degree'
                onChange={onChange}
                section={section}
                index={index}
                id='degree'
              />
              <Input
                title='University or School Name'
                onChange={onChange}
                section={section}
                index={index}
                id='universityName'
              />
              <Input
                title='Course'
                onChange={onChange}
                section={section}
                index={index}
                id='course'
              />
              <Input
                title='From'
                onChange={onChange}
                section={section}
                index={index}
                id='from'
              />
              <Input
                title='To'
                onChange={onChange}
                section={section}
                index={index}
                id='to'
              />
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
        <h2 className='title'>Education</h2>
        <Button title='Add' onClick={addItem} section={section} />
      </div>
    )
  }
}

export default Education
