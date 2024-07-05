import FooterFour from "@/components/layout/footers/FooterFour";
import Header3 from "@/components/layout/header/Header3";
import Hero from "@/components/tours/Hero";
import TourList5 from "@/components/tours/TourList5";
import {React,useState,useEffect} from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Trip Planner |  Machathon | Valtech",
  description: "Trip Planner for all",
};


export default function TourListPage2() {
  const [tourData, setTourData] = useState([]);

  const location = useLocation();

  // Function to parse query string into an object
  const parseQueryString = (queryString) => {
    return queryString
      ? JSON.parse('{"' + decodeURI(queryString.substring(1).replace(/&/g, '","').replace(/=/g,'":"')) + '"}')
      : {};
  };

  const queryParams = parseQueryString(location.search);

  console.log(queryParams);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(`${__STRAPI_CLIENT_URL__}`+'/api/trips?populate=*', {
          params: {
            filters: {
              $and: [
                { state: { $contains: queryParams.location } },
                { Category: { $contains: queryParams.tourType } },
              ],
            },
          },
        });        
        setTourData(response.data.data);
        console.log(response.data.data);
        console.log(queryParams.location);
        console.log(queryParams.tourType);

      } catch (error) {
        console.error("Error fetching data from Strapi:", error);
      }
    };

    fetchTours();
  }, []);

  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
      <Header3 />
        <Hero /> 
        <TourList5 tourData={tourData}/>
        <FooterFour />
      </main>
    </>
  );
}
