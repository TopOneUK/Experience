import React from 'react';
import Data from '../../data/Database';
import Button from './Button';


export default function Unsubscribe(props) {

    

    const handleClick = () => {
        props.closeUnSub()
    }



    return (
        <div id='unsubscribe'>
            <h2>Unsubscribe</h2>
            <div className='details'>
                <p>Your email address: 'INSERT EMAIL'</p>
                <p>You will not receive any more emails from: 'INSERT EMAIL'</p>
            </div>
            <form>
                {Data.unsubscribe.map(item => (
                    <div className='section' key={item.id}>
                        <input type='radio' name='reason' value={item.id} />
                        <label for={item.id}>{item.txt}</label>
                    </div>
                ))}
                <Button text='Unsubscribe' />
            </form>
            <span className='close' onClick={handleClick}>&#x2716;</span>
        </div>
    )
    
}
