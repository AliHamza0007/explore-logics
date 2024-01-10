import Navbar from "../components/Navbar";
import Slider from "./Slider";
import { Element } from "react-scroll";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import TrustedBrands from "./TrustedBrands";
import Footer from "../components/Footer";
import Map from "./Map";
import Contact from "./Contact";
import { TbMessageCircle2Filled } from "react-icons/tb";
import Flash from "react-reveal/Flash";

const Home = () => {
  return (
    <>
      <Element name="home">
        <Navbar />
        <Slider />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="service">
        <Service />
      </Element>
      <Element name="portfolio">
        <Portfolio />
        <Achievements />
        <TrustedBrands />
      </Element>
      <Element name="contact-us">
        <Contact /> <Map />
        <Footer />
      </Element>
      <Flash >

      <button type="button" className="message bg-transparent ">
        <TbMessageCircle2Filled className="chat-icon position-relative" />
        <span className="position-absolute translate-middle badge rounded-pill bg-danger">
          1<span className="visually-hidden">unread messages</span>
        </span>
      </button>
      </Flash>
    </>
  );
};

export default Home;
