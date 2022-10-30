import React from 'react'
import './UserIcon.css'

const UserIcon = ({ size, src, username }) => {
  let dim = ''
  const blankUser =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'

  switch (size) {
    case 'large':
      dim = '100px'
      break
    case 'small':
      dim = '75px'
      break
    default:
      dim = '50px'
      break
  }

  return (
    <div className='userIcon'>
      <img
        className='userIcon__image'
        src={src ? src : blankUser}
        style={{ height: `${dim}`, width: `${dim}` }}
        alt={username}
      />
    </div>
  )
}

export default UserIcon
