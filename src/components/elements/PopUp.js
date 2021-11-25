import React from 'react'
import Button from './Button';

export default function PopUp(props) {
    return (
        <div id='pop-up-message'>
            <h3>{props.msg}</h3>
            <Button click={props.close} text={props.confirm || 'close'} />
        </div>
    )
}
