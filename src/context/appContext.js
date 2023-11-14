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

  const [tokenScore, setTokenScore] = useState(-1);
  const [pairAge, setPairAge] = useState(0);
  const [ticker, setTicker] = useState("");

  const [buyTax, setBuyTax] = useState("");
  const [sellTax, setsellTax] = useState("");

  return (
    <AppContext.Provider
      value={{
        tokenScore,
        setTokenScore,
        pairAge,
        setPairAge,
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
        ticker,
        setTicker,
        buyTax,
        setBuyTax,
        sellTax,
        setsellTax,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
