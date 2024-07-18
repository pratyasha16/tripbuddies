import React from "react";

export default function Overview(tourData) {
 
  return (
    <div>
      <h2 className="text-30">Tour Overview</h2>
      {tourData.tourData.attributes.description.map((elm, i) => (
                  <p>{elm.children[0].text}</p>
      
      ))}
    </div>
  );
}
