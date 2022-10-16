import React, { Component } from 'react'
import { ReactComponent as AddIcon } from '../../assets/add.svg'

export class PhotoInput extends Component {
  render() {
    const { onChange } = this.props

    return (
      <label>
        Choose Photo
        <AddIcon />
        <input
          type='file'
          accept='image/*'
          id='photo'
          onChange={e => onChange(e)}
        ></input>
      </label>
    )
  }
}

export default PhotoInput
