// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
// import { useEffect } from "react";
// import jwt_decode from "jwt-decode";
// import { client } from "./client";

function App() {
  // console.log("App rerendered");
  // const navigate = useNavigate();
  // function handleCallbackResponse(response) {
  //   // console.log("token: " + response.credential);
  //   const userObj = jwt_decode(response.credential);
  //   // console.log(userObj);
  //   localStorage.setItem("user", JSON.stringify(userObj));
  //   const { name, sub, picture } = userObj;
  //   const doc = {
  //     _id: sub,
  //     _type: "user",
  //     userName: name,
  //     image: picture,
  //   };
  //   client.createIfNotExists(doc).then(() => {
  //     navigate("/", { replace: true });
  //   });
  // }
  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id: process.env.REACT_APP_GOOGLE_API_TOKEN,
  //     callback: handleCallbackResponse,
  //   });

  //   google.accounts.id.renderButton(document.getElementById("signInDev"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // });

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
