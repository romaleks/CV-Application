import React, { Component } from 'react'
import uniqid from 'uniqid'
import CvBuilder from './CvBuilder/CvBuilder'
import CvPreview from './CvPreview/CvPreview'

class Main extends Component {
  constructor() {
    super()

    this.state = {
      profile: [
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
      ],
      educationItems: [
        {
          id: uniqid(),
          UniversityName: '',
          degree: '',
          course: '',
          from: '',
          to: '',
        },
      ],
      practiceItems: [
        {
          id: uniqid(),
          title: '',
          companyName: '',
          city: '',
          from: '',
          to: '',
          description: '',
        },
      ],
    }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.handleTextEdit = this.handleTextEdit.bind(this)
    this.handlePhotoEdit = this.handlePhotoEdit.bind(this)
  }

  addItem(section) {
    let newItem = {}

    if (section === 'educationItems') {
      newItem = {
        id: uniqid(),
        UniversityName: '',
        degree: '',
        course: '',
        from: '',
        to: '',
      }
    } else {
      newItem = {
        id: uniqid(),
        title: '',
        companyName: '',
        city: '',
        from: '',
        to: '',
        description: '',
      }
    }

    this.setState({
      [section]: [...this.state[section], newItem],
    })
  }

  deleteItem(section, id) {
    const newArray = this.state[section].filter(item => item.id !== id)
    this.setState({
      [section]: newArray,
    })
  }

  handleTextEdit(e, section, index, input) {
    if (!index) index = 0
    const items = [...this.state[section]]
    items[index][input] = e.target.value
    this.setState({
      [section]: items,
    })
  }

  handlePhotoEdit(e) {
    const file = e.target.files[0]
    const reader = new FileReader()
    const items = [...this.state.profile]
    reader.onload = () => {
      items[0].photo = reader.result
      this.setState({
        profile: items,
      })
    }
    reader.readAsDataURL(file)
  }

  render() {
    return (
      <div className='main'>
        <CvBuilder
          educationItems={this.state.educationItems}
          practiceItems={this.state.practiceItems}
          addItem={this.addItem}
          deleteItem={this.deleteItem}
          handleTextEdit={this.handleTextEdit}
          handlePhotoEdit={this.handlePhotoEdit}
        />
        <CvPreview
          profile={this.state.profile}
          educationItems={this.state.educationItems}
          practiceItems={this.state.practiceItems}
        />
      </div>
    )
  }
}

export default Main
