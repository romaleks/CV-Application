import React, { Component } from 'react'
import uniqid from 'uniqid'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import Practice from './Practice'

export class CvBuilder extends Component {
  constructor() {
    super()

    this.state = {
      educationItems: [uniqid()],
      practiceItems: [uniqid()],
    }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addItem(section) {
    this.setState({
      [section]: [...this.state[section], uniqid()],
    })
  }

  deleteItem(section, id) {
    const newArray = this.state[section].filter(item => item !== id)
    this.setState({
      [section]: newArray,
    })
  }

  render() {
    return (
      <div className='cv-builder'>
        <GeneralInfo />
        <Education
          items={this.state.educationItems}
          addItem={this.addItem}
          deleteItem={this.deleteItem}
          section='educationItems'
        />
        <Practice
          items={this.state.practiceItems}
          addItem={this.addItem}
          deleteItem={this.deleteItem}
          section='practiceItems'
        />
      </div>
    )
  }
}

export default CvBuilder
