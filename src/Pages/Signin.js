import React from "react";
import googleIcon from "../assets/google-icon 1.png";
import appleIcon from "../assets/apple 1.png";

const style = {
  // left container
  leftContainer: "h-screen w-[36rem] bg-black",
  leftText: "text-7xl font-bold text-white ",
  // right container
  rightContainer: "h-screen flex-1 bg-bgfaintwhite  px-6 py-12 lg:px-8",
  // Right section one (R - Right)
  RdivOne: "sm:mx-auto sm:w-full sm:max-w-sm",
  divOneText: "text-3xl font-bold",
  RIconsOuterDiv: "mt-6 ",
  RdivIcon: "w-[11.25rem] h-[1.8rem] gap-[8px] bg-white rounded-xl p-1",
  iconsText: "text-secondarycolor text-xs",
  iconsImage: "h-[14px]",
  // right section two
  RDivTwo: "mt-6 w-[24rem] h-[19.8rem]  bg-white p-9 rounded-xl",
  form: "space-y-5 w-[20.3rem]",
  label: "block text-sm font-medium leading-6 text-gray-900",
  input:
    "block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
  link: "font-semibold text-indigo-600 hover:text-indigo-500",
  submitBtn:
    " w-full  rounded-xl bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600",
  lastText: "mt-5 text-center text-sm text-gray-500",
};

export default function Signin() {
  return (
    <>
      <div className="cenetrItemsflexRow ">
        {/* left container  */}
        <div className={`cenetrItemsflexRow ${style.leftContainer} `}>
          <p className={style.leftText}>Board</p>
        </div>

        {/* right container */}

        <div className={`cenetrItemsflexcol ${style.rightContainer}`}>
          {/* right  section one  */}
          <div className={style.RdivOne}>
            <p className={style.divOneText}>Sign In </p>
            <p>Sign in to your account </p>

            <div className={` flexbetweenRow ${style.RIconsOuterDiv} `}>
              {[
                {
                  text: "Sign in with Google",
                  imgUrl: googleIcon,
                  imgAlt: "google-icon",
                },
                {
                  text: "Sign in with Apple",
                  imgUrl: appleIcon,
                  imgAlt: "apple-icon",
                },
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`cenetrItemsflexRow ${style.RdivIcon} `}
                  >
                    <img
                      src={item.imgUrl}
                      alt={item.imgAlt}
                      className={style.iconsImage}
                    />{" "}
                    <p className={style.iconsText}>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* right  section two */}

          <div className={style.RDivTwo}>
            <form className={style.form} action="#" method="POST">
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

              <div>
                <button
                  type="submit"
                  className={`cenetrItemsflexRow ${style.submitBtn}`}
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <p className={style.lastText}>
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
