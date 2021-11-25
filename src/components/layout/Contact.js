// import Select from "react-select";
// import countryList from "react-select-country-list";
import React, { useState } from "react"; //, useMemo
// import Recaptcha from "../elements/Recaptcha";
// import emailjs from "emailjs-com";
// import InnerPop from "../elements/InnerPop";
// import Data from "../../data/Database";

import myVideo from "../../video/test.mp4";

import Axios from "axios";
import ReactPlayer from "react-player";
// import Unsubscribe from "../elements/Unsubscribe";

export default function Contact(props) {
  // const [countryValue, setValue] = useState("");
  const [unsubscribeReason, setReason] = useState("");
  // const [natureValue, setValueEnq] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [phoneNr, setPhoneNr] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subscription, setSub] = useState(false);
  // const [message, setMessage] = useState("");
  const [btnTxt, setBtnTxt] = useState("Unsubscribe");
  const [loading, setLoading] = useState(false);
  const [innerPopUp, setInnerPopUp] = useState(false);
  const [innerMsg, setInnerMsg] = useState("");
  const [innerState, setinnerState] = useState(false);

  // const options = useMemo(() => countryList().getData(), []);

  // const optionsEnq = [
  //   { value: "demo", label: "Request a demo" },
  //   { value: "question", label: "Ask us a question" },
  //   { value: "demo", label: "Invite us to an event" },
  //   { value: "demo", label: "Discuss a partnership" },
  //   { value: "demo", label: "Speak to a sales representative" },
  // ];

  const optionsUnsub = [
    { value: "no reason", label: "No reason given" },
    { value: "frequent", label: "The newsletter are too frequent" },
    { value: "mistake", label: "I never signed up for these newsletter" },
    {
      value: "boring",
      label: "The content of the emails often repeats itself and gets boring",
    },
    { value: "to-many", label: "I receive too many emails in general" },
    { value: "other", label: "Other" },
  ];
  const getData = () => {
    const formData = {
      //   firstName,
      //   lastName,
      //   phoneNr,
      //   email,
      //   subscription,
      //   country: countryValue,
      //   nature: natureValue,
      //   message,
      unsubscribeReason,
    };
    return formData;
  };

  const saveDataToDB = (data) => {
    // Axios.post(`${props.PORT}/contactUs`, { ...data })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => console.log(err));
    Axios.post(
      `${props.PORT}/contact/unsubscribe?` +
        new URLSearchParams(window.location.search),
      {
        ...data,
      }
    );
    Axios.post(
      `${props.PORT}/contact/unsubscribeReason?` +
        new URLSearchParams(window.location.search) +
        "&reason=" +
        unsubscribeReason.label,
      {
        ...data,
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  const cleanForm = () => {
    // setValue("");
    // setValueEnq("");
    // setFirstName("");
    // setPhoneNr("");
    // setPhoneNr("");
    // setLastName("");
    // setEmail("");
    // setSub(false);
    // setMessage("");
    setReason("");
  };
  const checkRequired = () => {
    // if (firstName === "") return false;
    // if (lastName === "") return false;
    // if (email === "") return false;
    // if (countryValue === "") return false;
    // if (natureValue === "") return false;
    if (unsubscribeReason === "") return false;
    else return true;
  };

  const resubscribeClick = (data) => {
    setInnerPopUp(true);
    setinnerState(true);
    setInnerMsg("Successfully resubscribed");
    Axios.post(
      `${props.PORT}/contact/resubscribe?` +
        new URLSearchParams(window.location.search),
      {
        ...data,
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  // const sendForm = (e) => {
  //   e.preventDefault();
  //   if (!checkRequired() === true) {
  //     setInnerPopUp(true);
  //     setinnerState(false);
  //     setInnerMsg("Required field is empty");

  //     return;
  //   }

  //   const data = getData();
  //   setBtnTxt("Loading...");
  //   setLoading(true);
  //   emailjs
  //     .send(
  //       "service_e26uxtt",
  //       "template_kf9frj8",
  //       data,
  //       "user_nyEZ8olx9guFR9YiQUYwI"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         saveDataToDB(data);
  //         cleanForm();
  //         setInnerPopUp(true);
  //         setinnerState(true);
  //         setInnerMsg("You have successfully unsubscribed!");
  //         setBtnTxt("Submit");
  //         setLoading(false);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         setInnerPopUp(true);
  //         setinnerState(false);
  //         setInnerMsg("Unsubscribe was Unsuccessful");
  //         setBtnTxt("Submit");
  //         setLoading(false);
  //       }
  //     );
  // };

  const sendForm2 = (e) => {
    e.preventDefault();
    if (!checkRequired() === true) {
      setInnerPopUp(true);
      setinnerState(false);
      setInnerMsg("Required field is empty");
      if (unsubscribeReason === "") return false;
      else return true;
    }

    const data = getData();
    setBtnTxt("Loading...");
    setLoading(true);

    saveDataToDB(data);
    cleanForm();
    setInnerPopUp(true);
    setinnerState(true);
    setInnerMsg("You have successfully unsubscribed!");
    setBtnTxt("Unsubscribe");
    setLoading(false);
  };

  const sendFormReSub = (e) => {
    e.preventDefault();

    const data = getData();
    setBtnTxt("Loading...");
    setLoading(true);

    resubscribeClick(data);
    cleanForm();
    setInnerPopUp(true);
    setinnerState(true);
    setInnerMsg("You have successfully resubscribed!");
    setBtnTxt("Unsubscribe");
    setLoading(false);
  };

  // const handleButtonClick =  () => {
  //   axios.get("/contact/unsubscribe").then(response => {
  //     console.log(response)
  //   })
  // }

  return (
    <section
      id="contact"
      className={`${props.show ? "visible" : "visible"} ${
        innerPopUp ? "msg" : ""
      }`}
    >
      <h2 className="section-title">TopOneProducts</h2>
      <div className="Video">
        <ReactPlayer url={myVideo} controls width="45%" height="50%" />
        <p className="VideoText">
          ✅TopOne.UK on revolutionizing customer experience by CRM systems.
          <br></br>
        </p>
      </div>
      {/* <div className="inner-container">
        <InnerPop msg={innerMsg} valid={innerState} />
        <form onSubmit={sendForm2}>
           <div className='row'>
                        <label>First Name: *</label>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            name='firstName'
                            type='text'
                            placeholder='First Name' />
                        <label>Phone Number:</label>
                        <input
                            value={phoneNr}
                            onChange={(e) => setPhoneNr(e.target.value)}
                            name='phoneNumber'
                            type='number'
                            placeholder='Phone number' />
                    </div>

                    <div className='row'>
                        <label>Last Name: *</label>
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            name='lastname'
                            type='text'
                            placeholder='Last Name' />
                        <label>Work Email: *</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                            type='text'
                            placeholder='Work email address' />
                    </div> 

          <div className="row full">
            <label>Reason For Unsubscribing *</label>
            <Select
              name="unsubscribe reason"
              className="select"
              options={optionsUnsub}
              value={unsubscribeReason}
              onChange={setReason}
            />

             <label>Select Countries: *</label>
                        <Select
                            name='unsubscribe'
                            className='select'
                            options={options}
                            value={countryValue}
                            onChange={setValue} />
          </div>

           <div className='row text'>
                        <label>Message:</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            name='message'></textarea>
                    </div>

          <div className="row-end">
             <input
                value={subscription}
                onChange={() => setSub(!subscription)}
                name="subscribe"
                type="checkbox"
              /> 
             <label>I would like to receive informative content from TopOne - don't worry we will never fill up your inbox</label>
            <label>
              {" "}
              <button className="privacy" onClick={props.preferences}>
                Privacy Policy
              </button>
            </label>
          </div>

          <div className="row text">
            <Recaptcha />
          </div>
          <div className={`submit ${loading ? "loading" : ""}`}>
            <input type="submit" value={btnTxt} />
          </div>
          <div className={`submit ${loading ? "loading" : ""}`}>
            <input type="submit" value="Resubscribe" onClick={sendFormReSub} />
          </div>
        </form>
      </div> */}
    </section>
  );
}
