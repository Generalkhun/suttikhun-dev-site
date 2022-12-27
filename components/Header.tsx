import React from 'react'
import './Header.module.css'

type Props = {
    className: string
}

const Header = () => {
  return (
    <div className='header-container'>
        <div>
            SUTTIKHUN.DEV
        </div>
    </div>
  )
}

export default Header