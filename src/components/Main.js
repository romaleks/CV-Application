import React, { Component } from 'react'
import uniqid from 'uniqid'
import CvBuilder from './CvBuilder/CvBuilder'
import CvPreview from './CvPreview/CvPreview'

class Main extends Component {
  constructor() {
    super()

    this.state = {
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

  render() {
    return (
      <div className='main'>
        <CvBuilder
          educationItems={this.state.educationItems}
          practiceItems={this.state.practiceItems}
          addItem={this.addItem}
          deleteItem={this.deleteItem}
        />
        <CvPreview
          educationItems={this.state.educationItems}
          practiceItems={this.state.practiceItems}
        />
      </div>
    )
  }
}

export default Main
