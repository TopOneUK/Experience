import React, { Component } from 'react';
import Button from '../elements/Button';

export default class Toolbar extends Component {
    render() {
        return (
            <div id='toolbar'>
                <section>
                    <p>
                        <strong>We use cookies</strong>
                        <span>
                            and other tracking technologies to improve your browsing experience
                            on our website, to show you personalized content and targeted ads,
                            to analyze our website traffic, and to understand where our visitors are coming from.

                    </span>
                    </p>
                </section>
                <div className='buttons'>
                    <Button text='I agree' click={this.props.agree} />
                    <Button text='Change my preferences' click={this.props.preferences} />
                </div>
            </div>
        )
    }
}