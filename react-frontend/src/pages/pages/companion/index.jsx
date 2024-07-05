import FooterFour from "@/components/layout/footers/FooterFour";
import Header3 from "@/components/layout/header/Header3";
import Calender from "@/components/common/dropdownSearch/Calender";
import Location from "@/components/common/dropdownSearch/Location";
import TourType from "@/components/common/dropdownSearch/TourType";

import { useEffect, useState, useRef } from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Trip Planner |  Machathon | Valtech",
  description: "Trip Planner for all",
};

export default function MyCompanion() {
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const [location, setLocation] = useState("");
  const [calender, setCalender] = useState("");
  const [tourType, setTourType] = useState("");
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
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header3 />


        <section className="pageHeader -type-2 -secondary">
          <div className="pageHeader__bg">
            <img src="/img/hero.jpg" alt="image" />
          </div>

          <div className="container">
            <div className="row justify-center">
              <div className="col-12">
                <div className="pageHeader__content">
                  <h1 className="pageHeader__title">Find My Companion</h1>

                  <p className="pageHeader__text">
                    A simple way to discover a new traveling
                  </p>


                </div>

              </div>
            </div>
            <div className="pageHeader__search">
              <div className="searchForm -type-1 shadow-1">
                <div ref={dropDownContainer} className="searchForm__form">
                  <div className="searchFormItem js-select-control js-form-dd">
                    <div
                      className="searchFormItem__button"
                      onClick={() =>
                        setCurrentActiveDD((pre) =>
                          pre == "location" ? "" : "location",
                        )
                      }
                    >

                      <div className="searchFormItem__content  d-contents">
                        <h5>I am a:</h5>
                        <div className="js-select-control-chosen ml-10 mt-10 d-contents">
                          <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center ml-10">
                            <i className="text-20"> <img src="/img/male.svg" /> </i>
                          </div>
                          <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center ml-10">
                            <i className="text-20 sel"> <img src="/img/female.svg" /> </i>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>

                  <div className="searchFormItem js-select-control js-form-dd js-calendar">
                    <div className="searchFormItem__button"
                    >

                      <div className="searchFormItem__content d-contents">
                        <h5>Seeking a:</h5>
                        <div className="js-select-control-chosen ml-10 mt-10 d-contents">
                          <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center ml-10">
                            <i className="text-20 sel"> <img src="/img/male.svg" /> </i>
                          </div>
                          <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center ml-10">
                            <i className="text-20"> <img src="/img/female.svg" /> </i>
                          </div>
                        </div>
                        <div>
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
                      <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
                        <i className="text-20 icon-flag"></i>
                      </div>
                      <div className="searchFormItem__content">
                        <h5>Between ages:</h5>
                        <div className="js-select-control-chosen">
                          {tourType ? tourType : "All Age"}
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
                  <button className="button -dark-1 bg-accent-1 text-white">
                    <i className="icon-search text-16 mr-10"></i>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div> 
        </section> 

        <section className="pt-60 pb-80">
          <div className="container">
            <div class="row pt-30"><div class="col-auto">
              <h1 class="pageHeader__title">Find your Companion's</h1>
            </div></div>
            <div className="row y-gap-30 pt-30">
              <div className="col-4">
                <div className="tourCard -type-2">
                  <div className="user-h">
                    <img src="/img/user-img-1.jpg" alt="image" />
                  </div>
                  <div class="tourCard__content">
                    <h3 class="tourCard__title mt-5">
                      <span>Nayana A N</span></h3>
                    <div class="d-flex items-center text-14">25 years <span className="pl-20 pr-20">  | </span> Female</div>
                    <div class="tourCard__location mt-10 mb-20">
                      <i class="icon-pin"></i> Bangalore, India</div>
                    <button class="button -outline-accent-1  pl-10 pr-10 pt-5 pb-5"> Connect</button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="tourCard -type-2">
                  <div className="user-h">
                    <img src="/img/user-img-2.jpg" alt="image" />
                  </div>
                  <div class="tourCard__content">
                    <h3 class="tourCard__title mt-5">
                      <span>Nayana A N</span></h3>
                    <div class="d-flex items-center text-14">25 years <span className="pl-20 pr-20">  | </span> Female</div>
                    <div class="tourCard__location mt-10 mb-20">
                      <i class="icon-pin"></i> Bangalore, India</div>
                    <button class="button -outline-accent-1  pl-10 pr-10 pt-5 pb-5"> Connect</button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="tourCard -type-2">
                  <div className="user-h">
                    <img src="/img/user-img-3.jpg" alt="image" />
                  </div>
                  <div class="tourCard__content">
                    <h3 class="tourCard__title mt-5">
                      <span>Nayana A N</span></h3>
                    <div class="d-flex items-center text-14">25 years <span className="pl-20 pr-20">  | </span> Female</div>
                    <div class="tourCard__location mt-10 mb-20">
                      <i class="icon-pin"></i> Bangalore, India</div>
                    <button class="button -outline-accent-1  pl-10 pr-10 pt-5 pb-5"> Connect</button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="tourCard -type-2">
                  <div className="user-h">
                    <img src="/img/user-img-4.jpg" alt="image" />
                  </div>
                  <div class="tourCard__content">
                    <h3 class="tourCard__title mt-5">
                      <span>Nayana A N</span></h3>
                    <div class="d-flex items-center text-14">25 years <span className="pl-20 pr-20">  | </span> Female</div>
                    <div class="tourCard__location mt-10 mb-20">
                      <i class="icon-pin"></i> Bangalore, India</div>
                    <button class="button -outline-accent-1  pl-10 pr-10 pt-5 pb-5"> Connect</button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="tourCard -type-2">
                  <div className="user-h">
                    <img src="/img/user-img-1.jpg" alt="image" />
                  </div>
                  <div class="tourCard__content">
                    <h3 class="tourCard__title mt-5">
                      <span>Nayana A N</span></h3>
                    <div class="d-flex items-center text-14">25 years <span className="pl-20 pr-20">  | </span> Female</div>
                    <div class="tourCard__location mt-10 mb-20">
                      <i class="icon-pin"></i> Bangalore, India</div>
                    <button class="button -outline-accent-1  pl-10 pr-10 pt-5 pb-5"> Connect</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <FooterFour />
      </main>
    </>
  );
}
