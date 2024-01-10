import { Link } from "react-scroll";
import Tada from "react-reveal/Tada";
const Footer = () => {
  return (
    <>
      <div className="container  mt-4">
        <div className="row ">
          <div className="col-12 text-end pb-5 text-center">
            <Tada>
              {" "}
              <p className="fs-5 text-secondary">
                All rights reserved ©{" "}
                <Link
                  spy
                  smooth
                  duration={1000}
                  className="text-decoration-none cgray"
                  to="home"
                >
                  Explore Logics
                </Link>{" "}
                2024
              </p>
            </Tada>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
