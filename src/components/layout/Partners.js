import React from 'react'
import Data from '../../data/Database'

export default function Partners() {
    return (
        <section id='partners'>
            <h2 className='section-title'>Our Partners</h2>
            <div className='partners-container'>
                <ul>
                    {Data.partners.map(item => (
                        <li style={{ animationDelay: item.id * 4 + 's' }} key={item.id}>
                            <a target='_black' href={item.link}>
                                <img alt='partner' src={item.img}></img>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
