import React from 'react'
import customButton from '../../img/CustomButton.png'
export default function Training(props) {
    const buttonStyle =  {
        height: 60,
        width: 217,
    }
    return (
      <li id="test1">
        <img alt="logo" className="img" src={props.training.image}></img>
        <h3>
          <a target="_black" href={props.training.link}>
            {props.training.title}
          </a>
        </h3>
        <ul>
          {props.training.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <a rel="noreferrer" href={props.training.link} target="_blank">
            <img src={customButton} alt="Buy Product" style={buttonStyle} />
        </a>
      </li>
    );
}