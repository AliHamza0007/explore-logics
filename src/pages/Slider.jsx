
import { Link } from "react-scroll";
import onlineStore from "../assets/slider/onlineStore.png";
import graphicDesigner from "../assets/slider/graphic-design.png";
import websiteCustomization from "../assets/slider/website-customization.png";
import websiteDesign from "../assets/slider/website-design.png";
import websiteDevelopment from "../assets/slider/website-development.png";
import websiteMaintances from "../assets/slider/website-maintainces.png";

import "../styles/Slider.css";
const Slider = () => {
  return (
    <div className="banner-bg py-md-5  pt-5 ">
      <div className="container my-md-5 mt-5 slider">
        <div className="row">
          <div className="col-12">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row ">
                    <div className="col-xl-6 col-md-7 col-12 mt-5  ps-lg-5 ps-4 text-md-start text-center sliderBtnFix ">
                      {" "}
                      <h1>
                        <span className="cgray">Provide you best</span>
                        <br />
                        <span className="cgreen">Website Design</span>
                      </h1>
                      <p className="text-secondary fs-5  pb-md-5 pt-4 pb-0">
                        Content precedes design. Design in the absence of
                        <br className="d-lg-block d-none" /> content is not
                        design, it’s decoration.
                      </p>
                      <Link
                        to="contact-us"
                        className="btn btnGreen  pt-2 pb-2 ps-4 pe-4 mt-lg-5 mt-0"
                      >
                        Get Started
                      </Link>
                    </div>
                    <div className="col-xl-6 col-md-5 col-12 align-self-center text-center my-md-0 my-5">
                      <img
                        className="img-fluid "
                        src={websiteDesign}
                        alt="Website Design"
                      />
                    </div>
                  </div>
                </div>{" "}
                <div className="carousel-item ">
                  <div className="row">
                    <div className="col-xl-6 col-md-7 col-12 mt-5  ps-lg-5 ps-4 text-md-start text-center sliderBtnFix">
                      <h1>
                        <span className="cgray">Provide you best</span>
                        <br />
                        <span className="cgreen">Website Development</span>
                      </h1>
                      <p className="text-secondary fs-5  pb-md-5 pt-4 pb-0">
                        We love what we do and we do what our clients love &amp;
                        work with great clients all over the world to create
                        thoughtful and purposeful websites.
                      </p>
                      <Link
                        to="contact-us"
                        className="btn btnGreen  pt-2 pb-2 ps-4 pe-4 mt-lg-5 mt-0"
                      >
                        Get Started
                      </Link>
                    </div>
                    <div className="col-xl-6 col-md-5 col-12 align-self-center text-center my-md-0 my-5 ">
                      <img
                        className="img-fluid"
                        src={websiteDevelopment}
                        alt="Website Development"
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row">
                    <div className="col-xl-6 col-md-7 col-12 mt-5 ps-lg-5 ps-4 text-md-start text-center sliderBtnFix">
                      <h1>
                        <span className="cgray">Provide you best</span>
                        <br />
                        <span className="cgreen">Website Customization</span>
                      </h1>

                      <p className="text-secondary fs-5 pb-md-5 pt-4 pb-0">
                        Websites promote you 24/7: No employee will do that.
                      </p>
                      <Link
                        to="contact-us"
                        className="btn btnGreen  pt-2 pb-2 ps-4 pe-4 mt-lg-5 mt-0"
                      >
                        Get Started
                      </Link>
                    </div>
                    <div className="col-xl-6 col-md-5 col-12 align-self-center text-center my-md-0 my-5 ">
                      <img
                        className="img-fluid"
                        src={websiteCustomization}
                        alt="Website Customization"
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row">
                    <div className="col-xl-6 col-md-7 col-12 mt-5  ps-lg-5 ps-4 text-md-start text-center sliderBtnFix">
                      <h1>
                        <span className="cgray">Provide you best</span>
                        <br />
                        <span className="cgreen">Website Maintenance</span>
                      </h1>

                      <p className="text-secondary fs-5 pb-md-5 pt-4 pb-0">
                        Our Experts can handle your website updates and Fixes{" "}
                        <br className="d-lg-block d-none" />
                        while you can focus on your Business.
                      </p>
                      <Link
                        to="contact-us"
                        className="btn btnGreen pt-2 pb-2 ps-4 pe-4 mt-lg-5 mt-0"
                      >
                        Get Started
                      </Link>
                    </div>
                    <div className="col-xl-6 col-md-5 col-12 align-self-center text-center my-md-0 my-5 ">
                      <img
                        className="img-fluid"
                        src={websiteMaintances}
                        alt="Website Maintenance"
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row">
                    <div className="col-xl-6 col-md-7 col-12 mt-5 ps-lg-5 ps-4 text-md-start text-center sliderBtnFix">
                      <h1>
                        <span className="cgray">Provide you best</span>
                        <br />
                        <span className="cgreen">Online Store</span>
                      </h1>

                      <p className="text-secondary fs-5 pb-md-5 pt-4 pb-0">
                        If you’re competitor-focused, you have to wait until
                        there is a competitor doing something. Being
                        customer-focused allows you to be more pioneering.
                      </p>
                      <Link
                        to="contact-us"
                        className="btn btnGreen   pt-2 pb-2 ps-4 pe-4 mt-lg-5 mt-0"
                      >
                        Get Started
                      </Link>
                    </div>
                    <div className="col-xl-6 col-md-5 align-self-center col-12 text-center my-md-0 my-5">
                      <img
                        className="img-fluid"
                        src={onlineStore}
                        alt="Online Store"
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row">
                    <div className="col-xl-6 col-md-7 col-12 mt-5 ps-lg-5 ps-4 text-md-start text-center sliderBtnFix">
                      <h1>
                        <span className="cgray">Provide you best</span>
                        <br />
                        <span className="cgreen">Graphic Design</span>
                      </h1>

                      <p className="text-secondary fs-5 pb-md-5 pt-4 pb-0">
                        We strive for two things in design: simplicity and
                        clarity. <br className="d-lg-block d-none" /> Great
                        design is born of those two things.
                      </p>
                      <Link
                        to="contact-us"
                        className="btn btnGreen  pt-2 pb-2 ps-4 pe-4 mt-lg-5 mt-0"
                      >
                        Get Started
                      </Link>
                    </div>
                    <div className="col-xl-6 col-md-5 align-self-center col-12 text-center my-md-0 my-5">
                      <img
                        className="img-fluid"
                        src={graphicDesigner}
                        alt="Graphic Design"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" />
                  </svg>
                </span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
                  </svg>
                </span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
