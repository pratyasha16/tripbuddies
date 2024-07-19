import Calender from "@/components/common/dropdownSearch/Calender";
import Location from "@/components/common/dropdownSearch/Location";
import TourType from "@/components/common/dropdownSearch/TourType";

import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero4() {
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const [location, setLocation] = useState("");
  const [calender, setCalender] = useState("");
  const [tourType, setTourType] = useState("");
  const navigate = useNavigate();

  const queryParams = {
    date: calender,
    location: location,
    tourType: tourType
  };

  console.log(queryParams)
// Function to convert query parameters object to query string
const buildQueryString = (params) => {
  return Object.keys(params)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    .join('&');
};
const handleNavigate = () => {
  const queryString = buildQueryString(queryParams);
  navigate(`/tour-list-2?${queryString}`);
};  



  useEffect(() => {
    setCurrentActiveDD("");
  }, [location, calender, tourType, setCurrentActiveDD]);
  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentActiveDD("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <section className="hero -type-4">
      <div className="hero__bg">
        <img src="/img/hero.jpg" alt="background" />
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-8 col-lg-9">
            <h1 data-aos="fade-up" data-aos-delay="100" className="hero__title">
           <span className="text-68 fw-400"> Plan your next </span> <span className="text-68 fw-900"> dream  </span>
              <br className="md:d-none" />
              <span className="text-68 fw-900"> Trip  </span> <span className="text-68 fw-400"> in a seconds.  </span>   
            </h1>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="hero__filter mt-30"
            >
              <div
                ref={dropDownContainer}
                className="searchForm -type-1 shadow-1 rounded-200"
              >
                <div className="searchForm__form">
                  <div className="searchFormItem js-select-control js-form-dd">
                    <div
                      className="searchFormItem__button"
                      onClick={() =>
                        setCurrentActiveDD((pre) =>
                          pre == "location" ? "" : "location",
                        )
                      }
                    >
                      <div className="searchFormItem__icon size-50 rounded-full bg-accent-1-05 flex-center">
                        <i className="text-20 icon-pin"></i>
                      </div>
                      <div className="searchFormItem__content">
                        <h5>Where</h5>
                        <div className="js-select-control-chosen">
                          {location ? location : "Search destinations"}
                        </div>
                      </div>
                    </div>

                    <Location
                      setLocation={setLocation}
                      active={currentActiveDD === "location"}
                    />
                  </div>

                  <div className="searchFormItem js-select-control js-form-dd js-calendar">
                    <div
                      className="searchFormItem__button"
                      onClick={() =>
                        setCurrentActiveDD((pre) =>
                          pre == "calender" ? "" : "calender",
                        )
                      }
                    >
                      <div className="searchFormItem__icon size-50 rounded-full bg-accent-1-05 flex-center">
                        <i className="text-20 icon-calendar"></i>
                      </div>
                      <div className="searchFormItem__content">
                        <h5>When</h5>
                        <div>
                          <span className="js-first-date">
                            <Calender active={currentActiveDD === "calender"} />
                          </span>
                          <span className="js-last-date"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="searchFormItem js-select-control js-form-dd">
                    <div
                      className="searchFormItem__button"
                      onClick={() =>
                        setCurrentActiveDD((pre) =>
                          pre == "tourType" ? "" : "tourType",
                        )
                      }
                    >
                      <div className="searchFormItem__icon size-50 rounded-full bg-accent-1-05 flex-center">
                        <i className="text-20 icon-flag"></i>
                      </div>
                      <div className="searchFormItem__content">
                        <h5>Tour Type</h5>
                        <div className="js-select-control-chosen">
                          {tourType ? tourType : "All tour"}
                        </div>
                      </div>
                    </div>

                    <TourType
                      setTourType={setTourType}
                      active={currentActiveDD === "tourType"}
                    />
                  </div>
                </div>

                <div className="searchForm__button">
                  <button
                    onClick={handleNavigate}
                    className="button -dark-1 size-60 bg-accent-1 rounded-200 text-white"
                  >
                    <i className="icon-search text-16"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
