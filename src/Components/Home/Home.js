import React, { useState, useEffect } from "react";
import "./Home.css";
import Aos from "aos";
import { useCountUp } from "react-countup";
import "aos/dist/aos.css";
import IMG from "../Images/logo.png";
import DL from "../Images/design-left.png";
import DR from "../Images/design-right.png";
import BU from "../Images/scrolldown.png";
import CC from "../Images/coca-cola-logo.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";

function Home() {
  const { countUp: countUp1, start: start1 } = useCountUp({
    start: "0",
    duration: "4",
    end: "5",
    startOnMount: false,
  });

  const { countUp: countUp2, start: start2 } = useCountUp({
    start: "0",
    duration: "4",
    end: "15",
    startOnMount: false,
  });

  const { countUp: countUp3, start: start3 } = useCountUp({
    start: "0",
    duration: "4",
    end: "30",
    startOnMount: false,
  });

  const { countUp: countUp4, start: start4 } = useCountUp({
    start: "5600",
    duration: "4",
    end: "6000",
    startOnMount: false,
  });
  const handleScroll = () => {
    console.log(window.scrollY);
    if (
      (window.scrollY > 74 && window.scrollY < 85) ||
      (window.scrollY > 670 && window.scrollY < 690)
    ) {
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

  return (
    <div className="container">
      <div className="landing" id="home">
        <div className="header">
          <div class="containers">
            <div class="row align-items-center justify-content-between">
              <div class="logo">
                <img src={IMG} alt="logo" className="logo" />
              </div>
              <input type="checkbox" id="nav-check" />
              <label for="nav-check" class="nav-toggler">
                <span></span>
              </label>
              <nav class="nav">
                <ul>
                  <li>
                    <a href="#home" class="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#events">Events</a>
                  </li>
                  <li>
                    <a href="#">Speakers</a>
                  </li>
                  <li>
                    <a href="#sponsors">Sponsors</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <section>
          <img src={DL} className="design-left" />
          <div className="col-12">
            <span className="iia">E-Summit 2021</span>
            <span className="vit">by E-cell VIT</span>
          </div>
          <img src={DR} className="design-right" />
          <a href="#stats">
            <img src={BU} className="scroll-button" />
          </a>
        </section>
      </div>
      <div className="counter" id="stats">
        <div className="count">
          <p className="color">{countUp1}</p>
          <p>Days</p>
        </div>
        <div className="count">
          <p className="color">{countUp2}+</p>
          <p>Events</p>
        </div>
        <div className="count">
          <p className="color">{countUp3}+</p>
          <p>Speakers</p>
        </div>
        <div className="count">
          <p className="color">{countUp4}+</p>
          <p>Participants</p>
        </div>
      </div>
      <div className="about-us" id="about">
        <div className="ecell">
          <h2 data-aos="fade-up" data-aos-offset="-20" id="a">
            About E-cell
          </h2>
          <div className="vertical-line"></div>
          <p data-aos="zoom-in" data-aos-offset="-20" id="pa">
            The Entrepreneurship Cell, VIT is a student club that aims at
            fostering entrepreneurial spirit among the students. E-Cell, VIT is
            in collaboration with Technology Business Incubator (TBI) under
            government of India. TBI along with E-Cell provides the students
            with an advanced platform for converting their potential small scale
            ideas into leading start-ups.
          </p>
        </div>
        <div className="esummit">
          <h2 data-aos="fade-up" data-aos-offset="-20" id="a">
            About E-Summit
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

      <div class="list-wrapper">
        <div id="events">
          <h1 className="events-head">Events</h1>
        </div>
        <div class="black-line"></div>
        <div class="list-item-wrapper">
          <div class="list-bullet"></div>

          <div class="list-item">
            <div class="list-title">This is the top item</div>
            <div class="list-text">
              The parallels with the alcoholic republic of two hundred years ago
              are hard to miss. Before the changes in lifestyle, before the
              clever marketing, comes the mountain of cheap corn.{" "}
            </div>
          </div>
        </div>
        <div class="list-item-wrapper">
          <div class="list-bullet"></div>
          <div class="list-item">
            <div class="list-title">This is an item</div>
            <div class="list-text">
              But the outcome of our national drinking binge is not nearly as
              relevant to our own situation as its underlying cause. Which, put
              simply, was this: American farmers were producing far too much
              corn.{" "}
            </div>
          </div>
        </div>
        <div class="list-item-wrapper">
          <div class="list-bullet"></div>
          <div class="list-item">
            <div class="list-title">This is an item</div>
            <div class="list-text">
              But the outcome of our national drinking binge is not nearly as
              relevant to our own situation as its underlying cause. Which, put
              simply, was this: American farmers were producing far too much
              corn.{" "}
            </div>
          </div>
        </div>
        <div class="list-item-wrapper">
          <div class="list-bullet"></div>
          <div class="list-item">
            <div class="list-title">This is an item</div>
            <div class="list-text">
              But the outcome of our national drinking binge is not nearly as
              relevant to our own situation as its underlying cause. Which, put
              simply, was this: American farmers were producing far too much
              corn.{" "}
            </div>
          </div>
        </div>
        <div class="list-item-wrapper">
          <div class="list-bullet"></div>
          <div class="list-item">
            <div class="list-title">This is the bottom item</div>
            <div class="list-text">
              In the early years of the nineteenth century, Americans began
              drinking more than they ever had before or since, embarking on a
              collective bender that confronted the young republic with its
              first major public health crisis -- the obesity epidemic of its
              day.{" "}
            </div>
          </div>
          <div class="yellow-line"></div>
        </div>
      </div>
      <div className="past-sponsors" id="sponsors">
        <h1 className="past-sponsors-text">Past Sponsors</h1>
        <div class="grid-container">
          <div class="grid-item">
            <img src={CC} />
          </div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
        </div>
      </div>
      <div className="registration">
        <h1 className="reg-head">Register Now !</h1>
        <p className="reg-para">Registrations opening soon.</p>
      </div>
      <div className="footer">
        <div className="footer-item">
          <img src={IMG} alt="E-summit VIT" />
        </div>
        <div className="footer-item">
          <span className="iia">IDEATE. INNOVATE. ACTUATE.</span>
        </div>
        <div className="footer-item">
          <a href="mailto:helloecellvit@gmail.com">helloecellvit@gmail.com</a>
        </div>
        <div className="footer-item">
          <a href="tel:+919971523455">+919971523455</a>
        </div>
        {/* <Social position="bottom" /> */}
        <div className="bottom">
          <div style={{ display: "block" }}>
            <a href="https://twitter.com/ecell_vit">
              <span>
                <TwitterIcon />
              </span>
            </a>
            <a href="https://www.facebook.com/ecellvit">
              <span>
                <FacebookIcon />
              </span>
            </a>
            <a href="https://www.linkedin.com/company/ecellvitvellore">
              <span>
                <LinkedInIcon />
              </span>
            </a>
            <a href="https://medium.com/e-cell-vit">
              <span>
                <MailIcon />
              </span>
            </a>
            <a href="https://www.instagram.com/ecell_vit">
              <span>
                <InstagramIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
