import React, {useEffect, useState} from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export default function Feedback(){

    const rating = "Good"
    // eslint-disable-next-line
    const [rand, setRand] = useState(Math.floor(Math.random() * Date.now()));
    // eslint-disable-next-line
    const [recaptcha, setRecaptcha] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [btnTxt, setBtnTxt] = useState("Submit");
    
    // eslint-disable-next-line
    useEffect(() => {
      sendFeedback();

    }, [])

    function sendFeedback (){
      const Data = {
        response: rating,
        ID: rand
      }
      function sendData(data) {
        Axios.post(
          `https://topone-uk-prod-toponeuk-web-app.azurewebsites.net/experience`,
          { ...data }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err)
        });
      }
      sendData(Data);
    }
    function submitComment(){
      setBtnTxt("Loading...");
      setLoading(true);
      const emailData = {
        message:rating + ": " +  message
      }
      const Data = {
        comment: message,
        firstname: firstName,
        lastname: lastName,
        email: email,
        ID: rand
      }
      function updatecomment(data) {
        Axios.put(
          `https://topone-uk-prod-toponeuk-web-app.azurewebsites.net/comment`,
          { ...data }
        )
          .then((response) => {
            console.log(response);
            emailjs
              .send(
                "service_xo7brg9",
                "template_x7d80bn",
                emailData,
                "user_fGb9o9YWqNo495PufbN5T"
              ).then((result) => {
                console.log(result.text);
                setLoading(false);
                setBtnTxt("Submit");
                Swal.fire({
                  icon: "success",
                  title: "Completed",
                  text: "Comment has been submitted",
                });
              },    
              (error) => {
                console.log(error.text);
                setLoading(false);
                setBtnTxt("Submit");
                Swal.fire({
                  icon: "error",
                  title: "ReCaptha Error",
                  text: "Please verify yourself before submitting",
                });
              });
          })
          .catch((err) =>{
            console.log(err)

          });
      }
      updatecomment(Data);
      
    }


    return(
      <div>
        {/* <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1 style={{marginTop:"10%"}}>You selected {rating}!</h1>
            <h3 style={{marginTop:"2%"}}>Please leave a comment here.</h3>
            <textarea
             rows="6"
             cols="110"
             placeholder="Enter Text Here"
             className="text-box"
             id= "comment"
             />
             <div style={{marginTop:"1%", marginBottom:"1%"}}>
                <button className="comment-button" onClick={submitComment}>Sumbit Comment</button>
             </div>
             <div style={{marginBottom:"5%"}}>
              <ReCAPTCHA
                sitekey="6LeeR0saAAAAAFtBWLiMVz7DdSs6kChjUtU8E-ll"
                onChange={() => setRecaptcha(true)}
                theme={"dark"}
              />
            </div>
        </div> */}
        <section
          id="contact"
        >
          <h2 className="section-title">You selected {rating}!</h2>
          <div className="inner-container">
            <form>
              <div className="row">
                <label>First Name: *</label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  style={{ marginRight: "10px" }}
                />
              </div>

              <div className="row">
                <label>Last Name: *</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                />
              
              </div>

              <div className="row text">
              <label>Email address: *</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="text"
                  placeholder="Enter email address"
                />
              </div>

              <div className="row text">
                <label>Comment:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                ></textarea>
              </div>

        

              <div className="row-end" style={{ margin: "auto" }}>
                <ReCAPTCHA
                  sitekey="6LeeR0saAAAAAFtBWLiMVz7DdSs6kChjUtU8E-ll"
                  onChange={() => setRecaptcha(true)}
                  theme={"dark"}
                />
              </div>
              <div className={`submit ${loading ? "loading" : ""}`}>
                {/* <input type="submit" value={btnTxt} /> */}
                <button type="button" className="comment-button" onClick={submitComment}>{btnTxt}</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    )
}