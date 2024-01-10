import aboutImg from "../assets/about/abt-img.png";
import { Link } from "react-scroll";
import "../styles/About.css";
import { Fade, Zoom } from "react-reveal";
const About = () => {
  return (
    <div>
      <div className="aboutBg">
        <div className="container pt-5">
          <div className="row  pt-5  mb-5 mx-lg-5 mx-md-0">
            <Fade left>
              <div className="col-lg-5 col-md-6 pe-lg-5 pe-md-0 ps-md-0 px-sm-5 px-4">
                <h1 className="mb-4 cgray">
                  Know<span className=" px-2 cgreen fw-bold">About</span>
                </h1>
                <p className="fs-6 pe-lg-5 pe-md-2">
                  Outstanding website designs can help you make a lasting
                  impression. Get your Business website designed by professional
                  website designers. We create simple designs complete with rich
                  content and valuable user experience. With our web design
                  services, you can rely on our designers to create every page
                  of your website look awesome and increase sales at an
                  affordable prices.
                </p>
                <Link
                  to="contact-us"
                  className="btn  btnGreen text-white pt-2 pb-2 ps-4 pe-4 mt-sm-5 mt-2"
                >
                  Get A Quote
                </Link>
              </div>
            </Fade>
            <Fade right>
              <div className="col-lg-7 col-md-6 my-md-0 my-5 px-md-0 px-sm-5 px-4">
                <img
                  src={aboutImg}
                  className="img-fluid w-100"
                  alt="about-img"
                />
              </div>
            </Fade>
          </div>
        </div>
        <div className="container  pt-sm-5 pt-0 pb-5 px-md-5 px-1">
          <Zoom>
            <div className="row mt-lg-4 ms-2 me-2 text-lg-start text-center">
              <p className="cgreen text-uppercase word-space ">HOW WE DO</p>
              <h1 className="mb-4 cgray">
                OUR<span className="cgreen px-2 fw-bold">PROCESS</span>
              </h1>
            </div>
          </Zoom>
          <div className="row row-flex processCards g-4 mx-xxl-5 mx-xl-5 mx-0  px-xxl-5 px-xl-5 px-0 mt-2 pb-5 mb-5">
            <Fade>
              {" "}
              <div className="col-lg-3 col-md-6">
                <div
                  className="card  bg-white py-5 border-4 rounded-5 "
                  style={{ alignItems: "center" }}
                >
                  <div className="card-img-top text-center w-75 pt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="52.844"
                      height="39.792"
                      viewBox="0 0 52.844 39.792"
                    >
                      <defs>
                        <linearGradient
                          id="linear-gradient"
                          x1="0.5"
                          x2="0.5"
                          y2={1}
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset={0} stopColor="#6c5589" />
                          <stop offset={1} stopColor="#e93e3a" />
                        </linearGradient>
                      </defs>
                      <g
                        id="Group_31"
                        data-name="Group 31"
                        transform="translate(-322.577 -212.969)"
                      >
                        <path
                          id="Path_3159"
                          data-name="Path 3159"
                          d="M4110.573,6318.635c-7.161,5.128-15.048,16.627-5.808,23.837s48.535,7.846,48.649-5.837-16.02-8.294-21.1-15.407S4117.734,6313.507,4110.573,6318.635Z"
                          transform="translate(-3777.994 -6094.75)"
                          fill="#272539"
                          opacity="0.07"
                        />
                        <path
                          id="Path_3160"
                          data-name="Path 3160"
                          d="M14.795,1.969,7.236-5.59a.7.7,0,0,0-.5-.205h-.6a12.134,12.134,0,0,0,3.24-8.268A12.186,12.186,0,0,0-2.813-26.25,12.186,12.186,0,0,0-15-14.062,12.186,12.186,0,0,0-2.813-1.875,12.156,12.156,0,0,0,5.455-5.109v.6a.721.721,0,0,0,.205.5l7.559,7.559a.7.7,0,0,0,1,0l.58-.58A.7.7,0,0,0,14.795,1.969ZM-2.813-3.75A10.305,10.305,0,0,1-13.125-14.062,10.305,10.305,0,0,1-2.813-24.375,10.305,10.305,0,0,1,7.5-14.062,10.305,10.305,0,0,1-2.813-3.75Z"
                          transform="translate(350 239.219)"
                          fill="#355979"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">1. Discover</h5>
                    <p className="card-text pt-4 text-secondary">
                      We take the time to understand your business and create a
                      bulletproof end-to-end website strategy.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>{" "}
            <Fade bottom duration={800}>
              <div className="col-lg-3 col-md-6">
                <div
                  className="card  bg-white py-5  mt-md-5 mt-sm-0 border-4 rounded-5"
                  style={{ alignItems: "center" }}
                >
                  <div className="card-img-top text-center w-75 pt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="52.844"
                      height="39.792"
                      viewBox="0 0 52.844 39.792"
                    >
                      <defs>
                        <linearGradient
                          id="linear-gradient"
                          x1="0.5"
                          x2="0.5"
                          y2={1}
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset={0} stopColor="#6c5589" />
                          <stop offset={1} stopColor="#e93e3a" />
                        </linearGradient>
                      </defs>
                      <g
                        id="Group_32"
                        data-name="Group 32"
                        transform="translate(-322.577 -76.75)"
                      >
                        <path
                          id="Path_3161"
                          data-name="Path 3161"
                          d="M4110.573,6318.635c-7.161,5.128-15.048,16.627-5.808,23.837s48.535,7.846,48.649-5.837-16.02-8.294-21.1-15.407S4117.734,6313.507,4110.573,6318.635Z"
                          transform="translate(-3777.994 -6230.969)"
                          fill="#272539"
                          opacity="0.07"
                        />
                        <path
                          id="Path_3162"
                          data-name="Path 3162"
                          d="M13.9-22.955l-2.2-2.2a3.75,3.75,0,0,0-5.3,0L-14.248-4.5l-.743,6.69a1.406,1.406,0,0,0,1.553,1.553L-6.748,3,13.9-17.652A3.75,3.75,0,0,0,13.9-22.955ZM8.324-14.725-4.8-1.6V-3.633H-7.617V-6.445H-9.653L3.475-19.574ZM-7.609,1.207l-3.457.384L-12.841-.185l.384-3.457L-11.294-4.8h2.036v2.812h2.812V.044ZM12.576-18.977,9.649-16.051,4.8-20.9l2.926-2.926a1.874,1.874,0,0,1,2.652,0l2.2,2.2A1.874,1.874,0,0,1,12.576-18.977Z"
                          transform="translate(350 103)"
                          fill="#355979"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title pt-2">2. Design</h5>
                    <p className="card-text pt-2 pb-2 text-secondary">
                      We design your conversion-focused website to not just look
                      incredible but drive tangible business results.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>{" "}
            <Fade bottom duration={1000}>
              <div className="col-lg-3 col-md-6">
                <div
                  className="card  bg-white py-5 mt-10 mt-md-0 mt-sm-0 border-4 rounded-5"
                  style={{ alignItems: "center" }}
                >
                  <div className="card-img-top text-center w-75 pt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="52.844"
                      height="39.788"
                      viewBox="0 0 52.844 39.788"
                    >
                      <defs>
                        <linearGradient
                          id="linear-gradient"
                          x1="0.5"
                          x2="0.5"
                          y2={1}
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset={0} stopColor="#6c5589" />
                          <stop offset={1} stopColor="#e93e3a" />
                        </linearGradient>
                      </defs>
                      <g
                        id="Group_29"
                        data-name="Group 29"
                        transform="translate(-319.577 -76.754)"
                      >
                        <path
                          id="Path_3155"
                          data-name="Path 3155"
                          d="M4110.573,6318.635c-7.161,5.128-15.048,16.627-5.808,23.837s48.535,7.846,48.649-5.837-16.02-8.294-21.1-15.407S4117.734,6313.507,4110.573,6318.635Z"
                          transform="translate(-3780.994 -6230.969)"
                          fill="#272539"
                          opacity="0.07"
                        />
                        <path
                          id="Path_3156"
                          data-name="Path 3156"
                          d="M-3.486,3.738a.355.355,0,0,0,.434-.246L5.191-25.383a.349.349,0,0,0-.24-.434l-1.465-.416a.349.349,0,0,0-.434.24L-5.191,2.889a.349.349,0,0,0,.24.434ZM-7.916-3.6l1.084-1.225a.291.291,0,0,0-.029-.416l-7.09-6.006,7.09-6.006a.291.291,0,0,0,.029-.416L-7.916-18.9a.29.29,0,0,0-.416-.023l-8.443,7.453a.289.289,0,0,0,0,.439l8.443,7.453A.3.3,0,0,0-7.916-3.6ZM8.332-3.58l8.443-7.453a.289.289,0,0,0,0-.439L8.332-18.92a.3.3,0,0,0-.416.023L6.832-17.672a.291.291,0,0,0,.029.416l7.09,6.006L6.861-5.244a.291.291,0,0,0-.029.416L7.916-3.6A.29.29,0,0,0,8.332-3.58Z"
                          transform="translate(347 103)"
                          fill="#355979"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title pt-2">3. Develop</h5>
                    <p className="card-text pt-2 pb-2 text-secondary">
                      With a focus on exceptional user experience, our websites
                      are developed to feel as good as they look.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade bottom duration={1500}>
              <div className="col-lg-3 col-md-6">
                <div
                  className="card  bg-white py-5 mt-md-0 mt-sm-0 border-4 rounded-5"
                  style={{ alignItems: "center" }}
                >
                  <div className="card-img-top text-center w-75 pt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="52.844"
                      height="39.792"
                      viewBox="0 0 52.844 39.792"
                    >
                      <defs>
                        <linearGradient
                          id="linear-gradient"
                          x1="0.5"
                          x2="0.5"
                          y2={1}
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset={0} stopColor="#6c5589" />
                          <stop offset={1} stopColor="#e93e3a" />
                        </linearGradient>
                      </defs>
                      <g
                        id="Group_29"
                        data-name="Group 29"
                        transform="translate(-328.577 -76.75)"
                      >
                        <path
                          id="Path_3155"
                          data-name="Path 3155"
                          d="M4110.573,6318.635c-7.161,5.128-15.048,16.627-5.808,23.837s48.535,7.846,48.649-5.837-16.02-8.294-21.1-15.407S4117.734,6313.507,4110.573,6318.635Z"
                          transform="translate(-3771.994 -6230.969)"
                          fill="#272539"
                          opacity="0.07"
                        />
                        <path
                          id="Path_3156"
                          data-name="Path 3156"
                          d="M6.566-21.092h0a3.282,3.282,0,0,0-3.281,3.281A3.282,3.282,0,0,0,6.566-14.53a3.282,3.282,0,0,0,3.281-3.281h0A3.284,3.284,0,0,0,6.566-21.092Zm0,4.687h0A1.407,1.407,0,0,1,5.16-17.811a1.407,1.407,0,0,1,1.406-1.406,1.407,1.407,0,0,1,1.406,1.406A1.409,1.409,0,0,1,6.566-16.4ZM14.6-25.119a1.063,1.063,0,0,0-.729-.729,21.259,21.259,0,0,0-4.82-.4c-6.046,0-9.672,3.234-12.379,7.5h-6.1A3.085,3.085,0,0,0-11.945-17.2L-14.84-11.41a1.985,1.985,0,0,0-.147.627,1.407,1.407,0,0,0,1.406,1.406h6.089A5.626,5.626,0,0,1-1.868-3.752h0V2.341A1.407,1.407,0,0,0-.462,3.747,1.994,1.994,0,0,0,.165,3.6L5.949.705A3.083,3.083,0,0,0,7.5-1.8V-7.924c4.252-2.713,7.5-6.351,7.5-12.368A20.826,20.826,0,0,0,14.6-25.119ZM-12.823-11.251l2.555-5.108a1.307,1.307,0,0,1,.836-.516h4.985c-.817,1.644-1.858,3.75-2.786,5.625l0,.027C-7.319-11.228-11.425-11.251-12.823-11.251ZM5.625-1.8a1.3,1.3,0,0,1-.515.833L.007,1.583c0-1.4-.024-5.511-.027-5.6l.022,0C1.876-4.944,3.974-5.985,5.618-6.8h.007ZM-.356-5.936a8.363,8.363,0,0,0-4.959-4.954C-2.266-16.984.531-24.375,9.05-24.375a21.051,21.051,0,0,1,3.833.245,20.391,20.391,0,0,1,.241,3.838C13.124-11.8,5.684-8.956-.356-5.936ZM-9-7.5c-2.817,0-5.883,2.306-5.992,9.377H-15V3.75h1.875V3.736C-3.069,3.541-2.292-3-5.285-6.012A5.359,5.359,0,0,0-9-7.5Zm3.1,6.41C-6.65.733-9.275,1.8-13.126,1.87c0-.208-.066-7.493,4.128-7.493a3.52,3.52,0,0,1,2.391.94A3.483,3.483,0,0,1-5.9-1.092Z"
                          transform="translate(356 103)"
                          fill="#355979"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title pt-2">4. Deploy</h5>
                    <p className="card-text pt-2 pb-2 text-secondary">
                      It’s launch time! We deploy your website on one of our
                      high quality Australian cloud servers to ensure your site
                      is fast and reliable.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
