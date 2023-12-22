import React from 'react'
import Links from './Links'

const MobileVersion = () => {
  return (
    <div className='mobile'>
      <div className='mobile__content'>
        <h2 className='mobile__title'>Prioritise Well</h2>
        <p className='mobile__text'>Currently only available on desktop, sorry :)</p>
      </div>
      <Links />
    </div>
  )
}

export default MobileVersion