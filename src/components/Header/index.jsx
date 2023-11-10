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
      const response = await axios.get(
        `http://54.204.176.35:3000/is_registered?wallet_address=${address}`
      );

      setisRegisted(response.data.is_registered);
      console.log("resp 1", response.data.is_registered);
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

    try {
      const response = await axios.get(
        `http://54.204.176.35:3000/get_info?contract_address=${searchContract.toLocaleLowerCase()}`
      );

      const pricePred = await axios.get(
        `http://54.204.176.35:3000/get_prediction?contract_address=${searchContract.toLocaleLowerCase()}`
      );

      console.log("Data 1:", pricePred.data);
      console.log("Data 2:", pricePred.data.volume_24h);
      console.log("Data 3:", response.data);

      setRenounced(response.data.is_contract_renounced);
      setmint(response.data.no_mint_function);
      sethoneypot(response.data.not_a_honeypot);
      setverified(response.data.source_code_verified);

      setPredictions(pricePred.data.predictions);

      setVolume(pricePred.data.volume_24h);
    } catch (error) {
      console.log(error);
    }
  };

  const setContractInput = (e) => {
    setSearchContract(e.target.value);
  };

  useEffect(() => {
    if (!isConnected) return;
    fetchData();
  }, [isConnected]);

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
            type="text"
            className="w-full placeholder:text-[#8F8E86] bg-transparent text-white outline-none"
            onChange={setContractInput}
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
            <button className="h-[31px] w-[31px]">
              <img
                src={search}
                alt=""
              />
            </button>
            <input
              type="text"
              className="w-full placeholder:text-[#8F8E86] bg-transparent text-white outline-none"
              placeholder={true ? "wad" : "Connect To Search"}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
