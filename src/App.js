import React, { useEffect } from "react";

import axios from "axios";
import Analysis from "./Pages/Analysis";
import Signal from "./Pages/Signal";
import Header from "./components/Header";

function App() {
  const fetchData = async () => {
    try {
      console.log("Test");
      // const response = await axios.get(
      //   `https://rickandmortyapi.com/api/character`
      // );
      // const response = await axios.get(
      //   `https://54.204.176.35:3000/is_registered?wallet_address=${"0xadf9bfb903e34b25cec47b6d1a468741fdb71f69"}`
      // );

      const response = await axios.get(
        `http://54204.176.35:3000/get_info?contract_address=${0xadf9bfb903e34b25cec47b6d1a468741fdb71f69}`
      );

      //0x514910771af9ca656af840dff83e8264ecf986ca
      console.log("Data:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Analysis />
      <Signal />
    </>
  );
}

export default App;
