import React from 'react'

const TextArea = props => {
  const { onChange, title, section, index, id } = props

  return (
    <textarea
      type='text'
      placeholder={title}
      onChange={e => onChange(e, section, index, id)}
    ></textarea>
  )
}

export default TextArea
