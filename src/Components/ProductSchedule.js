import React from "react";
import arrow from "../assets/arrow.png";
import piechart from "../assets/Pie Chart.png";

const topProducts = [
  {
    color: "#98D89E",
    text: "Basic Tees",
    number: "55%",
  },
  {
    color: "#F6DC7D",
    text: "Custom Short Pants ",
    number: "31%",
  },
  {
    color: "#EE8484",
    text: "Super Hoodies",
    number: "14%",
  },
];

const divHeaders = (text1, text2) => {
  return (
    <div className="flexbetweenRow">
      <p className="text-lg font-bold ">{text1}</p>
      <p className="flexbetweenRow text-xs text-secondarycolor cursor-pointer">
        {text2} &nbsp;
        <img
          src={arrow}
          alt="arrow"
          className={text2 === "See All" && "-rotate-90 "}
        />
      </p>
    </div>
  );
};

const ProductSchedule = () => {
  return (
    <div className="flexbetweenRow flex-wrap gap-[1rem] ">
      <div className="h-[16rem] w-[30rem] flex flex-col gap-[1rem] rounded-2xl bg-white p-[2rem] ">
        {divHeaders("Top products", "May - June 2021")}

        <div className="cenetrItemsflexRow gap-[4.5rem] ">
          <img src={piechart} alt="piechart" />
          <div className="flexbetweenCol">
            {topProducts.map((item, index) => {
              return (
                <div className="w-full pt-3" key={index}>
                  <p className="text-sm font-bold text-black">
                    <span
                      className="dot"
                      style={{ background: item.color }}
                    ></span>
                    &nbsp;
                    {item.text}
                  </p>
                  <p className="text-xs text-secondarycolor pt-0.5 pl-3.5">
                    {item.number}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="h-[16rem] w-[30rem] flex flex-col gap-[1rem] rounded-2xl bg-white p-[2rem] ">
        {divHeaders("Today’s schedule", "See All")}
        <div className="flex flex-col gap-[1rem]">
          <div className="p-[0.5rem] border-l-4 border-green-500">
            <p className="text-sm text-darkGray">
              Meeting with suppliers from Kuta Bali
            </p>
            <p className="text-xs text-secondarycolor">14.00-15.00</p>
            <p className="text-xs text-secondarycolor">at Sunset Road, Kuta, Bali</p>
          </div>
          <div className="p-[0.5rem]  border-l-4 border-indigo-500">
            <p className="text-sm text-darkGray">
              Check operation at Giga Factory 1
            </p>
            <p className="text-xs text-secondarycolor">18.00-20.00</p>
            <p className="text-xs text-secondarycolor">at Central Jakarta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSchedule;
