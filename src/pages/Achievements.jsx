import "../styles/Achievements.css";
import trust from "../assets/achievements/trust.svg";
import Consultaion from "../assets/achievements/consultation.svg";
import product from "../assets/achievements/product.svg";
import Queue from "../assets/achievements/queue.svg";
import { useEffect, useRef, useState } from "react";
const Achievements = () => {
  const [project, setProject] = useState(0);
  const [clients, setClients] = useState(0);
  const [consultaions, setConsultaions] = useState(0);
  const [queue, setQueue] = useState(0);
  const intervalRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    if (startCounter) {
      setProject(0);
      setQueue(0);
      setConsultaions(0);
      setClients(0);
      intervalRef.current = setInterval(() => {
        setProject((project) => (project < 1438 ? project + 1 : 1438));
        setQueue((queue) => (queue < 187 ? queue + 1 : 187));
        setClients((clients) => (clients < 465 ? clients + 1 : 465));
        setConsultaions((consultaions) =>
          consultaions < 1272 ? consultaions + 1 : 1272
        );
      }, 1);
    } else {
      clearInterval(intervalRef.current);
      setProject(1438);
      setQueue(187);
      setConsultaions(1272);
      setClients(465);
    }
    return () => clearInterval(intervalRef.current);
  }, [startCounter]);

  return (
    <section
      onMouseOver={() => setStartCounter(true)}
      onMouseOut={() => setStartCounter(false)}
      className="achievements"
    >
      <div className="container py-5">
        <div className="row py-4">
          <div className="col-md-12 mb-5 pb-5">
            <h1 className="mb-5 cgray text-center ">
              OUR<span className="cgreen d-block fw-bold">ACHIEVEMENTS</span>
            </h1>
          </div>
          <div className="col-md-12">
            <div className="">
              <div className="row  g-5">
                <div className="col-xl-6  mt-xl-0 mt-4">
                  <div className=" p-4 card  achievementsBox  flex-sm-row flex-column">
                    <div className="">
                      <img src={trust} className="mb-4" alt="trust" />
                      <h5 className="mb-4 lh">
                        Worldwide
                        <span className="d-block  cgreen text-uppercase display-4 fw-semibold">
                          {" "}
                          Trusted
                        </span>
                        <span className="display-5 lh text-uppercase">
                          Clients
                        </span>
                      </h5>
                      <div className="lines">
                        <span className="line" />
                        <span className="line w-75" />
                      </div>
                    </div>
                    <div className="counterBox align-self-end ">
                      <h1 className="display-2 lh fw-semibold">{clients}</h1>
                      <span className="fs-3 mt-2 fw-light text-uppercase">
                        Client
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6  mt-xl-5 mt-4">
                  <div className=" p-4 card  achievementsBox  flex-sm-row flex-column">
                    <div className="">
                      <img src={product} className="mb-4" alt="product" />
                      <h5 className="mb-4 lh">
                        Projects
                        <span className="d-block  cgreen text-uppercase display-4 fw-semibold">
                          {" "}
                          WE
                        </span>
                        <span className="display-5 lh text-uppercase">
                          Delivered
                        </span>
                      </h5>
                      <div className="lines">
                        <span className="line" />
                        <span className="line w-75" />
                      </div>
                    </div>
                    <div className="counterBox align-self-end ">
                      <h1 className="display-2 lh fw-semibold">{project}</h1>
                      <span className="fs-3 mt-2 fw-light text-uppercase">
                        Delivered
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6  mt-xl-0 mt-4">
                  <div className=" p-4 card  achievementsBox  flex-sm-row flex-column">
                    <div className="">
                      <img
                        src={Consultaion}
                        className="mb-4"
                        alt="consultaion"
                      />
                      <h5 className="mb-4 lh">
                        Our
                        <span className="d-block  cgreen  display-4 fw-semibold">
                          {" "}
                          COMPANIES
                        </span>
                        <span className="display-5 lh ">CONSULTATIONS</span>
                      </h5>
                      <div className="lines">
                        <span className="line" />
                        <span className="line w-75" />
                      </div>
                    </div>
                    <div className="counterBox align-self-end ">
                      <h1 className="display-2 lh fw-semibold">
                        {consultaions}
                      </h1>
                      <span className="fs-3 mt-2 fw-light ">CONSULTATION</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6  mt-xl-5 mt-4">
                  <div className=" p-4 card  achievementsBox  flex-sm-row flex-column">
                    <div className="">
                      <img src={Queue} className="mb-4" alt="queue" />
                      <h5 className="mb-4 lh">
                        Orders
                        <span className="d-block  cgreen  display-4 fw-semibold">
                          {" "}
                          IN THE
                        </span>
                        <span className="display-5 lh ">QUEUE LIST</span>
                      </h5>
                      <div className="lines">
                        <span className="line" />
                        <span className="line w-75" />
                      </div>
                    </div>
                    <div className="counterBox align-self-end ">
                      <h1 className="display-2 lh fw-semibold">{queue}</h1>
                      <span className="fs-3 mt-2 fw-light ">QUEUE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
