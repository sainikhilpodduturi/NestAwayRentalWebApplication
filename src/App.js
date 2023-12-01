import React, { useState } from "react";
import Properties from "./components/Properties";
import Navbar from "./components/Navbar";

const App = () => {
  let [mode, setMode] = useState("light");
  let changeMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <>
      <Navbar mode={mode} changeMode={changeMode} />
      <Properties mode={mode} />
    </>
  );
};

export default App;
