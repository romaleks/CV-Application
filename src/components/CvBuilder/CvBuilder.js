import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import Practice from './Practice'

export class CvBuilder extends Component {
  constructor() {
    super()

    this.state = {
      educationAmount: 1,
      practiceAmount: 1,
    }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addItem(section) {
    this.setState({
      [section]: this.state[section] + 1,
    })
  }

  deleteItem(section) {
    this.setState({
      [section]: this.state[section] - 1,
    })
  }

  render() {
    return (
      <div className='cv-builder'>
        <GeneralInfo />
        <Education
          amount={this.state.educationAmount}
          addItem={this.addItem}
          deleteItem={this.deleteItem}
          section='educationAmount'
        />
        <Practice
          amount={this.state.practiceAmount}
          addItem={this.addItem}
          section='practiceAmount'
        />
      </div>
    )
  }
}

export default CvBuilder
