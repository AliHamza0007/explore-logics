import { Link } from "react-scroll";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GraphicsDesign from "../assets/service/Graphics-Design.png";
import webHosting from "../assets/service/icons8-web-hosting-64.png";
import onlineStore from "../assets/service/online-store.png";
import webMaintaince from "../assets/service/web-maintenance-64.png";
import webCustomization from "../assets/service/Website Customization.png";
import webDesign from "../assets/service/Website Design.png";
import "../styles/Service.css";
const Service = () => {
  return (
    <div className="pt-md-3 ">
      <div className="container  pt-5 pb-5 px-md-5 px-1">
        <div className="row ms-2 me-2 text-lg-start text-center">
          <p className="word-space cgreen text-uppercase ">WHAT WE DO</p>
          <h1 className="mb-4 cgray">
            OUR<span className="cgreen px-2 fw-bold">SERVICES</span>
          </h1>
        </div>
      </div>
      <div className="servicebg ">
        <div className="container service-section ">
          {" "}
          <Swiper
            className="swiper pb-2"
            modules={[Autoplay]}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            speed="1000"
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
          >
            {" "}
            <SwiperSlide>
              <div className="card  bg-white py-5  rounded-5 shadow border-0 ">
                <img
                  src={webDesign}
                  className="card-img-top  mx-auto  w-25 pt-4"
                  alt="webDesign"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Website Design</h5>
                  <p className="card-text pt-4 text-secondary">
                    We Have Expert Web Designing Team which can Design your
                    Business Website to bring more Sales and Audience.{" "}
                  </p>
                  <Link
                    to="contact-us"
                    className="btn btnGreen text-white pt-2 pb-2 ps-4 pe-4 mt-sm-5 mt-2"
                  >
                    Get A Quote
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card  bg-white py-5  mt-md-5 mt-sm-0  rounded-5 shadow border-0">
                <img
                  src={webHosting}
                  className="card-img-top  mx-auto  w-25 pt-4"
                  alt="webHosting"
                />
                <div className="card-body text-center">
                  <h5 className="card-title pt-2">Website Development</h5>
                  <p className="card-text pt-2 pb-2 text-secondary">
                    Our Website Development Team provides you with modern,
                    usable websites that engage more users to stick around and
                    take action.
                  </p>
                  <Link
                    to="contact-us"
                    className="btn btnGreen text-white pt-2 pb-2 ps-4 pe-4 mt-sm-5 mt-2"
                  >
                    Get A Quote
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card  bg-white py-5 mt-10 mt-md-0 mt-sm-0  rounded-5 shadow border-0">
                <img
                  src={webMaintaince}
                  className="card-img-top  mx-auto  w-25 pt-4"
                  alt="webMaintaince"
                />
                <div className="card-body text-center">
                  <h5 className="card-title pt-2">Website Maintenance</h5>
                  <p className="card-text pt-2 pb-2 text-secondary">
                    We have a Dedicated Team which can handle your website for
                    every single update about your company.
                  </p>
                  <Link
                    to="contact-us"
                    className="btn btnGreen text-white pt-2 pb-2 ps-4 pe-4 mt-sm-5 mt-2"
                  >
                    Get A Quote
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="container  service-section">
          {" "}
          <Swiper
            className="swiper pb-3"
            modules={[Autoplay]}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            speed="1000"
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
          >
            {" "}
            <SwiperSlide>
              <div className="card  bg-white py-5  rounded-5 shadow border-0">
                <img
                  src={webCustomization}
                  className="card-img-top  mx-auto  w-25 pt-4"
                  alt="webCustomization"
                />
                <div className="card-body text-center">
                  <h5 className="card-title pt-2">Website Customization</h5>
                  <p className="card-text pt-2 pb-2 text-secondary">
                    Our Design Team can Customize Visually aesthetic, adaptable
                    and easy-to-use websites for your company.
                  </p>
                  <Link
                    to="contact-us"
                    className="btn btnGreen text-white pt-2 pb-2 ps-4 pe-4 mt-sm-5 mt-2"
                  >
                    Get A Quote
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card  bg-white py-5  mt-md-5 mt-sm-0   rounded-5 shadow border-0">
                <img
                  src={onlineStore}
                  className="card-img-top  mx-auto  w-25 pt-4"
                  alt="onlineStore"
                />
                <div className="card-body text-center">
                  <h5 className="card-title pt-2">Online Store</h5>
                  <p className="card-text pt-2 pb-2 text-secondary">
                    {" "}
                    We help businesses to sell their products and services
                    online from websites with simple order forms to full-fledged
                    online stores.
                  </p>
                  <Link
                    to="contact-us"
                    className="btn btnGreen text-white pt-2 pb-2 ps-4 pe-4 mt-sm-5 mt-2"
                  >
                    Get A Quote
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card mt-10 bg-white py-5  rounded-5 shadow border-0">
                <img
                  src={GraphicsDesign}
                  className="card-img-top  mx-auto  w-25 pt-4"
                  alt="GraphicsDesign"
                />
                <div className="card-body text-center">
                  <h5 className="card-title pt-2">Graphic Designing</h5>
                  <p className="card-text pt-2 pb-2 text-secondary">
                    Our Graphic Design Team will get to know your business So
                    that they can design A perfect logo and brand Identity to
                    showcase its values.
                  </p>
                  <Link
                    to="contact-us"
                    className="btn btnGreen text-white pt-2 pb-2 ps-4 pe-4 mt-sm-5 mt-2"
                  >
                    Get A Quote
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Service;
