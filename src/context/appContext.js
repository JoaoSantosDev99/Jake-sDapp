import { ethers } from "ethers";
import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [renounced, setRenounced] = useState("");
  const [mint, setmint] = useState("");
  const [honeypot, sethoneypot] = useState("");
  const [verified, setverified] = useState("");

  const [predictions, setPredictions] = useState("");
  const [volume, setVolume] = useState("");
  return (
    <AppContext.Provider
      value={{
        renounced,
        setRenounced,
        mint,
        setmint,
        honeypot,
        sethoneypot,
        verified,
        setverified,
        predictions,
        setPredictions,
        volume,
        setVolume,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
