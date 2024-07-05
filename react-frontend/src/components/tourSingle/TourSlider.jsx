import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { tourData } from "@/data/tours";
import { React, useState, useEffect } from "react";
import axios from "axios";
import Stars from "../common/Stars";
import { Link } from "react-router-dom";

export default function TourSlider(tourData) {
  const [recommendTrip, setRecommendTrip] = useState(null); // Changed to null for better initial state handling

 console.log(tourData)
 useEffect(() => {
  const fetchTours = async () => {
    try {
      const response = await axios.get(`${__STRAPI_CLIENT_URL__}`+'/api/trips?populate=*');
      setRecommendTrip(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data from Strapi:", error);
    }
  };

  fetchTours();
}, []); 

  
  // useEffect(() => {
  //   if (!tourData || !tourData.tourData || !tourData.tourData.attributes) {
  //     console.log("tourData is not properly initialized or missing attributes");
  //     return;
  //   }

  //   const fetchTours = async () => {
  //     try {
  //       console.log("hello from try")
  //       const response = await axios.get('http://localhost:1337/api/trips?populate=*', {
  //         params: {
  //           filters: {
  //             state: { $contains: tourData.tourData.attributes.state },
  //           },
  //         },
  //       });
  //       setRecommendTrip(response.data.data);
  //       console.log("Data fetched successfully:", response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching data from Strapi:", error);
  //     }
  //   };

  //   fetchTours();
  // }, [tourData]);


console.log(recommendTrip)

// {recommendTrip.map((elm, i) => (

// console.log("http://localhost:1337"+elm.attributes.tripimage.data[0].attributes.url)
// ))}

  if (!tourData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="layout-pt-xl layout-pb-xl bg-accent-1-05">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h2 className="text-30">You might also like...</h2>
          </div>
        </div>

        <div className="relative pt-40 sm:pt-20">
          <div
            className="overflow-hidden pb-5 js-section-slider"
            data-gap="30"
            data-slider-cols="xl-4 lg-3 md-2 sm-1 base-1"
            data-nav-prev="js-slider1-prev"
            data-nav-next="js-slider1-next"
          >
            <div className="swiper-wrapper">
              <Swiper
                spaceBetween={30}
                className="w-100"
                pagination={{
                  el: ".pbutton1",
                  clickable: true,
                }}
                navigation={{
                  prevEl: ".js-slider10-prev",
                  nextEl: ".js-slider10-next",
                }}
                modules={[Navigation, Pagination]}
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {recommendTrip.map((elm, i) => (
                  <SwiperSlide key={i}>
                    <Link
                      to={`/tour-single-1/${elm.id}`}
                      className="tourCard -type-1 py-10 px-10 border-1 rounded-12 bg-white -hover-shadow"
                    >
                      <div className="tourCard__header">
                        <div className="tourCard__image ratio ratio-28:20">
                          <img
                            src={`${__STRAPI_CLIENT_URL__}`+elm.attributes.tripimage.data[0].attributes.url}
                            // src="https://c8.alamy.com/comp/2PDPTE6/i-love-goa-sign-candolim-beach-goa-india-2PDPTE6.jpg"
                            className="img-ratio rounded-12"
                          />
                        </div>

                        <button className="tourCard__favorite">
                          <i className="icon-heart"></i>
                        </button>
                      </div>

                      <div className="tourCard__content px-10 pt-10">
                        <div className="tourCard__location d-flex items-center text-13 text-light-2">
                          <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                          {elm.attributes.state}
                        </div>

                        <h3 className="tourCard__title text-16 fw-500 mt-5">
                          <span>{elm.attributes.title}</span>
                        </h3>

                        <div className="tourCard__rating d-flex items-center text-13 mt-5">
                          <div className="d-flex x-gap-5">
                            <Stars star={elm.rating} />
                          </div>

                          <span className="text-dark-1 ml-10">
                            {elm.rating} ({elm.ratingCount})
                          </span>
                        </div>

                        <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                          <div className="d-flex items-center">
                            <i className="icon-clock text-16 mr-5"></i>
                            {elm.attributes.duration}
                          </div>

                          <div>
                            From{" "}
                            <span className="text-16 fw-500">₹ {elm.attributes.cost}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="navAbsolute">
            <button className="navAbsolute__button bg-white js-slider10-prev">
              <i className="icon-arrow-left text-14"></i>
            </button>

            <button className="navAbsolute__button bg-white js-slider10-next">
              <i className="icon-arrow-right text-14"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
