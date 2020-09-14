import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [externalServerResponse, setExternalServerResponse] = useState(
    "no response"
  );
  const [localhostServerResponse, setLocalhostServerResponse] = useState(
    "no response"
  );

  const getFirstAPI = async () => {
    console.log("calling external api from client");
    const result = await fetch("http://localhost:3001/api_to_external_website");
    console.log("result", result);
    const data = await result.json();
    console.log("data", data);
    setExternalServerResponse(JSON.stringify(data[0]));
  };

  const getSecondAPI = async () => {
    console.log("calling localhost api from client");
    const result = await fetch("/localhostapi/users");
    console.log("result", result);
    const data = await result.json();
    console.log("data", data);
    setLocalhostServerResponse(JSON.stringify(data));
  };

  useEffect(() => {
    getFirstAPI();
    getSecondAPI();
  }, []);

  return (
    <div className="App">
      <div style={{ marginTop: "3em", marginBottom: "1em" }}>
        <h2>
          Response from{" "}
          <code>
            <i>www.api.coingecko.com/api</i>
          </code>
          :
        </h2>
      </div>
      <div>{externalServerResponse}</div>
      <div style={{ marginTop: "3em", marginBottom: "1em" }}>
        <h2>
          Response from{" "}
          <code>
            <i>localhost:3001</i>
          </code>{" "}
          :{" "}
        </h2>
      </div>
      <div>{localhostServerResponse}</div>
    </div>
  );
}

export default App;
