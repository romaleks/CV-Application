import React from 'react'
import { ReactComponent as AddIcon } from '../../assets/add.svg'

const PhotoInput = props => {
  const { onChange } = props

  return (
    <label>
      Choose Photo
      <AddIcon />
      <input type='file' accept='image/*' id='photo' onChange={e => onChange(e)}></input>
    </label>
  )
}

export default PhotoInput
