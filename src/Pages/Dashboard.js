import React from "react";
import dashboardIcon from "../assets/dashboard_icon.png";
import transactionIcon from "../assets/transaction_icon.png";
import scheduleIcon from "../assets/schedule_icon.png";
import userIcon from "../assets/user_icon.png";
import settingIcon from "../assets/setting_icon.png";
import Card from "../Components/Card";
import ProductSchedule from "../Components/ProductSchedule";
import bellIcon from "../assets/bellIcon.png";

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
  outermostDiv: "p-[2.5rem] gap-[2.5rem] bg-bgfaintwhite",

  // left section

  leftSection: "p-[2.5rem] bg-black w-[17.5rem] h-[59rem] rounded-2xl  ",
  leftHeader: "w-full text-3xl font-bold text-white text-left ",
  menueOuterDiv: "gap-[2.5rem]  w-full",
  menueDiv: "gap-[2.5rem] w-full",
  mainMenues: "gap-[1rem] w-full  flex flex-row items-center flex-initial ",
  menueText: "text-lg text-white",
  menueSecondaryText: "text-sm text-white",
  bottomDiv: "flex flex-col gap-[1rem] w-full text-left",

  // right section
  rightSection: "px-[5rem] flex flex-col gap-[2.5rem]  w-full flex-initial ",
  firstDiv: "w-full ",
  rightHeader: "text-2xl text-black font-bold",
  secondDiv: "flex-wrap gap-[1rem]",
  thirdDiv: "h-[22.4rem] w-[62.5rem] bg-white rounded-2xl",
};

const Dashboard = () => {
  return (
    <div className={`flexbetweenRow ${style.outermostDiv}`}>
      {/* left section  */}

      <section className={`flexbetweenCol ${style.leftSection}`}>
        <div className={`flexbetweenCol ${style.menueOuterDiv}`}>
          <p className={style.leftHeader}>Board</p>
          <div className={` cenetrItemsflexcol ${style.menueDiv}`}>
            {menues.map((menue, index) => {
              return (
                <div className={style.mainMenues} key={index}>
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

        <div className={style.bottomDiv}>
          <p className={style.menueSecondaryText}>Help</p>
          <p className={style.menueSecondaryText}>Contact Us</p>
        </div>
      </section>

      {/* right section  */}

      <section className={style.rightSection}>
        <div className={`flexbetweenRow ${style.firstDiv}`}>
          <p className={style.rightHeader}>Dashboard</p>
          <div className="flex gap-[2rem] items-center">
            <div className="w-[11.25rem] h-[1.8rem]">search </div>
            <img src={bellIcon} alt="bellIcon" className="w-[1.1rem] h-[1.25rem]" />
            <div class="rounded-full h-[1.8rem] w-[1.8rem] bg-red-500"></div>
          </div>
        </div>

        <div className={`flexbetweenRow ${style.secondDiv}`}>
          <Card />
        </div>

        <div className={style.thirdDiv}>sada</div>

        <>
          <ProductSchedule />
        </>
      </section>
    </div>
  );
};

export default Dashboard;
