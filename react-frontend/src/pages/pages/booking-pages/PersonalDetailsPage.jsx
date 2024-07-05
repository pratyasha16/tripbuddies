 
import Header3 from "@/components/layout/header/Header3";
import FooterFour from "@/components/layout/footers/FooterFour";
import PersonalDetails from "@/components/pages/PersonalDetails.jsx";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";


const metadata = {
  title: "Trip Planner |  Machathon | Valtech",
  description: "Trip Planner for all",
};

export default function PersonalDetailsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header3 />
        <PersonalDetails />
        <FooterFour />
      </main>
    </>
  );
}