import React from 'react'
import Links from './Links'

const Columns = ({ createCard }) => {
    return (
        <div className='columns' onClick={createCard}>
            <div className='columns__sidebar'>
                <h2 className='columns__sidebar--title'>Prioritise well</h2>
            </div>
            <div className='columns__sections'>
                <div className='columns__section columns__section--top'>
                    <div className='columns__section--content'></div>
                    <div className='columns__section--content columns__section--content-top'>
                        <h2 className='columns__section--header'>Urgent</h2>
                    </div>
                    <div className='columns__section--content'>
                        <h2 className='columns__section--header columns__section--content-top'>Not Urgent</h2>
                    </div>
                </div>
                <div className='columns__section columns__section--big columns__section--middle'>
                    <div className='columns__section--content columns__section--content-left'>
                        <h2 className='columns__section--header  columns__section--header-left'>Important</h2>
                    </div>
                    <div className='columns__section--content columns__section--header'>
                        <h2 className='columns__section--inside'>Do it first</h2>
                    </div>
                    <div className='columns__section--content'>
                        <h2 className='columns__section--inside'>Schedule it</h2>
                    </div>
                </div>
                <div className='columns__section columns__section--big'>
                    <div className='columns__section--content columns__section--content-left'>
                        <h2 className='columns__section--header columns__section--header-left'>Not important</h2>
                    </div>
                    <div className='columns__section--content columns__section--header'>
                        <h2 className='columns__section--inside'>Delegate it</h2>
                    </div>
                    <div className='columns__section--content'>
                        <h2 className='columns__section--inside'>Delay it</h2>
                    </div>
                </div>
            </div>
            <Links />
        </div>
    )
}

export default Columns