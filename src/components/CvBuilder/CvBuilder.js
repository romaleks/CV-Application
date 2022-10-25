import React from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import Practice from './Practice'

const CvBuilder = props => {
  const { education, practice, addItem, deleteItem, handleTextEdit, handlePhotoEdit } =
    props

  return (
    <div className='cv-builder'>
      <GeneralInfo onChange={handleTextEdit} onPhotoChange={handlePhotoEdit} />
      <Education
        items={education}
        addItem={addItem}
        deleteItem={deleteItem}
        section='education'
        onChange={handleTextEdit}
      />
      <Practice
        items={practice}
        addItem={addItem}
        deleteItem={deleteItem}
        section='practice'
        onChange={handleTextEdit}
      />
    </div>
  )
}

export default CvBuilder
