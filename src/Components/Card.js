import React from "react";
import revenueIcon from "../assets/revenue.png";
import transactionsIcon from "../assets/total_transactions_icon.png";
import likesIcon from "../assets/like.png";
import usersIcon from "../assets/users.png";

const cardData = [
  {
    icon: revenueIcon,
    text: "Total Revenues ",
    number: "$2,129,430",
    bg: "lightgreen",
  },
  {
    icon: transactionsIcon,
    text: "Total Transactions ",
    number: "1,520",
    bg: "lightYellow",
  },
  {
    icon: likesIcon,
    text: "Total Likes",
    number: "9,721",
    bg: "lightPink",
  },
  {
    icon: usersIcon,
    text: "Total Users",
    number: 892,
    bg: "lightBlue",
  },
];

const Card = () => {
  return (
    <>
      {cardData.map((card, index) => {
        return (
          <div
            className="w-[13.8rem] h-[7.5rem]  rounded-xl p-[1rem]"
            style={{ background: card.bg }}
            key={index}
          >
            <div className="mb-[1rem] text-right bg-white w-full ">
              <img src={card.icon} alt="iconImg" className="float-right" />
            </div>

            <div className="mt-10">
              <p className="text-sm">{card.text}</p>
              <p className="text-2xl font-bold">{card.number}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
