import React, { useState } from 'react';
import Data from '../../data/Database';
import Button from './Button';

export default function Feedback(props) {

    const [rateNR, updateNR] = useState(0);
    const [msg, setMsg] = useState('')
    const [ratings, updateRating] = useState([])

    const updateRatings = (nr) => {
        console.log(nr)
        let oldArr = [...ratings];
        oldArr[rateNR] = nr;
        updateRating(oldArr);
    }

    const rate = [];
    for (let i = 1; i < 6; i++) {
        rate.push(
            <li key={i}>
                <Button
                    isActive={ratings[rateNR] === i ? true : false}
                    text={i} click={() => updateRatings(i)}
                    class='number'
                />
            </li>
        )
    }
    const saveRatings = () => {
        if (ratings[2] === undefined) { return }
        const feedback = []
        feedback[0] = ratings[0]
        feedback[1] = msg
        feedback[2] = ratings[2]
        props.closeFeedback()
        props.sendFeedback(feedback)
    }
    const next = () => {
        if (rateNR === 0) { if (ratings[0] === undefined) { return } }
        if (rateNR === 1) { if (msg === '') { return } }
        updateNR(rateNR + 1)
    }

    return (
        <div id='feedback' className={`pop-up ${props.visible ? 'visible' : ''}`}>
            <h2>{Data.feedbackMsg[rateNR]}</h2>
            {rateNR === 1 ?
                <input value={msg} onChange={(e) => setMsg(e.target.value)} type='text' />
                :
                <>
                    <ul>
                        {rate}
                    </ul>
                    <span className='not-useful'>Not useful</span>
                    <span className='useful'>Extremely useful</span>
                </>
            }
            <div className='pages number'>{rateNR + 1}/3</div>
            <div className='container'>
                {rateNR < 2 ?
                    <Button text='next' click={next} />
                    :
                    <Button text='save' click={saveRatings} />
                }
            </div>
            <span className='close' onClick={props.closeFeedback}>&#x2716;</span>
        </div>
    )
}
