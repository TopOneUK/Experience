import React, { useState } from 'react';
import Data from '../../data/Database';
import Button from './Button';

export default function PrivacyPolicy(props) {

    const [page, setPage] = useState(0);

    return (
        <div id='privacyPolicy'>
            <h2>Top One Privacy Policy</h2>
            <ul className='list'>
                {Data.privacyPolicy.map(policy => (
                    <li key={policy.id} onClick={() => setPage(policy.id - 1)}>{policy.title}</li>
                ))}
            </ul>
            <div className='policy'>
                {Data.privacyPolicy[page].text.map(txt => (
                    <p key={txt}>{txt}</p>
                ))}
            </div>
            <Button click={props.closePrivacy} text='close' />
        </div>
    )
}
