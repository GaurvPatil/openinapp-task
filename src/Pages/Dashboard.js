import React, { useEffect, useState } from "react";

import bellIcon from "../assets/bellIcon.png";
import searchIcon from "../assets/Search icon.png";
import menueIcon from "../assets/menue.png";
import Card from "../Components/Card";
import ProductSchedule from "../Components/ProductSchedule";
import Chart from "../Components/Chart";
import { useNavigate } from "react-router-dom";
import Logout from "../Components/Logout";
import MenueBar from "../Components/MenueBar";
import closeIcon from "../assets/menu-close-icon.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  return (
    <div className="p-[0.5rem]  bg-bgfaintwhite flex items-center   xl:p-[2.5rem] ">
      {/* left section  */}

      <section className="hidden  xl:flex flex-col items-center justify-between p-[2.5rem] bg-black w-[17.5rem] h-[59rem] rounded-2xl">
        <MenueBar />
      </section>

      {open && (
        <section className="fixed z-10 top-1 flex flex-col gap-[2rem] p-[2.5rem] bg-black w-[17.5rem] h-screen rounded-2xl">
           <div onClick={() => setOpen(false)} className=" py-[1rem] cursor-pointer   w-full">
          <img  className="h-[1.5rem] w-[1.5rem] " src={closeIcon} alt="closeIcon"></img>
        </div>
          <MenueBar open = {open} setOpen ={setOpen}/>
        </section>
      )}

      {/* right section  */}

      <section className="px-[0.5rem] lg:px-[2rem] xl:px-[5rem] flex flex-col gap-[2.5rem]  w-full flex-initial ">



        <div className="flexbetweenRow w-full ">
          <div
            className="xl:hidden cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <img
              className="h-[1.5rem] w-[1.5rem]  "
              src={menueIcon}
              alt="menueIcon"
            ></img>
          </div>
          <p className="text-2xl text-black font-bold">Dashboard</p>
          <div className="flex gap-[1rem] items-center sm:gap-[2rem] ">
            <div className="hidden sm:flex items-center justify-center w-[11.25rem] h-[1.8rem] rounded-xl bg-white ">
              <input className="bg-white w-[8.25rem]" type="text" />
              <img src={searchIcon} className="w-3 h-3" alt="searchIcon" />
            </div>
            <img
              src={bellIcon}
              alt="bellIcon"
              className="w-[1.1rem] h-[1.25rem] cursor-pointer"
            />

            <Logout user={user} />
          </div>
        </div>
        

       <div className="w-full flex justify-center ">
       <div className="  flex items-center justify-between w-[15rem] h-[1.8rem] rounded-xl bg-white sm:hidden px-[0.5rem]">
    
    <input className="bg-white w-[12.25rem]" type="text" />
    <img src={searchIcon} className="w-3 h-3" alt="searchIcon" />
  </div>

       </div>

        <div className="flex flex-row items-center justify-center flex-wrap gap-[1rem] sm:justify-between   ">
          <Card />
        </div>

        <div className=" w-full  bg-white rounded-2xl">
          <Chart />
        </div>

        <div>
          <ProductSchedule />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
