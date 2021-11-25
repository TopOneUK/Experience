import React, { Component } from 'react';
import Database from '../../data/Database';
import Button from '../elements/Button'

export default class cookiesOptions extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentItem: 0,
            preferences: [...Database.preferences]
        }
        this.changeItem = this.changeItem.bind(this)
        this.togglePreference = this.togglePreference.bind(this)
    }
    changeItem(nr) { this.setState({ currentItem: nr }) }
    togglePreference(nr) {
        let prf = [...this.state.preferences]
        prf[nr].allow = !prf[nr].allow
        this.setState({ preferences: prf })
    }

    render() {
        const { currentItem, preferences } = this.state
        let item = (
            <div className='policy'>
                <p>{Database.privacy[currentItem]}</p>
                <button
                    className={`toggle-btn ${preferences[currentItem].allow ? 'on' : 'off'}`}
                    onClick={() => this.togglePreference(currentItem)}
                >
                    {preferences[currentItem].allow ? 'on' : 'off'}
                </button>
            </div>
        )
        return (
            <section id='preferences'>
                <ul className={`menu`}>
                    <li className={currentItem === 0 ? 'active' : ''} onClick={() => this.changeItem(0)}>Your privacy</li>
                    <li className={currentItem === 1 ? 'active' : ''} onClick={() => this.changeItem(1)}>Strictly necessary cookies</li>
                    <li className={currentItem === 2 ? 'active' : ''} onClick={() => this.changeItem(2)}>Functionality cookies</li>
                    <li className={currentItem === 3 ? 'active' : ''} onClick={() => this.changeItem(3)}>Targeting and advertising cookies</li>
                </ul>
                {item}
                <Button text='save' click={() => this.props.saveProferences(preferences)} />
            </section>
        )
    }
}
