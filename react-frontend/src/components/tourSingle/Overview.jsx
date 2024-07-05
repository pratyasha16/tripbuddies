import React from "react";

export default function Overview(tourData) {
  // console.log(tourData)
  // console.log(tourData.tourData.attributes.description)
  return (
    <div>
      <h2 className="text-30">Tour Overview</h2>
      {tourData.tourData.attributes.description.map((elm, i) => (
                  <p>{elm.children[0].text}</p>
                  // <p>hello</p>
      
      ))}
    </div>
  );
}
