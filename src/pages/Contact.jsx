import "../styles/Contact.css";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Fade } from "react-reveal";
import Flash from "react-reveal/Flash";

const Contact = () => {
  const [phone, setPhone] = useState("");

  return (
    <>
      <div className="contact py-5">
        <div className="container">
          <div className="row justify-content-center py-5 px-xxl-5 px-xl-5 px-0">
            <div className="col-xxl-12 text-center">
              <Flash>
                <h2 className="fs-1 cgray fw-normal">
                  Stay<span className=" px-2 cgreen fw-bold">Connected</span>
                  with us for <br />
                  any<span className="cgreen ps-2 fw-bold">Reason</span>{" "}
                </h2>
              </Flash>
            </div>
            <Fade duration={1000} bottom>
              <div className="col-xxl-6 col-xl-8 ">
                <form className=" mt-5">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 mb-lg-5 mb-4">
                      <input
                        type="text"
                        className="form-control shadow-sm p-3 "
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-12 mb-lg-5 mb-4">
                      <div className="form-group h-100 w-100">
                        <PhoneInput
                          defaultCountry="pk"
                          value={phone}
                          onChange={(phone) => setPhone(phone)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mb-lg-5 mb-4">
                      <input
                        type="email"
                        className="form-control shadow-sm p-3  bg-body rounded"
                        placeholder="Email address"
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-12 mb-lg-5 mb-4">
                      <select className="form-select shadow-sm p-3" required>
                        <option value>Interested in</option>
                        <option value="websiteCustomization">
                          Website Customization
                        </option>
                        <option value="websiteDesign">Website Design</option>
                        <option value="websiteDevelopment">
                          Website Development
                        </option>
                        <option value="websiteMaintenance">
                          Website Maintenance
                        </option>
                        <option value="onlineStore">Online Store</option>
                        <option value="graphicsDesign">Graphics Design</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control form-control shadow-sm p-3 mb-lg-5 mb-4 bg-body rounded"
                        placeholder="Write your interest area"
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-12 mb-lg-5 mb-4">
                      <select className="form-select shadow-sm p-3" required>
                        <option value>How did you hear about us?</option>
                        <option value="Google">Google</option>
                        <option value="Craigslist">Craigslist</option>
                        <option value="Email">Email</option>
                        <option value="Referral">Referral</option>
                        <option value="Social Media">Social Media</option>
                      </select>
                    </div>
                    <div className="col-lg-6 col-md-12 mb-lg-5 mb-4">
                      <input
                        type="text"
                        className="form-control shadow-sm p-3"
                        placeholder="Budget (example: $5000)"
                        required
                      />
                    </div>
                    <div className=" mb-lg-5 mb-4 m-1">
                      <input
                        type="text"
                        className="form-control shadow-sm p-3  bg-body rounded"
                        placeholder="Inquiry subject"
                        required
                      />
                    </div>
                    <div className=" mb-lg-5 mb-4 m-1">
                      <textarea
                        className="form-control shadow-sm p-3  bg-body rounded"
                        placeholder="Message"
                        rows={3}
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className=" justify-content-center mb-4">
                      <div className="col text-center">
                        <button
                          type="submit"
                          id="sendMail"
                          className="btn btnGreen text-white py-2 px-4"
                        >
                          Get A Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
