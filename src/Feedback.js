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
      const emailData = {
        message:rating + ": " +  document.getElementById("comment").value
      }
      const Data = {
        comment: document.getElementById("comment").value,
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
                Swal.fire({
                  icon: "success",
                  title: "Complete",
                  text: "Comment has been submitted",
                });
              },    
              (error) => {
                console.log(error.text);
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
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
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
        </div>
    )
}