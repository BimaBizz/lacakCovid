import React, { useEffect, useState } from "react";
import TabelCovid from "./component/TabelCovid";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar title="Covid-19 Data" />
      <TabelCovid />
    </div>
  );
};

export default App;
