import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [res, setRes] = useState("initial state");

  const getAPI = async () => {
    const result = await fetch("http://localhost:3001/coins/markets");
    console.log("result", result);
    const data = await result.json();
    console.log("data", data);
    setRes(JSON.stringify(data));
  };
  useEffect(() => {
    getAPI();
  }, []);

  return <div className="App">{res}</div>;
}

export default App;
