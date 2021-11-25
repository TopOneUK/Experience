import React from 'react'
import Button from './Button';

export default function FreeCall(props) {
    return (
        <div className={`background-blur ${props.visible ? 'visible' : ''}`}>
            <div id='free-call' className={`pop-up`}>
                <h2>FREE 30 Minute Consultation Call</h2>
                <pre>Free unbiased, no-obligation consultation... or request a demo </pre>
                    <pre>Alternatively please drop an email to Request@TopOne.UK </pre>
                    <pre>or call us on 0333 339 2226</pre>
                
                <div className='container'>
                    <a href='#contact'><Button text='Book now' click={props.closeFreeCall} /></a>
                </div>
                <span className='close' onClick={props.closeFreeCall}>&#x2716;</span>
            </div>
        </div>
    )
}
