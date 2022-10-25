import React from 'react'

const Button = props => {
  const { title, section, id, onClick } = props
  return (
    <div className='button' onClick={() => onClick(section, id)}>
      {title}
    </div>
  )
}

export default Button
