import officeLogo from "../img/icons/office.svg";

import fbLogo from "../img/icons/facebook-c.svg";
import instaLogo from "../img/icons/instagram-c.svg";
import twitterLogo from "../img/icons/twitter-c.svg";
import linkedinLogo from "../img/icons/linkedin-c.svg";
import youtubeLogo from "../img/icons/youtube-c.svg";

import consultancy from "../img/icons/services/consultancy.svg";
// import crm from "../img/icons/services/crm.svg";
// import implementation from "../img/icons/services/implementation.svg";
// import start from "../img/icons/services/start.svg";
// import support from "../img/icons/services/support.svg";
// import training from "../img/icons/services/training.svg";

import imgG from "../img/topone-gold.png";
import imgS from "../img/topone-silver.png";
import imgB from "../img/topone-bronze.png"
// import imgs from "../img/topone-silver2.png";
// import imgb from "../img/topone-bronze2.png";
import sApp from "../img/TopOne_App_v3.png";

import pPlatform from "../img/pPlatform.png";
import pInvestigation from "../img/Investigation_case_management..png";
import pIntegrator from "../img/pIntegrator.png";
import pCRM from "../img/V5_TopOneCRM.png";
import pCMS from "../img/pCMS.png";
import pPortal from "../img/pPortal.png";
import pLegal from "../img/pLegal.png";
import pAssetManagement from "../img/Asset_Management_.png";

class Database {
  get unsubscribe() {
    return [
      {
        id: "reason",
        txt: "I do not want to tell the reason",
      },
      {
        id: "frequent",
        txt: "The newsletter are too frequent",
      },
      {
        id: "mistake",
        txt: "I never signed up for these newsletter",
      },
      {
        id: "boring",
        txt: "The content of the emails often repeats itself and gets boring",
      },
      {
        id: "to-many",
        txt: "I receive too many emails in general",
      },
      {
        id: "other",
        txt: "Other",
      },
    ];
  }

  get partners() {
    return [
      {
        id: 1,
        img: "https://picsum.photos/100/100",
        link: "https://picsum.photos",
      },
      {
        id: 2,
        img: "https://picsum.photos/100/100",
        link: "https://picsum.photos",
      },
      {
        id: 3,
        img: "https://picsum.photos/100/100",
        link: "https://picsum.photos",
      },
      {
        id: 4,
        img: "https://picsum.photos/100/100",
        link: "https://picsum.photos",
      },
      {
        id: 5,
        img: "https://picsum.photos/100/100",
        link: "https://picsum.photos",
      },
      {
        id: 6,
        img: "https://picsum.photos/100/100",
        link: "https://picsum.photos",
      },
    ];
  }

  get feedbackMsg() {
    return [
      "Did you find this site useful?",
      "What would make the site more useful?",
      "How likely would you recommend TopOne.UK",
    ];
  }

  get privacy() {
    return [
      `Cookies are very small text files that are stored on your computer when you visit a website. We use cookies for a variety of purposes and to enhance your online experience on our website (for example, to remember your account login details).
            You can change your preferences and decline certain types of cookies to be stored on your computer while browsing our website. You can also remove any cookies already stored on your computer, but keep in mind that deleting cookies may prevent you from using parts of our website.`,
      `These cookies are essential to provide you with services available through our website and to enable you to use certain features of our website.
            Without these cookies, we cannot provide you certain services on our website.`,
      `These cookies are used to provide you with a more personalized experience on our website and to remember choices you make when you use our website.
            For example, we may use functionality cookies to remember your language preferences or remember your login details.`,
      `These cookies are used to collect information to analyze the traffic to our website and how visitors are using our website.
            For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps us to understand how we can improve our website site for you.
            The information collected through these tracking and performance cookies do not identify any individual visitor.
            `,
    ];
  }
  get privacyPolicy() {
    return [
      {
        id: 1,
        title: "COOKIES",
        text: [
          "Our Site uses cookies to distinguish you from other users of our Site. This helps us to provide you with a good experience when you browse our Site and also allows us to improve our Site. Please review our Cookie Policy for more information.",
          `Cookies are very small text files that are stored on your computer when you visit a website. We use cookies for a variety of purposes and to enhance your online experience on our website (for example, to remember your account login details).
                     You can change your preferences and decline certain types of cookies to be stored on your computer while browsing our website. You can also remove any cookies already stored on your computer, but keep in mind that deleting cookies may prevent you from using parts of our website.`,
          `These cookies are essential to provide you with services available through our website and to enable you to use certain features of our website.
                      Without these cookies, we cannot provide you certain services on our website.`,
          `These cookies are used to provide you with a more personalized experience on our website and to remember choices you make when you use our website.
                        For example, we may use functionality cookies to remember your language preferences or remember your login details.`,
        ],
      },
      {
        id: 2,
        title: "INFORMATION WE MAY COLLECT",
        text: [
          "We may collect and process the following personal data about you:",
          "Information that you provide by filling in newsletter, partnership or enquiry forms on our website www.http://topone.uk.com/ viz. Name, email, phone numbers, job title, organisation name.",
          "Information such as your name, email, job title, organisation name, dietary preferences shared with us by our marketing event partners or when you forward our hosted event invites to other delegates and they RSVP.",
          "Your name, email, phone numbers, job title, organisation name as shared by you through business cards, direct mail, telephonic or in-person contact.",
          "We may also collect and process personal data which is publicly available by a third party such as held on LinkedIn, Facebook and Twitter.",
          "When you access our website www.http://topone.uk.com/, details of your visits to our Site (including, but not limited to, traffic data, location data, weblogs and other communication data, and the resources that you access).",
          "We may also ask you for information when you contact us for any enquiries, product demos, partnership information or other business interests. If you contact us, we may keep a record of that correspondence.",
        ],
      },
      {
        id: 3,
        title: "IP ADDRESSES",
        text: [
          "When someone visits www.http://toponeuk.com/ we use a third party service, Google Analytics and Click Dimensions, to collect standard internet log information and details of visitor behaviour patterns. We may collect information about your computer (or mobile device), including where available your IP address, operating system and browser type, for system administration, analytics or for our own commercial purposes.",
          "This information is only processed in a way which does not identify anyone. We do not make, and do not allow Google to make, any attempt to find out the identities of those visiting our website.",
        ],
      },
      {
        id: 4,
        title: "BACKGROUND",
        text: [
          "This privacy statement sets out the privacy policy of Sales and Marketing function of Top One UK (Trading name: Top One UK; TopOneCRM).",
          "TopOneUK (‘we’, ‘us’ and ‘our’) is a private limited company registered in England and Wales under Company Register Number 07895806 and with its registered office at 141-145 Curtain Road, London, EC2A 3AR.",
          "This notice describes how Top fulfils its obligations under applicable data protection laws, including but not limited to, Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (the General Data Protection Regulation or GDPR) effective from 25 May 2018.",
        ],
      },
      {
        id: 5,
        title: "WHERE WE STORE YOUR PERSONAL DATA",
        text: [
          "The data that we collect from you is stored on our Customer Relationship Management (CRM) system and may be transferred to, and stored at, a destination outside the European Economic Area (‘EEA’). The data may also be processed by staff operating outside of the EEA who work for us, Wealth Dynamics or for one of our suppliers. Such staff may be engaged in, among other things, the fulfillment of your order and the provision of support services. By submitting your data, you agree to this transfer, storing and/or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.",
          "We maintain strict security standards and procedures with a view to preventing unauthorised access to your data by anyone, including our staff. All our staff and third parties, whenever we hire them to provide support services, are required to observe our privacy standards and to allow us to audit them for compliance.",
        ],
      },
      {
        id: 6,
        title: "WHY WE REQUIRE THIS DATA",
        text: [
          "We require and collect the personal information about you:",
          `To provide you with information, products or services that you request from us or which we feel may interest you where you have consented to be contacted for such direct marketing purposes`,
          "To carry out our obligations arising from any contracts entered into between you and us or to manage our relationship with you and communicate.",
          "To meet our on-going regulatory and compliance obligations, including in relation to recording and monitoring communications, disclosures to tax authorities, financial service regulators and other regulatory and governmental bodies, and investigating or preventing crime;",
          "To undertake transactional and statistical analysis, and related research",
          "To ensure that content from our Site is presented in the most effective manner for you and for your computer (or mobile device). We may use your information collected from the website to personalise your repeat visits to our website.",
          "We may also use your data to provide you with information about goods and services of the Top One UK which may be of interest to you and where you have provided consent we may contact you about these by post, telephone, email or text message.",
        ],
      },
    ];
  }
  get services() {
    return [
      {
        id: 1,
        title: "TopOne Products ",
        img: consultancy,
        text: `We work closely with our clients to fully understand their business, from current processes and challenges, to future objectives and goals. From this, we are able to advise you on the best solution for your requirements and deliver real value.`,
      },
    ];
  }
  get socialMedia() {
    return [
      {
        id: 1,
        link: "https://www.facebook.com/TopOne.UK",
        icon: fbLogo,
      },
      {
        id: 2,
        link: "https://www.instagram.com/TopOne.UK",
        icon: instaLogo,
      },
      {
        id: 3,
        link: "https://twitter.com/TopOneUK",
        icon: twitterLogo,
      },
      {
        id: 4,
        link: "https://www.linkedin.com/company/toponecrm?originalSubdomain=uk",
        icon: linkedinLogo,
      },
      {
        id: 5,
        link: "https://www.youtube.com/TopOneUK",
        icon: youtubeLogo,
      },
    ];
  }
  get preferences() {
    return [
      {
        type: "Your privacy",
        name: "privacy",
        allow: false,
      },
      {
        type: "Strictly necessary cookies",
        name: "necessary",
        allow: false,
      },
      {
        type: "Functionality cookies",
        name: "functionality",
        allow: false,
      },
      {
        type: "Targeting and advertising cookies",
        name: "advertising",
        allow: false,
      },
    ];
  }
  get contactInfo() {
    return {
      number: "0333 339 2226",
      email: "Contact@TopOne.UK",
      address: `Peebles Court 
                    21 Whitestone Way
                    Croydon CR0 4WL`,
    };
  }
  get bankInfo() {
    return {
      accountName: "TopOneCRM",
      accountNumber: " 17507311",
      accountSort: `23-05-80`,
      IBAN: `GB84MYMB23058017507311`,
      registrationNumber: `09707844`,
      vatNumber: `GB218823109`,
      reference: `CRM`,
    };
  }
  get about() {
    return {
      title: "Lorem Ipsum",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus odio nec aliquet varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ac tristique dolor. Donec vel est purus. Pellentesque sit amet condimentum nisl, id hendrerit nunc. Integer vel elit scelerisque, rutrum dolor sit amet, mollis massa. Fusce congue, orci vel porttitor tristique, mauris eros ornare libero, facilisis elementum enim sapien id quam. Proin quis maximus sem. Cras diam enim, fringilla et accumsan vitae, pharetra eget odio. Nulla sed diam vel nisl tempus cursus id nec felis.`,
    };
  }
  get visions() {
    return [
      {
        id: 1,
        title: "OFFICE 365 SOLUTIONS",
        nr: 30,
        logo: officeLogo,
      },
      {
        id: 2,
        title: "DYNAMICS 365 SOLUTIONS",
        nr: 50,
        logo: officeLogo,
      },
      {
        id: 3,
        title: "SHAREPOINT PROJECTS",
        nr: 36,
        logo: officeLogo,
      },
      {
        id: 4,
        title: "CLOUD SOLUTIONS",
        nr: 50,
        logo: officeLogo,
      },
      {
        id: 5,
        title: "SUPPORT TICKETS",
        nr: 100,
        logo: officeLogo,
      },
      {
        id: 6,
        title: "TRAINING SESSIONS",
        nr: 150,
        logo: officeLogo,
      },
    ];
  }

  get trainings() {
    return [
      {
        id: 1,
        title: "Personal Plan - £3 per user/month",
        link: "https://google.com",
        points: [`Asset Management`],
        image: [imgB],
        price: ["Basic"],
      },
      {
        id: 2,
        title: "Business Plan - £5 per user/month",
        link: "https://youtube.com",
        points: [`Asset Management`, `Dashboards`],
        image: [imgS],
        price: ["Business"],
      },

      {
        id: 3,
        title: "Enterprise Plan - £10 per user/month",
        link: "https://paypal.com",
        points: [`Asset Management`, `Dashboards`, `Workflows`, `Chatbot`],
        image: [imgG],
        price: ["Enterprise"],
      },
    ];
  }
  get trainings2() {
    return [
      {
        id: 1,
        title: "Silver Plan - £5 per user/month",
        link: "https://topone-developer.eventbrite.co.uk",
        points: [`Asset Management`, `Dashboards`],
        image: [imgS],
        price: ["Business"],
      },

      {
        id: 2,
        title: "Gold Plan - £10 per user/month",
        link: "https://topone-automated-marketing.eventbrite.co.uk",
        points: [`Asset Management`, `Dashboards`, `Workflows`, `Chatbot`],
        image: [imgG],
        price: ["Enterprise"],
      },

      {
        id: 3,
        title: "Bronze Plan - £3 per user/month",
        link: "https://topone-consultant.eventbrite.co.uk",
        points: [
          `Accounts Management`,
          `Contacts Management`,
          `Dashboards, Views, Search`,
        ],
        image: [imgB],
        price: ["Basic"],
      },
    ];
  }

  get trainings3() {
    return [
      {
        id: 1,
        title: "Enterprise Plan - £10 per user/month",
        link: "https://topone-automated-marketing.eventbrite.co.uk",
        points: [
          `Accounts Management`,
          `Contacts Management`,
          `Dashboards, Views, Search`,
          `Emails, Tasks, Posts,...`,
          `Advance Workflows`,
          `Power Automate(Flow)-NEW `,
          `Customisations`,
        ],
        image: [imgG],
        price: ["Enterprise"],
      },

      {
        id: 2,
        title: "Business Plan - £5 per user/month",
        link: "https://topone-developer.eventbrite.co.uk",
        points: [
          `Accounts Management`,
          `Contacts Management`,
          `Dashboards, Views, Search`,
          `Emails, Tasks, Posts,...`,
          `Advance Workflows`,
          `Customisations`,
        ],
        image: [imgS],
        price: ["Business"],
      },

      {
        id: 3,
        title: "Personal Plan - £3 per user/month",
        link: "https://topone-consultant.eventbrite.co.uk",
        points: [`Asset Management`],
        image: [imgB],
        price: ["Basic"],
      },
    ];
  }

  get products() {
    return [
      {
        id: 1,
        title: "TopOne CRM",
        img: pCRM,
        text: `TopOne CRM is very configurable and secure system, it can be used as One Onboarding platform for Financial Services meaning it is secure and scalable.`,
      },
      {
        id: 2,
        title: "TopOne CMS",
        img: pCMS,
        text: `Case management is the process of ensuring an organization’s cases are accounted for, deployed, maintained, upgraded, tracked, and disposed of when the time comes.`,
      },
      {
        id: 3,
        title: "TopOne App",
        img: sApp,
        text: `TopOne App makes sure that the valuable items, tangible and intangible, in your organization are tracked and being used. Moreover, it provides you with the opportunity to build custom apps, drive process automation and create efficiencies for businesses of all sizes.`,
      },
      {
        id: 4,
        title: "TopOne Platform",
        img: pPlatform,
        text: `A user friendly and secure platform which consolidate everything in one place.`,
      },
      {
        id: 5,
        title: "TopOne Portal",
        img: pPortal,
        text: `TopOne Portal is a web-based platform that provides employees, customers and suppliers with a single access point to information, this system is simple, scalable and helps 
               consolidate an organization`,
      },
      {
        id: 6,
        title: "TopOne Integrator",
        img: pIntegrator,
        text: `TopOne Integrator helps deliver a highly customized system that consists of several sub components to meet specific requirements of our clients.`,
      },
      {
        id: 7,
        title: "Legal Case Management",
        img: pLegal,
        text: `Cases organized and simplified to obtain quick results.`,
      },

      {
        id: 8,
        title: "Investigation Case Management",
        img: pInvestigation,
        text: `TopOne Investigations & Case Management Software makes it easy to create and report on investigation outcomes, findings, and corrective actions.`,
      },
      {
        id: 9,
        title: "Asset Management",
        img: pAssetManagement,
        text: `Interactive system that tracks, categorises and prioritises data while giving you a tailored experience.`,
      },
    ];
  }
}
export default new Database();
