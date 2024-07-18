import { excluded, included } from "@/data/tourSingleContent";
import React from "react";

export default function Included(tourData) {

  return (
    <div className="row x-gap-130 y-gap-20 pt-20">
      <div className="col-lg-6">
        <div className="y-gap-15">
          {tourData.tourData.attributes.included.map((elm, i) => (
            <div key={i} className="d-flex">
              <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
              {elm}
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
}
