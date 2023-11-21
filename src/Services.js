import React, { useState } from "react";
import serviceapi from "./API/serviceApi.js";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";

const Services = () => {
  const [serviceData, setServiceData] = useState(serviceapi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            Check Our Resources
          </h1>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              console.log(title);
              return (
                <>
                  <Link
                    to={{
                      pathname: "/book",
                      state: {
                        type: title,
                      },
                    }}
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id}
                  >
                    <i className={`fontawesome-style ${logo}`}></i>
                    {/* <img src={logo} /> */}
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
