import "../styles/Portfolio.css";
import { Link } from "react-scroll";
import portImg1 from "../assets/portfolio/team-member-image-3.png";
import portImg3 from "../assets/portfolio/141.png";
import portImg2 from "../assets/portfolio/131.png";
import quote from "../assets/portfolio/quote.png";
import testimonials from "../assets/portfolio/testimonials.png";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import { Fade, Rotate, Zoom } from "react-reveal";
const Portfolio = () => {
  return (
    <div>
      <div className="portfolio py-5 px-sm-5 px-1">
        <div className="container pt-5 px-lg-5 px-md-0 ">
          <Zoom>
            <div className="row ms-2 me-2 text-center">
              <p className="cgreen text-uppercase word-space">OUR PROUD WORK</p>
              <h1 className="mb-4 cgray">
                OUR<span className="cgreen px-2 fw-bold">PORTFOLIO</span>
              </h1>
            </div>
          </Zoom>
          <div className="row align-items-center pt-sm-5 pt-0 mt-5 ">
            <div className="col-md-6 col-12  text-center">
              <Fade left>
                <img src={portImg1} className="img-fluid" alt="portImg1" />
              </Fade>
            </div>
            <div className="col-md-6 pt-lg-5 pt-md-2 pt-md-0 pt-5 text-md-start text-center">
              <h2>JAP</h2>
              <p className="text-secondary pt-4 pe-xl-5 pe-0">
                Get a voucher code to add funds on your JAP account at a
                discounted price.Our delivery is automated and usually it takes
                minutes if not seconds to deliver your order.
              </p>
              <Link
                to="https://vouchers.justanotherpanel.com/"
                target="_blank"
                className="btn btn-outline-green  mt-5 fw-bold ps-4 pe-4"
              >
                View Project
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="container px-lg-5 px-md-0 ">
          <div className="row align-items-center pt-5 mt-5 ps-sm-5 ps-0">
            <div className="col-md-6 col-12 ps-xxl-5 ps-xl-5 ps-0 pt-lg-5 pt-md-2 order-md-1 order-2 pt-md-0 pt-5 text-md-start text-center">
              <h2 className="ps-xxl-5 ps-xl-5 ps-0">Bigbuda</h2>
              <p className="text-secondary pt-4 pe-xl-5 ps-xxl-5 ps-xl-5 px-0 ">
                We break boundaries to create extraordinary experiences.
                Together with our team of professionals, we want to help you
                raise your brand to captivate minds and hearts of your clients.
              </p>
              <Link
                to="https://www.bigbuda.com/"
                target="_blank"
                className="btn btn-outline-green  mt-5 fw-bold ps-4 pe-4 ms-lg-5 ms-md-0"
              >
                View Project
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="col-md-6 col-12 text-center  order-md-2 order-1">
              <Fade right>
                <img src={portImg2} className="img-fluid" alt="portImg2" />
              </Fade>
            </div>
          </div>
        </div>
        <div className="container px-lg-5 px-md-0 ">
          <div className="row align-items-center pt-5 mt-5 mb-5">
            <div className="col-md-6 col-12 text-center ">
              <Fade left>
                <img src={portImg3} className="img-fluid" alt="portImg3" />
              </Fade>
            </div>
            <div className="col-md-6 pt-lg-5 pt-md-2 pt-md-0 pt-5 text-md-start text-center">
              <h2>Action Threat</h2>
              <p className="text-secondary pt-4 pe-xl-5 pe-0">
                At Action Threat, we know what it takes to succeed in the
                technical aptitude, confidence, and split-second decision
                making.
              </p>
              <Link
                to="https://actionthreat.com/"
                target="_blank"
                className="btn btn-outline-green  mt-5 fw-bold ps-4 pe-4"
              >
                View Project
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="container text-center pt-3  mb-sm-5 mb-0 pb-5">
          <NavLink to="/projects" className="btn btnGo-Portfolio fw-bold">
            Go to Portfolio
            <i className="fas fa-arrow-right"></i>
          </NavLink>
        </div>
      </div>

      <div className="testimonial py-lg-5 py-md-0">
        <div className="container py-5 ">
          <div className="row py-5">
            <div className=" col-xl-6 col-lg-7 col-md-12 p-xl-5 pt-0 ps-5 my-lg-5 mt-md-0 mb-md-5">
              <Swiper
                modules={[Navigation, EffectFade, Autoplay, Pagination]}
                effect="fade"
                fadeEffect={{
                  crossFade: true,
                }}
                pagination={{ clickable: true }}
                speed="1000"
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                className="swiper "
              >
                <SwiperSlide>
                  <img src={quote} alt="quote" className="img-fluid " />
                  <div>
                    <p className="fs-5">TESTIMONIAL</p>
                    <h1 className="mb-3 pt-1 fw-bold cgray">PASCALE</h1>
                    <p className="text-secondary pt-3">
                      I can count on the team of Explore Logics. I have had a
                      bad issue that they resolved very efficiently and fast.
                      Now I can smile again. They are now part of my team.
                    </p>
                    <h5 className="mb-4 fw-bold cgray py-3">- Austria</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={quote} alt="quote" className="img-fluid   " />
                  <div>
                    <p className="fs-5">TESTIMONIAL</p>
                    <h1 className="mb-3 pt-1 fw-bold cgray">
                      Kristoffer <span className="cgreen px-2 fw-bold">M.</span>
                    </h1>
                    <p className="text-secondary pt-3">
                      Always a pleasure to work with Explore Logics.
                    </p>
                    <h5 className="mb-4 fw-bold cgray pt-5">- United States</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={quote} alt="quote" className="img-fluid   " />
                  <div>
                    <p className="fs-5">TESTIMONIAL</p>
                    <h1 className="mb-3 fw-bold cgray pt-1">
                      Ruben <span className="cgreen px-2 fw-bold"> A.</span>
                    </h1>
                    <p className="text-secondary y-3">
                      Explore Logic's great attitude, skills and predisposition
                      have achieved a quality project and on time. Very happy
                      with the work and with the resolution of the small
                      problems that we had during the development of the
                      project. Congratulations
                    </p>
                    <h5 className="mb-4 fw-bold cgray pt-2">- Spain</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={quote} alt="quote" className="img-fluid   " />
                  <div>
                    <p className="fs-5">TESTIMONIAL</p>
                    <h1 className="mb-3 fw-bold cgray pt-1">
                      Thomas <span className="cgreen px-2 fw-bold">G.</span>
                    </h1>
                    <p className="text-secondary pt-3">
                      On budget. Delivered early. The best work I have ever had
                      in 12 years of experience. There is no doubt I will be a
                      repeat customer. 5 stars is not a high enough rating. "
                    </p>
                    <h5 className="mb-4 fw-bold cgray py-3">- United States</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={quote} alt="quote" className="img-fluid   " />
                  <div>
                    <p className="fs-5">TESTIMONIAL</p>
                    <h1 className="mb-3 fw-bold cgray pt-1">
                      Antonio <span className="cgreen px-2 fw-bold"> U.</span>
                    </h1>
                    <p className="text-secondary pt-3">
                      Great job! Really fast and very good communication.
                    </p>
                    <h5 className="mb-4 fw-bold cgray pt-5">- Spain</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={quote} alt="quote" className="img-fluid   " />
                  <div>
                    <p className="fs-5">TESTIMONIAL</p>
                    <h1 className="mb-3 fw-bold cgray pt-1">
                      Cody <span className="cgreen px-2 fw-bold">S.</span>
                    </h1>
                    <p className="text-secondary pt-3">
                      He took his time understanding the scope of work on this
                      project and did his best to deliver that scope.
                    </p>
                    <h5 className="mb-4 fw-bold cgray pt-5">- United Stats</h5>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-12 testimonial- align-self-end text-center my-lg-0 my-5">
              <Rotate>
                <img
                  className=" img-fluid "
                  src={testimonials}
                  alt="testimonial"
                />
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
