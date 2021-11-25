import React, { useState } from "react";
import Logo from "../../img/topone-transparency.png";
import Button from "./Button";
import Axios from "axios";
import InnerPop from "./InnerPop";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [innerPop, setInnerPop] = useState(false);
  const [valid, setValid] = useState(false);

  const handleClick = () => {
    props.close();
    props.openRegister();
  };
  const handleLogIn = () => {
    if (!valid) {
      setInnerPop(true);
      console.log("ReCAPTCHA");
      return;
    }
    Axios.get(`${props.PORT}/users/logIn`, { params: { email, password } })
      .then((resp) => {
        console.log(resp);
        if (!resp.data) {
          setInnerPop(true);
        } else {
          props.openPopUp("you are Loged in");
          props.close();
          props.logIn(resp.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="login" className={`center-pop-up ${innerPop ? "msg" : ""}`}>
      <img src={Logo} alt="logo" />
      <h2>Log In</h2>
      <form>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <div className="ReCAPTCHA">
          <ReCAPTCHA
            sitekey="6LeeR0saAAAAAFtBWLiMVz7DdSs6kChjUtU8E-ll"
            onChange={() => setValid(true)}
          />
        </div>
        <div className="container">
          <Button click={handleLogIn} text="Log in" />
          <Button click={handleClick} text="Register" />
        </div>
      </form>
      <span onClick={props.close} className="close">
        &#x2716;
      </span>
      <InnerPop msg={"wrong detail"} />
    </div>
  );
}
