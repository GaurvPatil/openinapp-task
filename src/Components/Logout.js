import React from "react";
import { GoogleLogout } from "react-google-login";
import userIcon from "../assets/user_icon.png";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
const client_id =
  "8491554420-tloit2go31dr9jes42knm4a680lgsmn3.apps.googleusercontent.com";

const Logout = ({ user }) => {
  const navigate = useNavigate();

  const logout = () => {
    console.log("Log Out Successfully");
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to Log out ?",
      icon: "warning",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.removeItem("user");
        swal("Log Out !", "Successfully", "success");
        navigate("/", { replace: true });
      }
    });
  };

  return (
    <>
      <GoogleLogout
        clientId={client_id}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <div class="rounded-full h-[1.8rem] w-[1.8rem] bg-black text-white text-center font-bold cursor-pointer">
              {user ? (
                user.charAt(0).toUpperCase()
              ) : (
                <img src={userIcon} alt="U" />
              )}
            </div>
          </button>
        )}
        onLogoutSuccess={logout}
      />
    </>
  );
};

export default Logout;
