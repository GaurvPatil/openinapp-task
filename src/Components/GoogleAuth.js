import React from "react";
import googleIcon from "../assets/google-icon 1.png";
import appleIcon from "../assets/apple 1.png";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
const client_id =
  "8491554420-tloit2go31dr9jes42knm4a680lgsmn3.apps.googleusercontent.com";

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
            <div className="cenetrItemsflexRow w-[11.25rem] h-[1.8rem] gap-[8px] bg-white rounded-xl p-1 cursor-pointer">
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
      <div className="cenetrItemsflexRow w-[11.25rem] h-[1.8rem] gap-[8px] bg-white rounded-xl p-1 cursor-pointer">
        <img src={appleIcon} alt="appleIcon" className="h-[14px]" />{" "}
        <p className="text-secondarycolor text-xs">Sign in with Apple</p>
      </div>
    </>
  );
};

export default GoogleAuth;
