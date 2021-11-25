import React from 'react'

export default function Button(props) {
    return (
        <div
            className={`button-container ${props.class || ''} ${props.isActive ? 'active' : ''}`}
            onClick={props.click}>
            <button className='button'>
                {props.text}
            </button>
            <span></span>
        </div>
    )
}