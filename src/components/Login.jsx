import React, { useEffect } from "react";
// import GoogleLogin from "react-google-login";
// import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { client } from "../client";
// import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assests/share.mp4";
import logo from "../assests/logowhite.png";

const Login = () => {
  // const responseGoogle = (response) => {
  //   console.log(response);
  // };
  const navigate = useNavigate();
  function handleCallbackResponse(response) {
    // console.log("token: " + response.credential);
    const userObj = jwt_decode(response.credential);
    // console.log(userObj);
    localStorage.setItem("user", JSON.stringify(userObj));
    const { name, sub, picture } = userObj;
    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_API_TOKEN,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDev"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            {/* <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => ( */}
            <button
              id="signInDev"
              type="button"
              className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
              // onClick={renderProps.onClick}
              // disabled={renderProps.disabled}
            >
              {/* <FcGoogle className="mr-4" /> Sign in with Google */}
            </button>
            {/* )} */}
            {/* onSuccess={responseGoogle}
            onFailure={responseGoogle} */}
            {/* cookiePolicy="single_host_origin" */}
            {/* /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
