import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import arrow from "../assets/arrow.png";

const data = [
  {
    name: "Week 1",
    Guest: 380,
    User: 380,
  },
  {
    name: "Week 2",
    Guest: 150,
    User: 200,
  },
  {
    name: "Week 3",
    Guest: 450,
    User: 300,
  },
  {
    name: "Week 4",
    Guest: 150,
    User: 250,
  },
];

const Chart = () => {
  return (
    <div className="flexbetweenCol p-[2rem] gap-[1rem]">
      <div className="flexbetweenRow  w-full">
        <div className="flex flex-col  justify-between ">
          <p className="text-base font-bold float-left sm:text-lg  ">Activities</p>
          <p className="flexbetweenRow text-xs text-secondarycolor cursor-pointer">
            May - June 2021 &nbsp;
            <img src={arrow} alt="arrow" />
          </p>
        </div>
        <div className="flexbetweenRow gap-[2rem]">
          <p className="text-sm font-bold text-black">
            <span className="dot" style={{ background: "#EE8484" }}></span>
            &nbsp; Guest
          </p>
          <p className="text-sm font-bold text-black">
            <span className="dot" style={{ background: "#98D89E" }}></span>
            &nbsp; User
          </p>
        </div>
      </div>

      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height={240}>
          <LineChart width={500} height={150} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Line type="monotone" dataKey="Guest" stroke="#EE8484" />
            <Line type="monotone" dataKey="User" stroke="#98D89E" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
