import FooterFour from "@/components/layout/footers/FooterFour";
import Header3 from "@/components/layout/header/Header3";
import PageHeader from "@/components/tours/PageHeader";
import TourList1 from "@/components/tours/TourList1";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TourList5 from "@/components/tours/TourList5";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Trip Planner |  Machathon | Valtech",
  description: "Trip Planner for all",
};

export default function TourListPage1() {
  const [tourData, setTourData] = useState([]);

  let params = useParams();
  const title = params.title;
  console.log(title)
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(`${__STRAPI_CLIENT_URL__}`+'/api/trips?populate=*', {
          params: {
            filters: {
              $and: [
                { title: { $contains: title} },
              ],
            },
          },
        });        
        setTourData(response.data.data);
console.log(tourData)
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
        <Header3/>
        <PageHeader />
        <TourList5 tourData={tourData}/>

        {/* <TourList1 /> */}
        <FooterFour />
      </main>
    </>
  );
}
