import React, { useState } from 'react';
import Button from './Button';
import InnerPop from './InnerPop';

import ReCAPTCHA from "react-google-recaptcha";

export default function Register(props) {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [innerPop, setInnerPop] = useState(false);
    const [popMsg, setPopMsg] = useState('')
    const [valid, setValid] = useState(false)

    class User {
        constructor(email, firstName, lastName, businessName, password) {
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
            this.businessName = businessName;
            this.password = password;
        }
    }
    const validFields = () => {
        switch ('') {
            case email:
                return false
            case firstName:
                return false
            case lastName:
                return false
            case businessName:
                return false
            case password:
                return false
            default:
                return true
        }
    }

    const handleClick = () => {
        if (password !== rePassword) {
            setPopMsg('password not matching');
            setInnerPop(true)
            return
        }
        if (!validFields()) {
            setPopMsg('required field is empty');
            setInnerPop(true)
            return
        }
        if (!valid) {
            setPopMsg('something is wrong');
            setInnerPop(true)
            return
        }
        const newUser = new User(email, firstName, lastName, businessName, password)
        props.registerNewUser(newUser)
    }

    return (
        <div id='register' className={`center-pop-up ${innerPop ? 'msg' : ''}`}>
            <h2>Register</h2>
            <form>
                <label>Email: *</label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                    placeholder='email' />

                <label>First Name: *</label>
                <input
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    type='text'
                    placeholder='first name' />

                <label>Last Name: *</label>
                <input value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    type='text'
                    placeholder='last name' />

                <label>Business name: *</label>
                <input value={businessName}
                    onChange={e => setBusinessName(e.target.value)}
                    type='text'
                    placeholder='business name' />

                <label>Password: *</label>
                <input value={password}
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                    placeholder='password'>
                </input>

                <label>Re-enter Password: *</label>
                <input value={rePassword}
                    onChange={e => setRePassword(e.target.value)}
                    type='password'
                    placeholder='re-enter password' />
            </form>
            <div className='ReCAPTCHA'>
                <ReCAPTCHA
                    sitekey="6LeeR0saAAAAAFtBWLiMVz7DdSs6kChjUtU8E-ll"
                    onChange={() => setValid(true)}
                />
            </div>

            <Button click={handleClick} text='Register' />
            <span onClick={props.closeRegister} className='close'>&#x2716;</span>
            <InnerPop valid={false} msg={popMsg} />
        </div>
    )
}
