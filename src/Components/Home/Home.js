import React, { useState, useEffect } from "react";
import "./Home.css";
import Aos from "aos";
import { useCountUp } from "react-countup";
import "aos/dist/aos.css";
import IMG from "../Images/logo.png";
import DL from "../Images/design-left.png";
import DR from "../Images/design-right.png";
import {Helmet} from "react-helmet";


function Home() {

  const { countUp: countUp1, start: start1 } = useCountUp({
    start: "0",
    duration: "4",
    end: "5",
    startOnMount: false
  });

  const { countUp: countUp2, start: start2 } = useCountUp({
    start: "0",
    duration: "4",
    end: "15",
    startOnMount: false
  });

  const { countUp: countUp3, start: start3 } = useCountUp({
    start: "0",
    duration: "4",
    end: "30",
    startOnMount: false
  });

  const { countUp: countUp4, start: start4 } = useCountUp({
    start: "5600",
    duration: "4",
    end: "6000",
    startOnMount: false
  });
  const handleScroll = () => {
    console.log(window.scrollY);
    if ((window.scrollY > 74 && window.scrollY < 85 ) || (window.scrollY > 670 && window.scrollY < 690 ) ) {
      start1();
      start2();
      start3();
      start4();
     // window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  // const [navbar, setNavbar] = useState(false);
  // const change = () => {
  //   if (window.scrollY >= 100) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // const func=()=>{
  //   const navLinks = document.querySelector(".nav-links");
  //   const links = document.querySelectorAll(".nav-links li");

  //     navLinks.classList.toggle("open");
  //     links.forEach((link) => {
  //       link.classList.toggle("fade");
  //     });
  // };

  // window.addEventListener("scroll", change);
  return (
    <div className="container">
      <div className="landing" id="home">
      <div className="header">
          <div class="containers">
            <div class="row align-items-center justify-content-between">
              <div class="logo">
              <img src={IMG} alt="logo" className="logo" />
              </div>
           <input type="checkbox" id="nav-check"/>
           <label for="nav-check" class="nav-toggler">
              <span></span>
           </label>
           <nav class="nav">
              <ul>
                 <li><a href="#home" class="active">Home</a></li>
                 <li><a href="#about">About Us</a></li>
                 <li><a href="#">Events</a></li>
                 <li><a href="#">Speakers</a></li>
                 <li><a href="#">Sponsors</a></li>
              </ul>
           </nav>
        </div>
        </div>
    </div>
        {/* <nav className={navbar ? "navbar active" : "navbar"}>
          <img src={IMG} alt="logo" className="logo" />
          <div className="hamburger" onClick={func}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#experts">Experts</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Sponsors</a>
            </li>
          </ul>
        </nav> */}
        {/* <div className={​​`hamburger ${​​menuOpen ? 'open' : ''}​​`} ​​onClick={​​onClick}​​>
            <div className='line1' />
            <div className='line2' />
            <div className='line3' />
          </div> */}
        <section>
          <img src={DL} className="design-left" />
          <img src={DR} className="design-right" />
        </section>
        <div className="counter">
          <div className="count">
            <p>{countUp1}</p>
            <p>days</p>
          </div>
          <div className="count">
            <p>{countUp2}+</p>
            <p>Events</p>
          </div>
          <div className="count">
            <p>{countUp3}+</p>
            <p>Speakers</p>
          </div>
          <div className="count">
            <p>{countUp4}+</p>
            <p>participants</p>
          </div>
        </div>
      </div>
      <div className="about-us" id="about">
          <div className="ecell">
            <h2 data-aos="fade-up" data-aos-offset="-20" id="a">
              About Ecell
            </h2>
            <div className="vertical-line"></div>
            <p data-aos="zoom-in" data-aos-offset="-20" id="pa">
              The Entrepreneurship Cell, VIT is a student club that aims at
              fostering entrepreneurial spirit among the students. E-Cell, VIT is in
              collaboration with Technology Business Incubator (TBI) under
              government of India. TBI along with E-Cell provides the students with
              an advanced platform for converting their potential small scale ideas
              into leading start-ups.
            </p>
          </div>
          <div className="esummit">
            <h2 data-aos="fade-up" data-aos-offset="-20" id="a">
              About Esummit
            </h2>
            <div className="vertical-line"></div>
            <p data-aos="zoom-in" data-aos-offset="-20" id="pa">
              E-Summit is the conclave which opens the doors to the world of
              entrepreneurship. With it's exclusive class of exhilarating events,
              wonderful workshops, exciting expos and the perfect panel of
              spectacular speakers, E-Summit aims at instilling a sense of
              innovation in the youth.
            </p>
            <p data-aos="zoom-in" data-aos-offset="-20" id="epa">
              E-Summit is the 3rd edition of the biggest business fest in South
              India. It is expected to have a massive turnout of participants thus
              providing a great platform for marketing and outreach.
            </p>
          </div>
        
      </div>
      {/* <div className="speaker" id="experts">
        <h2 id="s">Speakers</h2>
      </div> */}
    </div>
  );
}



export default Home;