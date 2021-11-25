// import About from "./components/layout/About";
//import Welcome from "./components/layout/Welcome";
//import Services from "./components/layout/Trainings";
// import Services2 from "./components/layout/Trainings2";
// import CaseChecker from "./components/layout/CaseChecker";
// import Services3 from "./components/layout/Trainings3";
// import Partners from "./components/layout/Partners";
// import Contact from "./components/layout/Contact";
// import Menu from "./components/elements/Menu";
// import CookiesToolbar from "./components/layout/CookiesToolbar";
// import CookiesOptions from "./components/layout/CookiesOptions";
// import Vision from "./components/layout/Vision";
// import Feedback from "./components/elements/Feedback";
// import FreeCall from "./components/elements/FreeCall";
import "./css/index.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Login from "./components/elements/Login";
import Register from "./components/elements/Register";
import PrivacyPolicy from "./components/elements/PrivacyPolicy";
import Unsubscribe from "./components/elements/Unsubscribe";
import Menu from "./components/elements/Menu";

//import PopUp from "./components/elements/PopUp";

import Database from "./data/Database";

import Cookies from "universal-cookie";
import React, { Component } from "react";
import Axios from "axios";
//import Products from "./components/layout/Products";

import "bootstrap/dist/css/bootstrap.min.css";
import Feedback from "./Feedback";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerVisible: false,
      burgerMenu: false,
      cookies: new Cookies(),
      // PORT: 'https://toponeuk-web-app.azurewebsites.net',
      PORT: "http://localhost:8080",
      cookiesOptions: false,
      cookiesBar: true,
      about: false,
      trainings: false,
      //products: false,
      vision: false,
      contact: false,
      feedback: false,
      freeCall: false,
      login: false,
      register: false,
      popUp: false,
      popUpMsg: "",
      popUpConfirm: "",
      privacyPolicy: false,
      unsubscribe: false,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
    this.openCookiesOptions = this.openCookiesOptions.bind(this);
    this.agreeAll = this.agreeAll.bind(this);
    this.savePreferences = this.savePreferences.bind(this);
    this.closeFeedback = this.closeFeedback.bind(this);
    this.openFeedback = this.openFeedback.bind(this);
    this.closeFreeCall = this.closeFreeCall.bind(this);
    this.openFreeCall = this.openFreeCall.bind(this);
    this.closeLogin = this.closeLogin.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.closeRegister = this.closeRegister.bind(this);
    this.openRegister = this.openRegister.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
    this.openPopUp = this.openPopUp.bind(this);
    this.openPrivacy = this.openPrivacy.bind(this);
    this.closePrivacy = this.closePrivacy.bind(this);
    this.openUnSub = this.openUnSub.bind(this);
    this.closeUnSub = this.closeUnSub.bind(this);
    this.registerNewUser = this.registerNewUser.bind(this);
    this.logIn = this.logIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.sendFeedback = this.sendFeedback.bind(this);
  }

  registerNewUser(user) {
    Axios.post(`${this.state.PORT}/users/register`, { ...user })
      .then((response) => {
        this.openPopUp("user register");
        this.closeRegister();
      })
      .catch((err) => console.log(err));
  }
  logIn(data) {
    this.state.cookies.set("topOneLogIn", true, { path: "/" });
    this.state.cookies.set("detail", data, { path: "/" });
    console.log(this.state.cookies.getAll({ path: "/" }));
  }
  signOut() {
    this.state.cookies.set("topOneLogIn", false, { path: "/" });
    this.state.cookies.set("detail", {}, { path: "/" });
    console.log(this.state.cookies.getAll({ path: "/" }));
    this.openPopUp("You are sign out");
  }
  sendFeedback(feedback) {
    let userID;
    if (this.state.cookies.get("topOneLogIn", { path: "/" }) === "true") {
      userID = this.state.cookies.get("detail", { path: "/" }).userID;
    } else {
      userID = "anonymous";
    }
    Axios.post(`${this.state.PORT}/feedback`, { feedback, userID })
      .then((response) => {
        this.openPopUp("Feedback was successfully submitted", "ok");
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  handleScroll() {
    if (window.scrollY === 0) {
      this.setState({ headerVisible: false });
      return;
    } else {
      this.setState({ headerVisible: true });
    }

    //  let about = document.getElementById("about");
    //  let trainings = document.getElementById("trainings");
    //let products = document.getElementById("products");
    // let vision = document.getElementById("vision");
    // let contact = document.getElementById("contact");
    //   let showAbout = this.isInViewport(about) ? true : false;
    // let showTrainings = this.isInViewport(trainings) ? true : false;
    //let showProducts = this.isInViewport(products) ? true : false;
    // let showVision = this.isInViewport(vision) ? true : false;
    // let showContacts = this.isInViewport(contact) ? true : false;
    this.setState({
      //   about: showAbout,
      //  trainings: showTrainings,
      //products: showProducts,
      // vision: showVision,
      // contact: showContacts
    });
  }

  //  isInViewport = function (elem) {
  //    let bounding = elem.getBoundingClientRect();
  //    return bounding.top < 800;
  //  };

  toggleBurgerMenu() {
    this.setState({ burgerMenu: !this.state.burgerMenu });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    setTimeout(() => this.openFeedback(), 15000);
    setTimeout(() => this.openFreeCall(), 10000);
  }

  openCookiesOptions() {
    this.setState({ cookiesOptions: true, cookiesBar: false });
  }

  savePreferences(pref) {
    pref.forEach((element) => {
      this.state.cookies.set(element.name, element.allow, { path: "" });
    });
    this.setState({ cookiesOptions: false });
    console.log(this.state.cookies.getAll({ path: "/" }));
  }

  agreeAll() {
    Database.preferences.forEach((element) => {
      this.state.cookies.set(element.name, true, { path: "/" });
    });
    this.setState({ cookiesBar: false });
    console.log(this.state.cookies.getAll({ path: "/" }));
  }

  closeFeedback() {
    this.setState({ feedback: false });
  }
  openFeedback() {
    this.setState({ feedback: true });
  }

  closeFreeCall() {
    this.setState({ freeCall: false });
  }
  openFreeCall() {
    this.setState({ freeCall: true });
  }

  closeLogin() {
    this.setState({ login: false });
  }
  openLogin() {
    this.setState({ login: true });
  }

  closeRegister() {
    this.setState({ register: false });
  }
  openRegister() {
    this.setState({ register: true });
  }

  closePopUp() {
    this.setState({ popUp: false, popUpMsg: "", popUpConfirm: "" });
  }
  openPopUp(msg, confirm = "close") {
    this.setState({ popUp: true, popUpMsg: msg, popUpConfirm: confirm });
  }

  openPrivacy() {
    this.setState({ privacyPolicy: true });
  }
  closePrivacy() {
    this.setState({ privacyPolicy: false });
  }

  openUnSub() {
    this.setState({ unsubscribe: true });
  }
  closeUnSub() {
    this.setState({ unsubscribe: false });
  }

  render() {
    const {
      // popUpConfirm,
      cookies,
      unsubscribe,
      privacyPolicy,
      // popUp,
      // popUpMsg,
      register,
      login,
      // freeCall,
      // feedback,
      headerVisible,
      // cookiesBar,
      // cookiesOptions,
      //about,
      //trainings,
      //products,
      // PORT,
      // vision,
      // contact,
    } = this.state;

    return (
      <div id="main" className={`${headerVisible ? "scrolled" : ""}`}>
        {/* <Welcome /> */}

        {unsubscribe ? <Unsubscribe closeUnSub={this.closeUnSub} /> : ""}

        <Header
          signOut={this.signOut}
          cookies={cookies}
          openLogin={this.openLogin}
          toggleBurgerMenu={this.toggleBurgerMenu}
        />

        {register ? (
          <Register
            registerNewUser={this.registerNewUser}
            openPopUp={this.openPopUp}
            closeRegister={this.closeRegister}
          />
        ) : (
          ""
        )}

        {login ? (
          <Login
            logIn={this.logIn}
            PORT={this.state.PORT}
            openPopUp={this.openPopUp}
            openRegister={this.openRegister}
            close={this.closeLogin}
          />
        ) : (
          ""
        )}

      

        <div
          id="burger-menu"
          className={this.state.burgerMenu ? "open" : "close"}
        >
          <ul>
            <Menu />
          </ul>
        </div>
        <Feedback/>
        {/*<Vision show={vision} />

        <Partners /> */}

        <ul className="header-menu">
          <li className="translate">
            <div id="google_translate_element"></div>
          </li>
        </ul>
        {/*<Products show={products} />
         <Services show={trainings} /> */}
        {/* <Services3 show={trainings} /> */}
        {/* <Services2 show={trainings} /> */}
        {/* <CaseChecker show={trainings} /> */}
        {/* <About show={about} /> */}
        {/* <Contact
        // PORT={PORT}
        // closePopUp={this.closePopUp}
        // openPopUp={this.openPopUp}
        // preferences={this.openPrivacy}
        // show={contact}
        />  */}

        {privacyPolicy ? (
          <PrivacyPolicy closePrivacy={this.closePrivacy} />
        ) : (
          ""
        )}

        <Footer />

        {/* {cookiesBar ? (
          <CookiesToolbar
            agree={this.agreeAll}
            preferences={this.openPrivacy}
          />
        ) : (
          ""
        )}

        {cookiesOptions ? (
          <CookiesOptions savePreferences={this.savePreferences} />
        ) : (
          ""
        )}

        <Feedback
          sendFeedback={this.sendFeedback}
          visible={feedback ? true : false}
          closeFeedback={this.closeFeedback}
        />

        <FreeCall
          visible={freeCall ? true : false}
          closeFreeCall={this.closeFreeCall}
        />

        {popUp ? (
          <PopUp
            confirm={popUpConfirm}
            msg={popUpMsg}
            close={this.closePopUp}
          />
        ) : (
          ""
        )} */}
      </div>
    );
  }
  
}
