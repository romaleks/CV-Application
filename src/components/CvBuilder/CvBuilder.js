import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import Practice from './Practice'

export class CvBuilder extends Component {
  render() {
    const { educationItems, practiceItems, addItem, deleteItem } = this.props

    return (
      <div className='cv-builder'>
        <GeneralInfo />
        <Education
          items={educationItems}
          addItem={addItem}
          deleteItem={deleteItem}
          section='educationItems'
        />
        <Practice
          items={practiceItems}
          addItem={addItem}
          deleteItem={deleteItem}
          section='practiceItems'
        />
      </div>
    )
  }
}

export default CvBuilder
