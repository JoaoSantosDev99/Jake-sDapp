import { useAccount, useNetwork, useSigner, useSwitchNetwork } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { shortAdd } from "../../utils";

import search from "../../Assets/search.svg";
import logoSearch from "../../Assets/searchLogo.svg";
import logo from "../../Assets/Logo.svg";

const Header = () => {
  const { open } = useWeb3Modal();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const { address, isConnected } = useAccount();

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
            type="text"
            className="w-full placeholder:text-[#8F8E86] bg-transparent text-white outline-none"
            placeholder="(Paste Smart Contract)"
          />
          <button className="h-[31px] w-[31px]">
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
              placeholder="(Paste Smart Contract)"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
