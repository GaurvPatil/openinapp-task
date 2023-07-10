import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "../Components/GoogleAuth";

const style = {
  label: "block text-sm font-medium leading-6 text-gray-900",
  input:
    "block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
  link: "font-semibold text-indigo-600 hover:text-indigo-500",
  submitBtn:
    "w-full  rounded-xl bg-black px-3  py-1.5 mt-4 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600",
};

export default function Signin() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full cenetrItemsflexRow bg-bgfaintwhite h-screen">
        {/* left container  */}
        <div className=" hidden sm:flex items-center justify-center h-full w-[36rem] bg-black">
          <p className=" font-bold text-white text-7xl ">Board</p>
        </div>

        {/* right container */}

        <div className="cenetrItemsflexcol h-full flex-1 px-6 py-12 lg:px-8">
          {/* right  section one  */}
          <div className="text-center sm:text-left sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="font-bold text-3xl sm:text-3xl ">Sign In </p>
            <p className="text-sm sm:text-base">Sign in to your account </p>

            <div className="flexbetweenRow mt-6 gap-[1rem] sm:gap-[0]">
              <GoogleAuth />
            </div>
          </div>

          {/* right  section two */}

          <div className=" w-full mt-6  p-9 rounded-xl h-[19.8rem] w-[20rem] sm:w-[24rem]  bg-white ">
            <form
              className="space-y-5 w-[16.3rem] sm:w-[20.3rem]"
              action="#"
              method="POST"
            >
              <div>
                <label htmlFor="email" className={style.label}>
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={style.input}
                  />
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="password" className={style.label}>
                    Password
                  </label>
                </div>
                <div className="mt-2 ">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className={style.input}
                  />
                </div>
              </div>

              <div className="text-sm ">
                <a href="#" className={style.link}>
                  Forgot password ?
                </a>
              </div>
            </form>
            <div>
              <button
                className={`cenetrItemsflexRow ${style.submitBtn}`}
                onClick={() => {
                  localStorage.setItem("user", "dummy@gmail.com");
                  if (localStorage.getItem("user")) {
                    navigate("/dashboard", { replace: true });
                  }
                }}
              >
                Sign in
              </button>
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-gray-500">
            Don’t have an account ? &nbsp;
            <a href="#" className={style.link}>
              Register here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
