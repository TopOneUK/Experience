import React from 'react'
import data from '../../data/Database';

export default function Address() {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Address</th>
                    <td className='number'>{data.contactInfo.address}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td className='number'>{data.contactInfo.number}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>
                        <a rel='noopener noreferrer' target="_blank" href={`mailto: ${data.contactInfo.email}`}>
                            {data.contactInfo.email}
                        </a>
                    </td>
                </tr>
                <tr>
                    <th>Hours</th>
                    <td className='number'><strong>Monday- Friday</strong> 9:00am - 6:00pm</td>
                </tr>
            </tbody>
        </table>
    )
}
