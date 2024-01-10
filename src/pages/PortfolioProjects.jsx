import "../styles/PortfolioProjects.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import { projects } from "./utilsProject";
import { useState } from "react";

const PortfolioProjects = () => {
  const [projectLength, setProjectLength] = useState(6);
  const [more, setMore] = useState(true);
  const handlePage = () => {
    projectLength < 10 ? setProjectLength(projectLength + 2) : setMore(false);
  };
  return (
    <>
      {" "}
      <div className="banner-bg projectsPage">
        <div className="pb-10">
          <Navbar />
        </div>
        <div className="portfolio-banner  w-100 py-5 ">
          <div className="container banner-section">
            <div className="row">
              <div className="col-12">
                <p className="  word-space cgreen fs-1">OUR PROJECTS</p>
                <h1 className="mb-4 fs-55  fw-semibold text-white">
                  OUR<span className="cgreen px-2 fw-bold">PORTFOLIO</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="projects-section mb-5 py-md-5 py-0 px-sm-5 px-0"
        id="work"
      >
        <div className="container pb-5">
          <div className="container   py-5">
            {projects?.slice(0, projectLength)?.map((item, index) => {
              return (
                
                <div
                  key={item.id}
                  className="row projectOut mb-5 text-center gap-5"
                >
                  {index % 2 ? (
                    
                    <div className="col-md-6 mb-5  col-12">
                      <div className="projectOut1">
                        <div className="project">
                          <Link
                            className="pointer"
                            to={item.link}
                            target="_blank"
                          >
                            <img
                              src={item.Url}
                              className="img-fluid"
                              alt="project-image"
                            />
                          </Link>
                        </div>{" "}
                      </div>
                    </div>
                  ) : (

                    <div className="col-md-6 col-12 mb-5">
                      {" "}
                      <div className="projectOut2">
                        <div className="project">
                          <Link
                            className="pointer"
                            to={item.link}
                            target="_blank"
                          >
                            <img
                              src={item.Url}
                              className="img-fluid"
                              alt="project-image"
                            />
                          </Link>
                        </div>
                      </div>{" "}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center mt-5">
              {more ? (
                <>
                  {" "}
                  <Link
                    to=""
                    onClick={handlePage}
                    className="cgray  btn border-0 text-decoration-none fs-1 pointer"
                  >
                    Load<span className="cgreen px-2 fw-bold">More...</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to=""
                    className="cgray  btn border-0 text-decoration-none fs-1 pointer"
                  >
                    Thanks for
                    <span className="cgreen px-2 fw-bold">Sharing</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PortfolioProjects;
