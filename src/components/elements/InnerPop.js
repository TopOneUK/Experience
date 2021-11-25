import React from 'react'
import V from '../../img/icons/remove.svg';
import X from '../../img/icons/check.svg';

export default function InnerPop(props) {
    return (
        <div id='inner-pop'>
            <img className='icon' src={props.valid ? X : V} alt='success'></img>
            <div className='info'>
                <h3>{props.msg}</h3>
            </div>
        </div>
    )
}
