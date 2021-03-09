import React, { useState, useEffect } from "react";
import "./Home.css";
import Card from "../Card/Card";
import Aos from "aos";
import { useCountUp } from "react-countup";
import "aos/dist/aos.css";
import IMG from "../Images/logo.png";
import DL from "../Images/design-left.png";
import DR from "../Images/design-right.png";
import BU from "../Images/scrolldown.png";
import CC from "../Images/coca-cola-logo.png";
import P from "../Images/paytm.png";
import SC from "../Images/snapchat.png";
import SP from "../Images/spotify.png";
import IX from "../Images/ixigo.png";
import JB from "../Images/jetbrains.png";
import WAVE from "../Images/wave.svg";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import Slider from "react-slick";
import WAVE from "../Images/wave.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const { countUp: countUp1, start: start1 } = useCountUp({
    start: "0",
    duration: "4",
    end: "5",
    startOnMount: false,
  });

  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   autoplay: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: "40px",
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: "40px",
  //         slidesToShow: 2,
  //       },
  //     },
  //   ],
  // };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };


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
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);



  const config = {
    dots: true,
    infinite: true,
    // arrows : false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [settings, setSettings] = useState(config);

  const products = [
    {
      img: {JB},
      title: 'Dolore magna',
      text: 'Lorem ipsum dolor sit amet elit ipsum.'
    },
    {
      img: '/images/product2.jpg',
      title: 'Eget est lorem',
      text: 'Lorem Ipsum adipiscing elit ipsum.'
    },
    {
      img: '/images/product3.jpg',
      title: 'Tempus imperdiet',
      text: 'Orci porta non pulvinar neque laoreet.'
    },
    {
      img: '/images/product4.jpg',
      title: 'Mattis rhoncus',
      text: 'Bibendum neque egestas congue quisque.'
    },
    {
      img: '/images/product5.jpg',
      title: 'Odio ut enim',
      text: 'Mattis rhoncus urna neque viverra justo.'
    }
  ]

  // const onChangeCenterMode = e => {
  //   if (e.target.checked) {
  //     setSettings({
  //       ...config,
  //       centerMode: true,
  //       centerPadding: '50px'
  //     });
  //   } else {
  //     setSettings(config);
  //   }
  // }

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
          <div className="col-12">
            <span className="iia">E-Summit 2021</span>
            <span className="vit">by E-cell VIT</span>
          </div>
          <a href="#stats">
          <div className="scroll-down"></div>
            <div className="scroll-down2"></div>
          </a>
          <div className="wave">
            <img className="wavy" src={WAVE} alt=""/>
          </div>
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
           

            About <br />
            E-Summit

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
          <h1 data-aos="fade-in" data-aos-offset="-2" className="events-head">
            Events
          </h1>
        </div>
        <div class="black-line"></div>
        <div class="list-item-wrapper">
          <div class="list-bullet"></div>

          <div class="list-item">
            <div class="list-title">29th April -- E-Talk</div>
            <div data-aos="zoom-in" data-aos-offset="-20" class="list-text">
              Prominent motivational speakers from the entrepreneurial
              environment will be delivering a talk to inspire the students and
              promote the ethos of entrepreneurship in the campus. This session
              will also be open to questions from the audience, thus furnishing
              the minds of the students with vivid ideas and a clearer picture
              of the entrepreneurship realm.
            </div>
          </div>
        </div>
        <div class="list-item-wrapper">
          <div class="list-bullet"></div>
          <div class="list-item">
            <div class="list-title">30th April -- VisionX</div>
            <div data-aos="zoom-in" data-aos-offset="-20" class="list-text">
              Startups are only half as innovative if they fail to understand
              the intricacies of their domain. To ensure that startups realise
              their true potential, VisionX nurtures young minds to incorporate
              technical concepts in their business models.
            </div>
          </div>
        </div>
        <div class="list-item-wrapper">
          <div class="list-bullet"></div>
          <div class="list-item">
            <div class="list-title">30th April -- Business workshop</div>
            <div data-aos="zoom-in" data-aos-offset="-20" class="list-text">
              The Business workshop of E-Summit brings with it the innate
              opportunity to discover the nuts and bolts of the startup world
              and explore various business avenues.
            </div>
          </div>
        </div>
        <div class="list-item-wrapper">
          <div class="list-bullet"></div>
          <div class="list-item">
            <div class="list-title">30th April - overnight -- E-Hack</div>
            <div data-aos="zoom-in" data-aos-offset="-20" class="list-text">
              A test of grit, resilience and innovation, E-Hack is an overnight
              Hackathon that challenges participants to come up with effective
              solutions to real-world problems.
            </div>
          </div>
        </div>
        <div class="list-item-wrapper">
          <div class="list-bullet"></div>
          <div class="list-item">
            <div class="list-title">1st May -- Med-Tech Challenge</div>
            <div data-aos="zoom-in" data-aos-offset="-20" class="list-text">
              Med-Tech challenge is a pitching competition that invites people
              to come up with ideas or prototypes capable of producing an
              impactful change in the medical sector. Visionary ideas with
              worthy pitches get incubation under VIT Technology Business
              Incubator.
            </div>
          </div>
        </div>
        <div class="list-item-wrapper">
          <div class="list-bullet"></div>
          <div class="list-item">
            <div class="list-title">1st May -- Innoventure</div>
            <div data-aos="zoom-in" data-aos-offset="-20" class="list-text">
              Innoventure is a business simulation which gives the participants
              an entrepreneurial ecosystem and platform to develop skills like
              product development, business analysis, inculcate knowledge about
              the trends in the current market and economic concepts like
              taxation which prevail important applications in day to day lives.
            </div>
          </div>
        </div>
        <div class="list-item-wrapper">
          <div class="list-bullet"></div>
          <div class="list-item">
            <div class="list-title">1st May -- Start-Up Internship Expo</div>
            <div data-aos="zoom-in" data-aos-offset="-20" class="list-text">
              Start-up Internship Expo will provide students with the chance of
              landing their dream internships. Major startups from all over
              India will become a part of this motion by providing exciting
              internship offers to bright minds, allowing them to enrich
              themselves with wisdom and knowledge of the real world.
            </div>
          </div>
        </div>
      </div>

      <div className="image-slider">
      <div className="slide-wrap">
        <Slider {...settings}>
          {products.map((x, i) => {
            return( 
            <div key={i} className="img-card">
              <img className="img" src={x.img} />
              <div class="card-body">
                <div className="card-title">{x.title}</div>
                <div className="card-text">{x.text}</div>
              </div>
          </div>
          )})}
      </Slider>
      </div>
      </div>

      <div className="past-sponsors" id="sponsors">
        <h1 className="past-sponsors-text">Past Sponsors</h1>
        <div class="grid-container">
          <div class="grid-item">
            <img src={CC} />
          </div>
          <div class="grid-item">
            <img src={P} />
          </div>
          <div class="grid-item">
            <img src={SP} />
          </div>
          <div class="grid-item">
            <img src={JB} />
          </div>
          <div class="grid-item">
            <img src={IX} />
          </div>
          <div class="grid-item">
            <img src={SC} />
          </div>
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
