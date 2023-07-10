import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const client_id =
  "8491554420-tloit2go31dr9jes42knm4a680lgsmn3.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: client_id,
        scope: " ",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} exact />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
