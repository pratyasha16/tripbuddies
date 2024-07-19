import Stars from "@/components/common/Stars";
import axios from "axios";

import { Link } from "react-router-dom";
import {React,useState,useEffect} from "react";

export default function FeaturedToures() {
  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(`${__STRAPI_CLIENT_URL__}`+'/api/trips?populate=*');

        setTourData(response.data.data);
        
      } catch (error) {
        console.error("Error fetching data from Strapi:", error);
      }
    };

    fetchTours();
  }, []);

  
   return (
    <section className="layout-pt-xl layout-pb-xl ">
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 md:text-24"
            >
              Featured Trips
            </h2>
          </div>

          <div className="col-auto">
            <Link
              to={"/tour-list-1"}
              data-aos="fade-right"
              data-aos-delay=""
              className="buttonArrow d-flex items-center "
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-30 justify-between pt-40 sm:pt-20 mobile-css-slider -w-300"
        >
          {tourData.map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <Link
                to={`/tour-single-1/${elm.id}`}
                className="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12  -hover-shadow"
              >
                <div className="tourCard__header">
                  <div className="tourCard__image ratio ratio-28:20">
                    <img src={`${__STRAPI_CLIENT_URL__}`+elm.attributes.tripimage.data[0].attributes.url} alt="image" className="img-ratio" />
                  </div>

                  <button className="tourCard__favorite">
                    <i className="icon-heart"></i>
                  </button>
                </div>

                <div className="tourCard__content px-20 py-10">
                  <div className="tourCard__location d-flex items-center text-13 text-light-2">
                    <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                    {elm.attributes.state+", India"}
                  </div>

                  <h3 className="tourCard__title text-16 fw-500 mt-5">
                    <span>{elm.attributes.title}</span>
                  </h3>

                  <div className="tourCard__rating text-13 mt-5">
                    <div className="d-flex items-center">
                      <div className="d-flex x-gap-5">
                        <Stars star={elm.rating} />
                      </div>

                      <span className="text-dark-1 ml-10">
                        {elm.rating} ({elm.ratingCount})
                      </span>
                    </div>
                  </div>

                  <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                    <div className="d-flex items-center">
                      <i className="icon-clock text-16 mr-5"></i>
                      {elm.attributes.duration>1 ? elm.attributes.duration+" days" : elm.attributes.duration+ " day"}
                    </div>

                    <div>
                      From <span className="text-16 fw-500">₹ {elm.attributes.cost}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
