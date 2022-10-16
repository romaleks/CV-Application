import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import Practice from './Practice'

export class CvBuilder extends Component {
  render() {
    const {
      educationItems,
      practiceItems,
      addItem,
      deleteItem,
      handleTextEdit,
      handlePhotoEdit,
    } = this.props

    return (
      <div className='cv-builder'>
        <GeneralInfo onChange={handleTextEdit} onPhotoChange={handlePhotoEdit} />
        <Education
          items={educationItems}
          addItem={addItem}
          deleteItem={deleteItem}
          section='educationItems'
          onChange={handleTextEdit}
        />
        <Practice
          items={practiceItems}
          addItem={addItem}
          deleteItem={deleteItem}
          section='practiceItems'
          onChange={handleTextEdit}
        />
      </div>
    )
  }
}

export default CvBuilder
