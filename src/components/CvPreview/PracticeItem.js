import React from 'react'

const PracticeItem = props => {
  const { title, name, from, to, city, description } = props

  return (
    <div className='item'>
      <h3 className='sub-title'>{title}</h3>
      <div className='job'>
        {name} | {from} - {to} | {city}
      </div>
      <div className='description'>{description}</div>
    </div>
  )
}

export default PracticeItem
