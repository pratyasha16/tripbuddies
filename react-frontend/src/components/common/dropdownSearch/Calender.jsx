import { useState,useEffect } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

export default function Calender() {
  const [dates, setDates] = useState([
    new DateObject().setDay(10),
    new DateObject().setDay(12).add(0, "month"),
  ]);
  useEffect(() => {
    const fetchdates = async () => {
      localStorage.setItem('dateFilter',dates)
    };

    fetchdates();
  }, [dates]);
  return (
    <DatePicker
      inputClass="custom_input-picker"
      containerClassName="custom_container-picker"
      value={dates}
      onChange={setDates}
      numberOfMonths={2}
      offsetY={10}
      range
      className="yellow"
      rangeHover
      format="MMMM DD"
    />
  );
}
