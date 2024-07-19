import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import { speedFeatures } from "@/data/tourFilteringOptions";
import { tourDataTwo } from "@/data/tours";
import Stars from "../common/Stars";
import Pagination from "../common/Pagination";
import axios from "axios";

import { Link } from "react-router-dom";

export default function TourList1() {
  const [sortOption, setSortOption] = useState("");
  const [ddActives, setDdActives] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const dropDownContainer = useRef();
  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(`${__STRAPI_CLIENT_URL__}`+'/api/trips?populate=*');
        setTourData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data from Strapi:", error);
      }
    };

    fetchTours();
  }, []);


  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setDdActives(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);


  return (
    <section className="layout-pb-xl">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="lg:d-none">
              <Sidebar />
            </div>

            <div className="accordion d-none mb-30 lg:d-flex js-accordion">
              <div
                className={`accordion__item col-12 ${
                  sidebarActive ? "is-active" : ""
                } `}
              >
                <button
                  className="accordion__button button -dark-1 bg-light-1 px-25 py-10 border-1 rounded-12"
                  onClick={() => setSidebarActive((pre) => !pre)}
                >
                  <i className="icon-sort-down mr-10 text-16"></i>
                  Filter
                </button>

                <div
                  className="accordion__content"
                  style={sidebarActive ? { maxHeight: "2000px" } : {}}
                >
                  <div className="pt-20">
                    <Sidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-9 col-lg-8">
            <div className="row y-gap-5 justify-between">
              <div className="col-auto">
                <div>1362 results</div>
              </div>

              <div ref={dropDownContainer} className="col-auto">
                <div
                  className={`dropdown -type-2 js-dropdown js-form-dd ${
                    ddActives ? "is-active" : ""
                  } `}
                  data-main-value=""
                >
                  <div
                    className="dropdown__button js-button"
                    onClick={() => setDdActives((pre) => !pre)}
                  >
                    <span>Sort by: </span>
                    <span className="js-title">
                      {sortOption ? sortOption : "Featured"}
                    </span>
                    <i className="icon-chevron-down"></i>
                  </div>

                  <div className="dropdown__menu js-menu-items">
                    {speedFeatures.map((elm, i) => (
                      <div
                        onClick={() => {
                          setSortOption((pre) => (pre == elm ? "" : elm));
                          setDdActives(false);
                        }}
                        key={i}
                        className="dropdown__item"
                        data-value="fast"
                      >
                        {elm}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="row y-gap-30 pt-30">
              {tourData.map((elm, i) => (
                <div className="col-12" key={i}>
                   <Link
                    to={`/tour-single-1/${elm.id}`}
                    className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
                  ></Link>
                  <div className="tourCard -type-2">
                    <div className="tourCard__image">
                      <img src={`${__STRAPI_CLIENT_URL__}`+elm.attributes.tripimage.data[0].attributes.url
} alt="image" />

                      {/* {elm.badgeText && (
                        <div className="tourCard__badge">
                          <div className="bg-accent-1 rounded-12 text-white lh-11 text-13 px-15 py-10">
                            {elm.badgeText}
                          </div>
                        </div>
                      )}

                      {elm.featured && (
                        <div className="tourCard__badge">
                          <div className="bg-accent-2 rounded-12 text-white lh-11 text-13 px-15 py-10">
                            FEATURED
                          </div>
                        </div>
                      )} */}

                      <div className="tourCard__favorite">
                        <button className="button -accent-1 size-35 bg-white rounded-full flex-center">
                          <i className="icon-heart text-15"></i>
                        </button>
                      </div>
                    </div>

                    <div className="tourCard__content">
                      <div className="tourCard__location">
                        <i className="icon-pin"></i>
                        {"India, "+elm.attributes.state}
                      </div>

                      <h3 className="tourCard__title mt-5">
                        <span>{elm.attributes.title}</span>
                      </h3>

                      <div className="d-flex items-center mt-5">
                        <div className="d-flex items-center x-gap-5">
                          <Stars star={elm.rating} font={12} />
                        </div>

                        <div className="text-14 ml-10">
                          <span className="fw-500">{elm.rating}</span> (
                          {elm.ratingCount})
                        </div>
                      </div>

              
                  <p className="tourCard__text mt-5">{elm.attributes.description[0].children[0].text}</p>
                  <p className="tourCard__text mt-5">{elm.attributes.description[1].children[0].text}</p>

                
                      {/* <div className="row x-gap-20 y-gap-5 pt-30">
                        {elm.features?.map((elm2, i2) => (
                          <div key={i2} className="col-auto">
                            <div className="text-14 text-accent-1">
                              <i className={`${elm2.icon} mr-10`}></i>
                              {elm2.name}
                            </div>
                          </div>
                        ))}
                      </div>  */}
                    </div>

                    <div className="tourCard__info">
                      <div>
                        <div className="d-flex items-center text-14">
                          <i className="icon-clock mr-10"></i>
                          {elm.attributes.duration>1 ? elm.attributes.duration+" days" : elm.attributes.duration+ " day"}
                        </div>

                        <div className="tourCard__price">
                          <div>₹5000 {elm.fromPrice}</div>

                          <div className="d-flex items-center">
                            From{" "}
                            <span className="text-20 fw-500 ml-5">
                            ₹ {elm.attributes.cost}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button className="button -outline-accent-1 text-accent-1">
                        <Link to={`/tour-single-1/${elm.id}`}>
                          View Details
                          <i className="icon-arrow-top-right ml-10"></i>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex justify-center flex-column mt-60">
              <Pagination />

              <div className="text-14 text-center mt-20">
                Showing results 1-30 of 1,415
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
