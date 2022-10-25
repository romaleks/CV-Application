import React, { useState } from 'react'
import uniqid from 'uniqid'
import CvBuilder from './CvBuilder/CvBuilder'
import CvPreview from './CvPreview/CvPreview'

const Main = () => {
  const [profile, setProfile] = useState([
    {
      firstName: '',
      lastName: '',
      title: '',
      photo: null,
      description: '',
      phone: '',
      email: '',
      address: '',
    },
  ])

  const [education, setEducation] = useState([
    {
      id: uniqid(),
      UniversityName: '',
      degree: '',
      course: '',
      from: '',
      to: '',
    },
  ])

  const [practice, setPractice] = useState([
    {
      id: uniqid(),
      title: '',
      companyName: '',
      city: '',
      from: '',
      to: '',
      description: '',
    },
  ])

  const addItem = section => {
    if (section === 'education') {
      const newItem = {
        id: uniqid(),
        UniversityName: '',
        degree: '',
        course: '',
        from: '',
        to: '',
      }

      setEducation([...education, newItem])
    } else {
      const newItem = {
        id: uniqid(),
        title: '',
        companyName: '',
        city: '',
        from: '',
        to: '',
        description: '',
      }

      setPractice([...practice, newItem])
    }
  }

  const deleteItem = (section, id) => {
    if (section === 'education') {
      const newArray = education.filter(item => item.id !== id)
      setEducation(newArray)
    } else {
      const newArray = practice.filter(item => item.id !== id)
      setPractice(newArray)
    }
  }

  const handleTextEdit = (e, section, index = 0, input) => {
    if (section === 'profile') {
      const items = [...profile]
      items[index][input] = e.target.value
      setProfile(items)
    } else if (section === 'education') {
      const items = [...education]
      items[index][input] = e.target.value
      setEducation(items)
    } else {
      const items = [...practice]
      items[index][input] = e.target.value
      setPractice(items)
    }
  }

  const handlePhotoEdit = e => {
    const file = e.target.files[0]
    const reader = new FileReader()
    const items = [...profile]
    reader.onload = () => {
      items[0].photo = reader.result
      setProfile(items)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className='main'>
      <CvBuilder
        education={education}
        practice={practice}
        addItem={addItem}
        deleteItem={deleteItem}
        handleTextEdit={handleTextEdit}
        handlePhotoEdit={handlePhotoEdit}
      />
      <CvPreview profile={profile} education={education} practice={practice} />
    </div>
  )
}

export default Main
