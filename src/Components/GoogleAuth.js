import React from "react";
import googleIcon from "../assets/google-icon 1.png";
import appleIcon from "../assets/apple 1.png";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { client_id } from "./constant";


const GoogleAuth = () => {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    console.log("Login Success : ", res.profileObj);
    localStorage.setItem("user", res.profileObj.email);
    if (localStorage.getItem("user")) {
      navigate("/dashboard", { replace: true });
    }
  };

  const onFailure = (res) => {
    console.log("Login Failed : ", res);
  };

  return (
    <>
      <GoogleLogin
        clientId={client_id}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <div className="cenetrItemsflexRow bg-white rounded-xl p-1 cursor-pointer h-[1.8rem] w-[9rem]  sm:w-[11.25rem]  gap-[8px] ">
              <img src={googleIcon} alt="googleIcon" className="h-[14px]" />
              <p className="text-secondarycolor text-xs">Sign in with Google</p>
            </div>
          </button>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        className="w-[11.25rem] h-[1.8rem]"
      />
      <div className="cenetrItemsflexRow bg-white rounded-xl p-1 cursor-pointer h-[1.8rem] w-[9rem]  sm:w-[11.25rem]  gap-[8px] ">
        <img src={appleIcon} alt="appleIcon" className="h-[14px]" />{" "}
        <p className="text-secondarycolor text-xs">Sign in with Apple</p>
      </div>
    </>
  );
};

export default GoogleAuth;
