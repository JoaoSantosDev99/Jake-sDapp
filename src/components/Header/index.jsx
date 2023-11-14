import { useAccount, useNetwork, useSigner, useSwitchNetwork } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { shortAdd } from "../../utils";

import search from "../../Assets/search.svg";
import logoSearch from "../../Assets/searchLogo.svg";
import logo from "../../Assets/Logo.svg";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../context/appContext";
import { isAddress } from "ethers/lib/utils.js";
import abi from "../../contracts/abi.json";
import { ethers } from "ethers";

const Header = () => {
  const { open } = useWeb3Modal();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const [isRegisted, setisRegisted] = useState(false);
  const [searchContract, setSearchContract] = useState("");
  const { address, isConnected } = useAccount();

  const {
    setVolume,
    setPredictions,
    setRenounced,
    setmint,
    sethoneypot,
    setverified,
    setTokenScore,
    setPairAge,
    setTicker,
    setBuyTax,
    setsellTax,
  } = useContext(AppContext);

  const connectWallet = () => {
    if (chain?.id !== 1) {
      switchNetwork?.(1);
    }

    try {
      switchNetwork?.(1);
      open();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      // const response = await axios.get(
      //   `http://54.204.176.35:3000/is_registered?wallet_address=${address}`
      // );

      const response = await axios.get(
        `http://54.204.176.35:3000/is_registered?wallet_address=${address}`
      );

      // 0x903b670f89969740ADA5ccD78d8aDfFA474F7e28
      setisRegisted(response.data.is_registered);
      console.log("resp 1", response.data.is_registered, address);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchContractData = async () => {
    console.log(searchContract);

    if (!isAddress(searchContract)) {
      alert("Invalid Contract");
      return;
    }

    const statProv = new ethers.providers.JsonRpcProvider(
      "https://rpc.ankr.com/eth"
    );

    const provContract = new ethers.Contract(searchContract, abi, statProv);

    try {
      const ticker = await provContract.symbol();
      const response = await axios.get(
        `http://54.204.176.35:3000/get_info?contract_address=${searchContract}`
      );

      const pricePred = await axios.get(
        `http://54.204.176.35:3000/get_prediction?contract_address=${searchContract}`
      );

      setRenounced(response.data.is_contract_renounced);
      setmint(response.data.no_mint_function);
      sethoneypot(response.data.not_a_honeypot);
      setverified(response.data.source_code_verified);

      setPredictions(pricePred.data.predictions);

      setTokenScore(response.data.token_score);

      const today = new Date();
      const then = new Date(response.data.date_created);
      const ageInDays = Math.abs(today - then) / 1000 / 60 / 60 / 24;

      setPairAge(commafy(ageInDays.toFixed(0)));
      setVolume(commafy(pricePred.data.volume_24h.toFixed(0)));

      setTicker(ticker);

      setBuyTax(response.data.buy_tax);
      setsellTax(response.data.sell_tax);

      console.log("test", pricePred.data.volume_24h);
      console.log("resp", response.data, pricePred.data);
    } catch (error) {
      console.log(error);
    }
  };

  const setContractInput = (e) => {
    setSearchContract(e.target.value);
  };

  useEffect(() => {
    if (isConnected) {
      fetchData();
    }
  }, [address, isConnected]);

  function commafy(num) {
    var str = num.toString().split(".");
    if (str[0].length >= 3) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
  }

  return (
    <header className="w-full flex justify-center">
      {/* Desktop */}
      <div className="hidden lg:flex max-w-screen-2xl w-full gap-[37px] justify-between p-5">
        {/* Logo */}
        <h1 className="flex items-center gap-4">
          <img
            src={logo}
            alt=""
            className="min-w-[256px]"
          />
        </h1>

        {/* Input */}
        <div className="w-full gap-[10px] px-[20px] flex justify-between items-center rounded-[68px] bg-[#42424273]">
          <img
            src={logoSearch}
            alt=""
            className=""
          />
          <input
            value={searchContract}
            onChange={setContractInput}
            type="text"
            className="w-full placeholder:text-[#8F8E86] bg-transparent text-white outline-none"
            placeholder={
              isConnected
                ? isRegisted
                  ? "(Paste Smart Contract)"
                  : "Register to Search Contract"
                : "Connect To Search"
            }
          />
          <button
            onClick={fetchContractData}
            className="h-[31px] w-[31px]"
          >
            <img
              src={search}
              alt=""
            />
          </button>
        </div>

        {/* Connect */}
        <button
          onClick={connectWallet}
          className="text-white text-[22px] border-[1px] border-[#CCB03C] h-[50px] rounded-[12px] min-w-[275px] bg-[#f2d12f30] font-[700] leading-[33px]"
        >
          {isConnected ? shortAdd(address) : "Connect Wallet"}
        </button>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex flex-col max-w-screen-2xl w-full gap-[30px] justify-between p-3">
        {/* Logo */}
        <div className="w-full flex justify-between">
          <h1 className="flex items-center gap-4">
            <img
              src={logo}
              alt=""
              className="w-[137px]"
            />
          </h1>

          {/* Connect */}
          <button
            onClick={connectWallet}
            className="text-white text-[16px] border-[1px] border-[#CCB03C] h-[40px] rounded-[12px] w-[182px] bg-[#f2d12f30] font-[700] leading-[33px]"
          >
            {isConnected ? shortAdd(address) : "Connect Wallet"}
          </button>
        </div>

        {/* Input */}
        <div className="flex flex-col gap-[10px]">
          <img
            src={logoSearch}
            alt=""
            className="w-[119px]"
          />
          <div className="w-full h-[40px] gap-[10px] px-[20px] flex justify-between items-center rounded-[68px] bg-[#42424273]">
            <button
              onClick={fetchContractData}
              className="h-[31px] w-[31px]"
            >
              <img
                src={search}
                alt=""
              />
            </button>
            <input
              value={searchContract}
              onChange={setContractInput}
              type="text"
              className="w-full placeholder:text-[#8F8E86] bg-transparent text-white outline-none"
              placeholder={
                isConnected
                  ? isRegisted
                    ? "(Paste Smart Contract)"
                    : "Register to Search Contract"
                  : "Connect To Search"
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
