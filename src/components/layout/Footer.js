import React from "react";
// import Address from "../elements/Address";
import logo from "../../img/topone-transparency.png";
import mic from "../../img/mic.png";
// import Data from "../../data/Database";
import Banking from "../elements/Bank"

export default function Footer() {
  // const frameStyle = {
  //   width: "100%",
  //   maxWidth: 2000,
  //   height: 380,
  //   frameborder: 0,
  // };

  return (
    <section id="footer">
      {/* <div className='map'>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.5695124802687!2d-0.11585600955064258!3d51.37421021192745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487600d277daa58d%3A0xee327ea093c166da!2sStart%20Up%20Croydon!5e0!3m2!1sen!2suk!4v1581757863101!5m2!1sen!2suk" style={frameStyle}></iframe>
            </div> */}
      <div className="container">
        {/* <ul>
          <li>
            <h4>Our Address</h4>
          </li>
          <li>
            <Address />
          </li>
        </ul> */}
        {/* <ul> */}
        {/* <li>
            <h4>Trainings</h4>
          </li>
          <li>IT Consultant</li>
          <li>IT Developer</li>
          <li>IT Marketing</li> */}
        {/* <img className="logo" alt="logo" src={logo}></img> */}
        {/* </ul> */}
        {/* <ul>
          <li>
            <img className="logo" alt="logo" src={logo}></img>
          </li>
        </ul> */}
        {/* <ul>
           <li>
            <h4>Services</h4>
          </li> 
           <li>Consultant</li>
          <li>Support</li>
          <li>Project Recovery</li>
        </ul> */}
        {/* <ul> */}
        {/* <li>
            <h4>Our Company</h4>
          </li>
          <li>What we do</li>
          <li>Who we are</li>
          <li>Careers</li>
          <li>Contacts</li> */}
        {/* </ul> */}
        <img alt="microsoft" src={mic} style={{marginTop: "30px"}}></img>
        <ul>
          <li>
            <Banking />
          </li>
        </ul>
        <ul>
          <li>
            {/* <li>
              <h4>Follow us</h4>
            </li>
            <li className="social-container">
              {Data.socialMedia.map((item) => {
                return (
                  <div key={item.id}>
                    <a href={item.link}>
                      <img alt="log" src={item.icon}></img>
                    </a>
                  </div>
                );
              })}
            </li> */}
            <img className="logo" alt="logo" src={logo}></img>
          </li>
        </ul>
        {/* <ul>
          <li>
            <h4>Our Company</h4>
          </li>
          <li>What we do</li>
          <li>Who we are</li>
          <li>Careers</li>
          <li>Contacts</li>
        </ul> */}
      </div>
    </section>
  );
}
