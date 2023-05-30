import React from "react";
import { useState, useEffect } from "react";
import Script from "next/script";
import Head from "next/head";

const IndexPage = () => {
  const [selectDate1, setSelectDate1] = useState(true);
  const [selectDate2, setSelectDate2] = useState(false);
  const [selectDate3, setSelectDate3] = useState(false);
  const [color, setColor] = useState("bg-transparent black");
  const [bgColor, setBgColor] = useState("")
  const [shadow, setShadow] = useState("");
  const [open, setOpen] = useState(false);

  const HandleSelectDate1 = () => {
    setSelectDate1(!selectDate1);
    setSelectDate2(false);
    setSelectDate3(false);
  };
  const HandleSelectDate2 = () => {
    setSelectDate1(false);
    setSelectDate2(!selectDate2);
    setSelectDate3(false);
  };
  const HandleSelectDate3 = () => {
    setSelectDate1(false);
    setSelectDate2(false);
    setSelectDate3(!selectDate3);
  };

  const HandleMenu = () => {
    setOpen(!open);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setColor("bg-black red");
        setBgColor("white")
      } else {
        setColor("bg-transparent");
        setBgColor("")
      }
      if (window.scrollY > 10) {
        setShadow("shadow-md");
      }
      else{
        setShadow("")
      }
    });
  }, [color]);
  return (
    <>
      <Head>
        <title>Eventium</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="stylesheet" href="../../css/eventium-assets.min.css" />
        <link rel="stylesheet" type="text/css" href="" />
        <Script src="../../js/eventium-plugins.min.js"></Script>
        <Script src="../../js/countdown.js"></Script>
        <Script src="../../js/jquery.countTo.js"></Script>
        <Script src="../../js/popper.js"></Script>
        <Script src="../../js/bootstrap.min.js"></Script>
        <Script src="http://maps.google.com/maps/api/js?key=AIzaSyCiqrIen8rWQrvJsu-7f4rOta0fmI5r2SI&amp;sensor=false&amp;language=en"></Script>
        <Script src="../../js/gmap3.min.js"></Script>
        <Script src="../../js/script.js"></Script>
      </Head>
      {/* Container */}
      <div id="container" className="">
        {/* Header
            ================================================== */}
        <header className="clearfix fourth-style">
          <nav
            className={`navbar navbar-expand-lg  navbar-scrolled ${color}  ${shadow} `}
            style={{transition: 0.2}}
          >
            <div className="container">
              <div className="flex w-full justify-between">
                <a
                  className="navbar-brand bg-white m-2 px-2 rounded-lg"
                  href="index.html"
                >
                  <img src="../../images/bickdrim logo.png" alt="" />
                </a>
                <button
                  className="navbar-toggler m-2"
                  style={{background:bgColor}}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() => HandleMenu()}
                >
                  <span className="navbar-toggler-icon" />
                </button>
              </div>
              <div
                className={`collapses navbar-collapses max-[550px]:py-3 ${
                  !open ? "max-[991px]:hidden" : ""
                } max-[991px]:bg-black w-full`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto navigate-sections">
                  <li className="nav-item drop-link">
                    <a
                      className="nav-link  min-[991px]:active"
                      href="#home-section"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item drop-link">
                    <a className="nav-link" href="#about-section">
                      About
                    </a>
                  </li>
                  <li className="nav-item drop-link">
                    <a className="nav-link" href="#speakers-section">
                      Speakers
                    </a>
                  </li>
                  <li className="nav-item drop-link">
                    <a className="nav-link" href="#agenda-section">
                      Agenda
                    </a>
                  </li>
                  <li className="nav-item drop-link">
                    <a className="nav-link" href="#partners-section">
                      Partners
                    </a>
                  </li>
                  <li className="nav-item drop-link">
                    <a className="nav-link" href="#tickets-section">
                      Tickets
                    </a>
                  </li>
                  <li className="nav-item drop-link">
                    <a className="nav-link" href="#contacts-section">
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* End Header */}
        {/* promo-banner-section
          ================================================== */}
        <section className="promo-banner-section3" id="home-section">
          <div className="container">
            <div className="promo-banner-box">
              <h1>
                Digital Economy <br /> Conference 2018
              </h1>
              <span>13-15 April 2018, San Francisco</span>
              <a className="default-button" href="#">
                Buy Ticket
              </a>
            </div>
          </div>
        </section>
        {/* End promo-banner section */}
        {/* about-conference-section 
          ================================================== */}
        <section className="about-conference-section" id="about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="article-box">
                  <div className="title-line">
                    <span>About conference</span>
                    <h1>
                      Successfully plan, create, and deliver strategic content.
                    </h1>
                  </div>
                  <p>
                    <span>
                      Sed pretium, ligula sollicitudin laoreet viverra, tortor
                      libero sodales leo, eget blandit nunc tortor eu nibh.
                      Nullam mollis. Ut justo.{" "}
                    </span>
                  </p>
                  <p>
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                    nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                    pretium, ligula sollicitudin laoreet viverra, tortor libero
                    sodales leo, eget blandit nunc tortor eu nibh. Nullam
                    mollis. Ut justo. Suspendisse potenti.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="images-box second-style">
                  <img src="/upload/others/art4.jpg" alt="" />
                  <img src="/upload/others/art3.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-10 mb-16 gap-20 max-[550px]:flex-col max-[991px]:flex-col">
              <div className="left flex w-1/2 gap-2 max-[550px]:flex-col max-[550px]:w-full max-[991px]:w-full">
                <div className="flex flex-col justify-between gap-8 w-1/2 mx-2 max-[550px]:w-full">
                  <div className="bg-violet-700 rounded-lg px-5 py-16 max-[991px]:py-8 max-[991px]:px-2">
                    <div className="text-7xl text-green-500">
                      <i className="ionicons ion-speakerphone" />
                    </div>
                    <div className="py-1">
                      <p className="text-2xl text-white">Marketing</p>
                    </div>
                    <div className="py-1">
                      <p className="text-white">
                        Donec nec justo eget felis facilisis fermentum. Aliquam
                        porttitor mauris sit ametorci.
                      </p>
                    </div>
                  </div>
                  <div className="bg-violet-700 rounded-lg px-5 py-16 max-[991px]:py-8 max-[991px]:px-2 flex flex-col grow">
                    <div className="text-7xl text-green-500">
                      <i className="ionicons ion-social-bitcoin-outline" />
                    </div>
                    <div className="py-1">
                      <p className="text-2xl text-white">Financing</p>
                    </div>
                    <div className="py-1">
                      <p className="text-white">
                        Sed egestas, ante et vulputate volutpat, eros pede
                        semper est, vitae luctus metus libero eu augue.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-8 w-1/2 mx-2 max-[550px]:w-full max-[550px]:mt-5">
                  <div className="bg-violet-700 rounded-lg px-5 py-16 max-[991px]:py-8 max-[991px]:px-2 flex flex-col grow">
                    <div className="text-7xl text-green-500">
                      <i className="ionicons ion-ios-book-outline" />
                    </div>
                    <div className="py-1">
                      <p className="text-2xl text-white">Business Growth</p>
                    </div>
                    <div className="py-1">
                      <p className="text-white">
                        Phasellus lacinia, magna a ullamcorper laoreet, lectus
                        arcu pulvinar risus, vitae facilisis libero dolor a
                        purus.
                      </p>
                    </div>
                  </div>
                  <div className="bg-violet-700 rounded-lg px-5 py-16 max-[991px]:py-8 max-[991px]:px-2">
                    <div className="text-7xl text-green-500">
                      <i className="ionicons ion-ios-pulse" />
                    </div>
                    <div className="py-1">
                      <p className="text-2xl text-white">Business Strategy</p>
                    </div>
                    <div className="py-1">
                      <p className="text-white">
                        Morbi purus libero, faucibus adipiscing, commodo gravida
                        id, est.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right w-1/2 flex flex-col justify-evenly max-[550px]:w-full max-[991px]:w-full">
                <div>
                  <p className="text-4xl leading-tight text-black font-normal">
                    Workshops
                  </p>
                  <div className="w-16 h-2 border-b border-black mb-3"></div>
                  <p className="text-gray-400 leading-loose">
                    Phasellus hendrerit. Pellentesque aliquet nibh ne c urna. In
                    nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                    pretium, ligula sollicitudin laoreet viverra, tortor libero
                    sodales leo.
                  </p>
                  <p className="text-gray-400 leading-loose">
                    Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas,
                    ante et vulputate volutpat, eros pede semper est, vitae
                    luctus metus libero eu augue.
                  </p>
                  <p className="text-violet-900">
                    <a href="">and much more ...</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="about-event-box">
              <div className="row">
                <div className="col-lg-4">
                  <h2>
                    Where? <i className="ionicons ion-ios-location-outline" />
                  </h2>
                  <p>
                    USA, California <br /> Brookwood Ave, San Jose
                  </p>
                  <a href="#contacts-section" className="scroll-btn">
                    view map
                  </a>
                </div>
                <div className="col-lg-4">
                  <h2>
                    When? <i className="ionicons ion-ios-calendar-outline" />
                  </h2>
                  <p>
                    Friday to Sunday <br /> 13 april to 15 april 2018
                  </p>
                  <a href="#agenda-section" className="scroll-btn">
                    view agenda
                  </a>
                </div>
                <div className="col-lg-4">
                  <h2>
                    Who? <i className="ionicons ion-ios-people-outline" />
                  </h2>
                  <p>
                    3 days / 15 talks <br /> 20 speakers / 6 workshops
                  </p>
                  <a href="#speakers-section" className="scroll-btn">
                    view speakers
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End about-conference section */}
        {/* speaking-section2
          ================================================== */}
        <section className="speaking-section3">
          <div className="container">
            <div className="title-section center">
              <span>Speaker style three</span>
              <h1>Who's speaking?</h1>
              <p>
                Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate
                volutpat, eros pede semper est, vitae luctus metus libero eu
                augue. Morbi purus libero, faucibus adipiscing, commodo quis,
                gravida id, est. Sed lectus. Praesent elementum hendrerit
                tortor.{" "}
              </p>
            </div>
            <div className="speakers-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="speaker-post flex max-[550px]:flex-col">
                    <a href="#" className="flex">
                      <img src="/upload/speakers/sp1.jpg" alt="" className="" />
                    </a>
                    <div className="speaker-content">
                      <h2>
                        <a href="#">Daniel Robert</a>
                      </h2>
                      <span>CEO, Founder at GBC</span>
                      <p>
                        Sed egestas, ante et vulput ate volutpat, eros pede
                        semper est, vitae luctus metus libero eu augue.{" "}
                      </p>
                      <ul className="social-links">
                        <li>
                          <a className="facebook" href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a className="linkedin" href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a className="personal-web" href="#">
                            <i className="fa fa-link" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="speaker-post flex max-[550px]:flex-col">
                    <a href="#" className="flex">
                      <img src="/upload/speakers/sp2.jpg" alt="" className="" />
                    </a>
                    <div className="speaker-content">
                      <h2>
                        <a href="#">Katie Stricker</a>
                      </h2>
                      <span>Brand Manager</span>
                      <p>
                        Sed egestas, ante et vulput ate volutpat, eros pede
                        semper est, vitae luctus metus libero eu augue.{" "}
                      </p>
                      <ul className="social-links">
                        <li>
                          <a className="facebook" href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a className="linkedin" href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="speaker-post flex max-[550px]:flex-col">
                    <a href="#" className="flex">
                      <img src="/upload/speakers/sp3.jpg" alt="" className="" />
                    </a>
                    <div className="speaker-content">
                      <h2>
                        <a href="#">Jack Peterson</a>
                      </h2>
                      <span>Head Engineering</span>
                      <p>
                        Sed egestas, ante et vulput ate volutpat, eros pede
                        semper est, vitae luctus metus libero eu augue.{" "}
                      </p>
                      <ul className="social-links">
                        <li>
                          <a className="facebook" href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a className="linkedin" href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a className="personal-web" href="#">
                            <i className="fa fa-link" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="speaker-post flex max-[550px]:flex-col">
                    <a href="#" className="flex">
                      <img src="/upload/speakers/sp4.jpg" alt="" className="" />
                    </a>
                    <div className="speaker-content">
                      <h2>
                        <a href="#">Andrea Willson</a>
                      </h2>
                      <span>Brand Manager</span>
                      <p>
                        Sed egestas, ante et vulput ate volutpat, eros pede
                        semper est, vitae luctus metus libero eu augue.{" "}
                      </p>
                      <ul className="social-links">
                        <li>
                          <a className="facebook" href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End speaking section2 */}
        {/* event-banner-section 
          ================================================== */}
        <section className="event-banner-section">
          <div className="container">
            <div className="title-section white-style center">
              <h1>Be a part of a great event.</h1>
              <p>
                Sed egestas, ante et vulputate volutpat, eros pede semper est,{" "}
                <br /> vitae luctus metus libero eu augue.{" "}
              </p>
              <a href="#" className="default-button">
                HURRY UP and Register Now
              </a>
            </div>
          </div>
        </section>
        {/* End event-banner section */}
        {/* schedule-section2 
          ================================================== */}
        <section className="schedule-section2" id="agenda-section">
          <div className="container">
            <div className="schedule-box">
              <div className="title-section center">
                <span className="italic-style">Agenda</span>
                <h1>Course sсhedule</h1>
                <p>
                  Suspendisse potenti. Sed egestas, ante et vulputate volutpat,
                  eros pede semper est, vitae luctus metus libero eu augue.
                  Morbi purus libero, faucibus adipiscing, commodo quis, gravida
                  id, est. Sed lectus. Praesent elementum hendrerit tortor.{" "}
                </p>
              </div>
              <div className="schedule-tabs">
                <nav className="nav nav-tabs" id="myTab" role="tablist">
                  <a
                    className="cursor-pointer nav-item nav-link"
                    id="nav-friday-tab"
                    data-toggle="tab"
                    
                    role="tab"
                    aria-controls="nav-friday"
                    aria-selected={selectDate1}
                    onClick={() => HandleSelectDate1()}
                  >
                    Week 1 (july 1 - 7)
                  </a>
                  <a
                    className="cursor-pointer nav-item nav-link"
                    id="nav-saturday-tab"
                    data-toggle="tab"
                    
                    role="tab"
                    aria-controls="nav-saturday"
                    aria-selected={selectDate2}
                    onClick={() => HandleSelectDate2()}
                  >
                    Week 2 (July 8 - 14 )
                  </a>
                  <a
                    className="cursor-pointer nav-item nav-link"
                    id="nav-sunday-tab"
                    data-toggle="tab"
                    
                    role="tab"
                    aria-controls="nav-sunday"
                    aria-selected={selectDate3}
                    onClick={() => HandleSelectDate3()}
                  >
                    Week 3 (July 8 - 14 )
                  </a>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-friday"
                    role="tabpanel"
                    aria-labelledby="nav-friday-tab"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="schedule-post">
                          <img src="/upload/others/sc1.jpg" alt="" />
                          <div className="schedule-cont">
                            <span className="time">10:00-11:00</span>
                            <p className="schedule-title">
                              Pellentesque aliquet nibh.
                            </p>
                            <p>
                              Suspendisse potenti. Sed egestas, ante et
                              vulputate volutpat, eros pede semper est, vitae
                              luctus metus libero eu augue.
                            </p>
                            <p className="schedule-auth">
                              by <span>Hubert Aguilar</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="schedule-post">
                          <img src="/upload/others/sc2.jpg" alt="" />
                          <div className="schedule-cont">
                            <span className="time">11:00-12:00</span>
                            <p className="schedule-title">
                              In nisi neque, aliquet vel.{" "}
                            </p>
                            <p>
                              Morbi purus libero, faucibus adipiscing, commodo
                              quis, gravida id, est. Sed lectus. Praesent
                              elementum hendrerit tortor.{" "}
                            </p>
                            <p className="schedule-auth">
                              by <span>John Cornick</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="schedule-post time-off-item">
                          <i className="ionicons ion-coffee" />
                          <div className="schedule-cont">
                            <span className="time">12:00-13:30</span>
                            <span className="time-off">Lunch Time!</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="schedule-post">
                          <img src="/upload/others/sc3.jpg" alt="" />
                          <div className="schedule-cont">
                            <span className="time">13:30-15:00</span>
                            <p className="schedule-title">
                              Nullam mollis ut justo pedisse potenti.
                            </p>
                            <p>
                              Sed lectus. Praesent elementum hendrerit tortor.
                              Sed semper lorem at felis.{" "}
                            </p>
                            <p className="schedule-auth">
                              by <span>Dalim Cumar</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="schedule-post">
                          <img src="/upload/others/sc4.jpg" alt="" />
                          <div className="schedule-cont">
                            <span className="time">15:00-16:00</span>
                            <p className="schedule-title">
                              Vestibulum auctor dapibus neque.
                            </p>
                            <p>
                              Vestibulum volutpat, lacus a ultrices sagittis, mi
                              neque euismod dui, eu pulvinar nunc sapien ornare
                              nisl.{" "}
                            </p>
                            <p className="schedule-auth">
                              by <span>Seth Rollis</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="schedule-post">
                          <img src="/upload/others/sc5.jpg" alt="" />
                          <div className="schedule-cont">
                            <span className="time">16:00-16:30</span>
                            <p className="schedule-title">
                              Aliquam tincidunt mauris eu risus.
                            </p>
                            <p>
                              Phasellus pede arcu, dapibus eu, fermentum et,
                              dapibus sed, urna.
                            </p>
                            <p className="schedule-auth">
                              by <span>Sophie Lana</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-saturday"
                    role="tabpanel"
                    aria-labelledby="nav-saturday-tab"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="schedule-post">
                          <img src="/upload/others/sc1.jpg" alt="" />
                          <div className="schedule-cont">
                            <span className="time">10:00-11:00</span>
                            <p className="schedule-title">
                              Pellentesque aliquet nibh.
                            </p>
                            <p>
                              Suspendisse potenti. Sed egestas, ante et
                              vulputate volutpat, eros pede semper est, vitae
                              luctus metus libero eu augue.
                            </p>
                            <p className="schedule-auth">
                              by <span>Hubert Aguilar</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="schedule-post">
                          <img src="/upload/others/sc2.jpg" alt="" />
                          <div className="schedule-cont">
                            <span className="time">11:00-12:00</span>
                            <p className="schedule-title">
                              In nisi neque, aliquet vel.{" "}
                            </p>
                            <p>
                              Morbi purus libero, faucibus adipiscing, commodo
                              quis, gravida id, est. Sed lectus. Praesent
                              elementum hendrerit tortor.{" "}
                            </p>
                            <p className="schedule-auth">
                              by <span>John Cornick</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="schedule-post time-off-item">
                          <i className="ionicons ion-coffee" />
                          <div className="schedule-cont">
                            <span className="time">12:00-13:30</span>
                            <span className="time-off">Lunch Time!</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="schedule-post">
                          <img src="/upload/others/sc3.jpg" alt="" />
                          <div className="schedule-cont">
                            <span className="time">13:30-15:00</span>
                            <p className="schedule-title">
                              Nullam mollis ut justo pedisse potenti.
                            </p>
                            <p>
                              Sed lectus. Praesent elementum hendrerit tortor.
                              Sed semper lorem at felis.{" "}
                            </p>
                            <p className="schedule-auth">
                              by <span>Dalim Cumar</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="schedule-post">
                          <img src="/upload/others/sc4.jpg" alt="" />
                          <div className="schedule-cont">
                            <span className="time">15:00-16:00</span>
                            <p className="schedule-title">
                              Vestibulum auctor dapibus neque.
                            </p>
                            <p>
                              Vestibulum volutpat, lacus a ultrices sagittis, mi
                              neque euismod dui, eu pulvinar nunc sapien ornare
                              nisl.{" "}
                            </p>
                            <p className="schedule-auth">
                              by <span>Seth Rollis</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="schedule-post">
                          <img src="/upload/others/sc5.jpg" alt="" />
                          <div className="schedule-cont">
                            <span className="time">16:00-16:30</span>
                            <p className="schedule-title">
                              Aliquam tincidunt mauris eu risus.
                            </p>
                            <p>
                              Phasellus pede arcu, dapibus eu, fermentum et,
                              dapibus sed, urna.
                            </p>
                            <p className="schedule-auth">
                              by <span>Sophie Lana</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-sunday"
                    role="tabpanel"
                    aria-labelledby="nav-sunday-tab"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="schedule-post">
                          <img src="/upload/others/sc1.jpg" alt="" />
                          <div className="schedule-cont">
                            <span className="time">10:00-11:00</span>
                            <p className="schedule-title">
                              Pellentesque aliquet nibh.
                            </p>
                            <p>
                              Suspendisse potenti. Sed egestas, ante et
                              vulputate volutpat, eros pede semper est, vitae
                              luctus metus libero eu augue.
                            </p>
                            <p className="schedule-auth">
                              by <span>Hubert Aguilar</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="schedule-post">
                          <img src="upload/others/sc2.jpg" alt="" />
                          <div className="schedule-cont">
                            <span className="time">11:00-12:00</span>
                            <p className="schedule-title">
                              In nisi neque, aliquet vel.{" "}
                            </p>
                            <p>
                              Morbi purus libero, faucibus adipiscing, commodo
                              quis, gravida id, est. Sed lectus. Praesent
                              elementum hendrerit tortor.{" "}
                            </p>
                            <p className="schedule-auth">
                              by <span>John Cornick</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="schedule-post time-off-item">
                          <i className="ionicons ion-coffee" />
                          <div className="schedule-cont">
                            <span className="time">12:00-13:30</span>
                            <span className="time-off">Lunch Time!</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="schedule-post">
                          <img src="/upload/others/sc3.jpg" alt="" />
                          <div className="schedule-cont">
                            <span className="time">13:30-15:00</span>
                            <p className="schedule-title">
                              Nullam mollis ut justo pedisse potenti.
                            </p>
                            <p>
                              Sed lectus. Praesent elementum hendrerit tortor.
                              Sed semper lorem at felis.{" "}
                            </p>
                            <p className="schedule-auth">
                              by <span>Dalim Cumar</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="schedule-post">
                          <img src="/upload/others/sc4.jpg" alt="" />
                          <div className="schedule-cont">
                            <span className="time">15:00-16:00</span>
                            <p className="schedule-title">
                              Vestibulum auctor dapibus neque.
                            </p>
                            <p>
                              Vestibulum volutpat, lacus a ultrices sagittis, mi
                              neque euismod dui, eu pulvinar nunc sapien ornare
                              nisl.{" "}
                            </p>
                            <p className="schedule-auth">
                              by <span>Seth Rollis</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="schedule-post">
                          <img src="/upload/others/sc5.jpg" alt="" />
                          <div className="schedule-cont">
                            <span className="time">16:00-16:30</span>
                            <p className="schedule-title">
                              Aliquam tincidunt mauris eu risus.
                            </p>
                            <p>
                              Phasellus pede arcu, dapibus eu, fermentum et,
                              dapibus sed, urna.
                            </p>
                            <p className="schedule-auth">
                              by <span>Sophie Lana</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="center-area">
                    <a className="default-button" href="#">
                      Register now and buy ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End schedule section2 */}
        {/* clients-section 
          ================================================== */}
        <section className="clients-section3" id="partners-section">
          <div className="container">
            <div className="title-section center">
              <span className="italic-style">Our Partners</span>
              <h1>Partners and Sponsors</h1>
              <p>
                Praesent elementum hendrerit tortor. Sed semper lorem at felis.
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
                dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                dapibus eu, fermentum et, dapibus sed, urna.
              </p>
            </div>
            <div className="client-box">
              <ul className="client-list">
                <li>
                  <a href="#">
                    <img src="/images/clients/1.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/clients/2.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/clients/3.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/clients/4.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/clients/5.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/clients/6.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* End clients section */}
        {/* pricing-section 
          ================================================== */}
        <section
          className="pricing-section with-back-image"
          id="tickets-section"
        >
          <div className="container">
            <div className="title-section center white-style">
              <span className="italic-style">Buy tickets</span>
              <h1>Pricing Tables</h1>
            </div>
            <div className="pricing-box">
              <div className="row">
                <div className="col-lg-5">
                  <div className="table-box">
                    <h2>Early Bird</h2>
                    <p>
                      <span>CFA 40,000</span>
                    </p>
                    <ul className="pricing-list">
                      <li>Entrance</li>
                      <li>Coffee Break</li>
                      <li>Launch</li>
                      <li>Photos Allowed</li>
                      <li>Certificate</li>
                      <li>Workshop</li>
                    </ul>
                    <a href="#" className="default-button">
                      Register Now
                    </a>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="table-box">
                    <h2>Standard</h2>
                    <p>
                      <span>CFA 50,000</span>
                    </p>
                    <ul className="pricing-list">
                      <li>Entrance</li>
                      <li>Coffee Break</li>
                      <li>Launch</li>
                      <li>Photos Allowed</li>
                      <li>Certificate</li>
                      <li>Workshop</li>
                    </ul>
                    <a href="#" className="default-button">
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End pricing section */}
      {/* countdown-section 
          ================================================== */}
      <section className="countdown-section">
        <div className="container">
          <div className="inner-countdown">
            <h2>Time Left Until The Conference Start</h2>
            <div id="clock">
              <div className="comming-part">
                <span id="days" />
                <p>Days</p>
              </div>
              <div className="comming-part">
                <span id="hours" />
                <p>:</p>
                <span id="minutes" />
                <p>:</p>
                <span id="seconds" />
              </div>
            </div>
            <h2>13-15 April 2018, San Francisco</h2>
          </div>
        </div>
      </section>
      {/* End countdown section */}
      {/* contact-section 
          ================================================== */}
      <section
        className="contact-section3 without-padding"
        id="contacts-section"
      >
        <div className="container">
          <div className="title-section center">
            <span className="italic-style">Contact us</span>
            <h1>Venue and info</h1>
          </div>
          <div className="contact-box">
            <div className="contact-info">
              <div className="row">
                <div className="col-md-4">
                  <p className="large-ico">
                    <i className="ionicons ion-ios-location-outline" /> <br />{" "}
                    Brookwood Ave San Jose, CA 95116
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="large-ico">
                    <i className="ionicons ion-ios-telephone-outline" /> <br />
                    1-800-123-1234
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="large-ico">
                    <i className="ionicons ion-ios-email-outline" /> <br />
                    gbc@mail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <form id="contact-form">
            <h2>Get in touch</h2>
            <div className="row">
              <div className="col-md-4">
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Your Name*"
                />
              </div>
              <div className="col-md-4">
                <input
                  name="mail"
                  id="mail"
                  type="text"
                  placeholder="Your Email*"
                />
              </div>
              <div className="col-md-4">
                <input
                  name="subject"
                  id="subject"
                  type="text"
                  placeholder="Interested Plan"
                />
              </div>
            </div>
            <textarea
              name="comment"
              id="comment"
              placeholder="Message*"
              defaultValue={""}
            />
            <div className="center-area">
              <input type="submit" id="submit_contact" defaultValue="Send" />
            </div>
            <div id="msg" className="message" />
          </form>
        </div>
      </section>
      {/* End contact section */}
      {/* footer 
          ================================================== */}
      <footer>
        <div className="container">
          <div className="up-footer">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-widget connect-widget">
                  <h2>Connect with us</h2>
                  <p>Get the latest updates.</p>
                  <ul className="social-icons">
                    <li>
                      <a className="facebook" href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a className="youtube" href="#">
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-widget subscribe-widget">
                  <h2>Join the Newsletter</h2>
                  <p>Creativity happens everywhere.</p>
                  <form className="subscribe">
                    <input
                      type="text"
                      name="enter-your-email"
                      id="enter-your-email"
                      placeholder="enter your email ..."
                    />
                    <input
                      type="submit"
                      name="subscribe-button"
                      id="subscribe-button"
                      defaultValue="Subscribe"
                    />
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-widget text-widget">
                  <h2>What is Business Conference</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna nibh, viverra non, semper
                    suscipit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="copyright-line">© Copyright Instanvi Academy</p>
        </div>
      </footer>

      {/* End footer */}
      {/* End Container */}

      {/* <div className="preloader">
        <img alt="" src="images/loader.gif" />
      </div> */}
    </>
  );
};

export default IndexPage;
