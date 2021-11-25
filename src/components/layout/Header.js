import React, { useState } from 'react';
import Menu from '../elements/Menu';
import Data from '../../data/Database';

export default function Header(props) {

    const [burger, toggleBurger] = useState(false);

    const handleClick = () => {
        toggleBurger(!burger)
        props.toggleBurgerMenu()
        console.log('bam')
    }
    return (
      <div id="header">
        <ul className="contact-us-info">
          <li className="number">{Data.contactInfo.number}</li>
          <li>
            <a
              href={Data.contactInfo.email}
              rel="noopener noreferrer"
              target="_blank"
            >
              {Data.contactInfo.email}
            </a>
          </li>
          <li className="could-button">
            <a href="https://topone.uk/#contact">
              <button>Demo request</button>
            </a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
          <li className="could-button">
            <button>Payment</button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
          {props.cookies.get("topOneLogIn", { path: "/" }) === "true" ? (
            <li className="could-button">
              <button onClick={props.signOut}>Sign out</button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          ) : (
            <li className="could-button">
              <button onClick={props.openLogin}>Log in</button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          )}
          {Data.socialMedia.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.link}>
                  <img src={item.icon} alt="icon"></img>
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="header-menu">
          <Menu />
          <li className="translate">
            <div id="google_translate_element"></div>
          </li>
        </ul>
        <div
          id="burger-button"
          className={burger ? "open" : "close"}
          onClick={() => handleClick()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
}