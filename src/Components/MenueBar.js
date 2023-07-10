import React from "react";
import dashboardIcon from "../assets/dashboard_icon.png";
import transactionIcon from "../assets/transaction_icon.png";
import scheduleIcon from "../assets/schedule_icon.png";
import userIcon from "../assets/user_icon.png";
import settingIcon from "../assets/setting_icon.png";


const menues = [
  {
    icon: dashboardIcon,
    text: "Dashboard",
  },
  {
    icon: transactionIcon,
    text: "Transactions",
  },
  {
    icon: scheduleIcon,
    text: "Schedules",
  },

  {
    icon: userIcon,
    text: "Users",
  },
  {
    icon: settingIcon,
    text: "Settings",
  },
];
const style = {
  menueText: "text-lg text-white",
  menueSecondaryText: "text-sm text-white cursor-pointer",
};
const MenueBar = () => {
  return (
    <>
      
      <div className="flexbetweenCol gap-[2.5rem]  w-full">
     
        <p className="w-full text-3xl font-bold text-white text-left">Board</p>
        <div className="cenetrItemsflexcol gap-[2.5rem] w-full">
          {menues.map((menue, index) => {
            return (
              <div
                className="gap-[1rem] w-full  flex flex-row items-center flex-initial cursor-pointer"
                key={index}
              >
                <img
                  src={menue.icon}
                  alt="png"
                  className={menue.text === "Dashboard" && "font-bold"}
                />
                <p
                  className={
                    menue.text === "Dashboard"
                      ? `font-bold ${style.menueText}`
                      : style.menueText
                  }
                >
                  {menue.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-[1rem] w-full text-left">
        <p className={style.menueSecondaryText}>Help</p>
        <p className={style.menueSecondaryText}>Contact Us</p>
      </div>
    </>
  );
};

export default MenueBar;
