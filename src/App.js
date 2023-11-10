import React, { useEffect } from "react";

import axios from "axios";
import Analysis from "./Pages/Analysis";
import Signal from "./Pages/Signal";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Analysis />
      <Signal />
    </>
  );
}

export default App;
