import FooterFour from "@/components/layout/footers/FooterFour";
import Header3 from "@/components/layout/header/Header3";
import axios from "axios";
import ReactWhatsapp from 'react-whatsapp';
import { useLocation } from 'react-router-dom';


import { useEffect, useState, useRef } from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Trip Planner |  Machathon | Valtech",
  description: "Trip Planner for all",
};

export default function FindmyCompanion() {
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const [calender, setCalender] = useState("");
  const [tourType, setTourType] = useState("");
  const [companionData, setCompanionData] = useState([]);
  const location = useLocation();
const { age, foodPreference, mobile } = location.state || {};


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

  useEffect(() => {
    const fetchCompanions = async () => {
      try {
        const response = await axios.get(`${__STRAPI_CLIENT_URL__}/api/companions`, {
          params: {
            populate: '*',
            filters: {
              FoodChoice: {
                $contains: foodPreference
              }
            }
          }
        });
        setCompanionData(response.data.data);  // Adjust according to your response structure

      } catch (error) {
        console.error("Error fetching data from Strapi:", error);
      }
    };

    fetchCompanions();
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
          </div> 
        </section> 

        <section className="pt-60 pb-80">
          <div className="container">
            <div class="row pt-30"><div class="col-auto">
              <h1 class="pageHeader__title">Find your Companion's</h1>
            </div></div>
            <div className="row y-gap-30 pt-30">
               {companionData.map((elm, i) => (
                elm.attributes.Mobile !== mobile && (
              <div className="col-4">
                <div className="tourCard -type-2">
                  <div className="user-h">
                    <img src={elm.attributes.Photourl} alt="image" />
                  </div>
                  <div class="tourCard__content">
                    <h3 class="tourCard__title mt-5">
                      <span>{elm.attributes.Name}</span></h3>
                    <div class="d-flex items-center text-14">Age: {elm.attributes.Age} <span className="pl-20 pr-20">  | </span> {elm.attributes.Gender}</div>
                    <div class="tourCard__location mt-10 mb-20">
                      <i class="icon-pin"></i> Bangalore, India</div>
                      <ReactWhatsapp number={elm.attributes.Mobile}><button class="button -outline-accent-1  pl-10 pr-10 pt-5 pb-5"> Connect</button></ReactWhatsapp>     
                  </div>
                </div>
              </div>
                )
            ))} 
            </div>
          </div>
        </section>
        <FooterFour />
      </main>
    </>
  );
}

