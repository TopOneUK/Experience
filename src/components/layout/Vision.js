import CountUp, { } from 'react-countup';
import Data from '../../data/Database'

import React from 'react'

export default function Vision(props) {

    return (
        <section id='vision' className={props.show ? 'visible' : 'hide'}>
            <h2 className='section-title'>Our Vision</h2>
            <p>
                Providing cloud services and solutions that work for the clients:
        </p>
            <div className='container'>
                <ul>
                    {Data.visions.map(vision => {
                        return (
                            <li key={vision.id}>
                                <img className='icon' alt='logo' src={vision.logo}></img>
                                {props.show ?
                                    <CountUp
                                        className="nr"
                                        start={0}
                                        end={vision.nr}
                                        duration={5}
                                        useEasing={true}
                                        startOnMount={true}
                                    />
                                    :
                                    ''
                                }
                                <div className='vision-title'>{vision.title}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </section>
    )
}
