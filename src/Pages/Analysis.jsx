import vol from "../Assets/volume.svg";
import correct from "../Assets/Correct.svg";
import PieChart from "../components/PieChart";
import error from "../Assets/close.png";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import empty from "../Assets/question.png";

const Analysis = () => {
  const {
    volume,
    renounced,
    mint,
    honeypot,
    verified,
    tokenScore,
    pairAge,
    ticker,
    buyTax,
    sellTax,
  } = useContext(AppContext);

  return (
    <section className="w-full px-[5px] flex justify-center items-center sm:mt-[130px] mt-[50px]">
      <div className="max-w-screen-2xl flex flex-col justify-center items-center w-full">
        <h2 className="uppercase md:gap-[20px] gap-[10px] mb-[24px] w-full flex xl:justify-start justify-center">
          <span className="md:text-[56px] text-[32px] font-[700] text-white">
            Aladdin’s{" "}
          </span>
          <span className="md:text-[56px] text-[32px] font-[700] text-[#DEC909]">
            analysis{" "}
          </span>
        </h2>

        <div className="flex flex-wrap w-full gap-[80px] justify-center xl:justify-start items-center">
          {/* Left Side */}
          <div className="max-w-[621px] w-full flex flex-wrap justify-center items-center gap-[20px]">
            {/* Card */}
            <div className="max-w-[360px] w-full px-[44px] py-[27px] max-h-[226px] bg-[#f2f2f20d] rounded-[16px]">
              <h3 className="sm:text-[24px] text-[20px] text-white font-[700] mb-[23px]">
                Pair Info
              </h3>
              <div className="flex flex-col gap-[12px]">
                <p className="flex gap-5">
                  <span className="text-[#8E8E8E] font-normal sm:leading-[27px] text-[16px] sm:text-[18px]">
                    Renounced:
                  </span>

                  {renounced === "" ? (
                    <span className="text-[#adadad] font-[700] sm:leading-[27px] text-[16px] ms:text-[18px]">
                      Info. N.A
                    </span>
                  ) : renounced ? (
                    <span className="text-[#6BF64F] font-[700] sm:leading-[27px] text-[16px] ms:text-[18px]">
                      Contract Renounced{" "}
                    </span>
                  ) : (
                    <span className="text-[#f64f57] font-[700] sm:leading-[27px] text-[16px] ms:text-[18px]">
                      Contract Not Ren.{" "}
                    </span>
                  )}
                </p>
                <p className="flex gap-5">
                  <span className="text-[#8E8E8E] font-normal sm:leading-[27px] text-[16px] sm:text-[18px]">
                    Buy Taxes:
                  </span>
                  <span className="text-[#DEC909] font-[700] sm:leading-[27px] text-[16px] ms:text-[18px]">
                    <img
                      src={buyTax === "" ? empty : honeypot ? correct : error}
                      alt=""
                      className="h-[25px] w-[25px]"
                    />
                  </span>
                </p>

                <p className="flex gap-5">
                  <span className="text-[#8E8E8E] font-normal sm:leading-[27px] text-[16px] sm:text-[18px]">
                    Sell Taxes:
                  </span>
                  <span className="text-[#DEC909] font-[700] sm:leading-[27px] text-[16px] ms:text-[18px]">
                    <img
                      src={sellTax === "" ? empty : honeypot ? correct : error}
                      alt=""
                      className="h-[25px] w-[25px]"
                    />
                  </span>
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col max-w-[290px] sm:max-w-none w-full sm:w-fit items-start gap-[26px]">
              {/* Volume */}
              <div>
                <h3 className="text-white font-[700] text-[20px] sm:text-[24px] leading-[36px]">
                  Volume
                </h3>
                <div className="flex items-center gap-[12px]">
                  {/* img */}
                  <div className="flex justify-center items-center rounded-[14px] w-[60px] h-[60px] bg-[#b0b0b010]">
                    <img
                      src={vol}
                      alt=""
                    />
                  </div>

                  {/* text */}
                  <div className="flex flex-col text-white">
                    <span className="font-[500] text-[14px] leading-[21px]">
                      24 hour volume (USD)
                    </span>
                    <span className="font-[700] text-[24px] leading-[30px]">
                      {volume === "" ? "N.A" : volume}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pair Age */}
              <div>
                <h3 className="text-white font-[700] text-[20px] sm:text-[24px] leading-[36px]">
                  Pair Age
                </h3>
                <div className="flex items-center gap-[12px]">
                  {/* img */}
                  <div className="flex justify-center items-center rounded-[14px] w-[60px] h-[60px] bg-[#b0b0b010]">
                    <img
                      src={vol}
                      alt=""
                    />
                  </div>

                  {/* text */}
                  <div className="flex flex-col text-white">
                    <span className="font-[500] text-[14px] leading-[21px]">
                      {ticker === "" ? "N.A" : ticker}/weth
                    </span>
                    <span className="font-[700] text-[24px] leading-[30px]">
                      {pairAge === 0 ? "N.A " : pairAge} Days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex max-w-[595px] w-full flex-wrap justify-center items-center gap-[30px]">
            {/* Chart */}
            <div className="relative flex justify-center items-center w-[223px]">
              <PieChart percentage={tokenScore} />
              <div className="absolute text-white text-[66px] flex justify-center items-center rounded-full bg-[#161616] h-[150px] w-[150px]">
                {tokenScore === -1 ? "N.A" : tokenScore}
              </div>
            </div>
            {/* Check Boxes */}
            <div className="flex max-w-[336px] w-full flex-col relative">
              <div className="w-full h-[227px] gap-[26px] justify-center flex flex-col items-center bg-[#f2f2f20d] rounded-[16px]">
                {/* Honeypot */}
                <span className="font-[600] text-[18px] max-w-[250px] w-full justify-between text-white flex gap-2">
                  Not a HoneySpot
                  <img
                    src={honeypot === "" ? empty : honeypot ? correct : error}
                    alt=""
                    className="h-[35px] w-[35px]"
                  />
                </span>

                {/* Source Code */}
                <span className="font-[600] text-[18px] max-w-[250px] w-full justify-between text-white flex gap-2">
                  Source code verified
                  <img
                    src={verified === "" ? empty : verified ? correct : error}
                    alt=""
                    className="h-[35px] w-[35px]"
                  />
                </span>

                {/* No Mint */}
                <span className="font-[600] text-[18px] max-w-[250px] w-full justify-between text-white flex gap-2">
                  No mint function
                  <img
                    src={mint === "" ? empty : mint ? error : correct}
                    alt=""
                    className="h-[35px] w-[35px]"
                  />
                </span>
              </div>
              <span className="text-end mt-3 right-0 -bottom-8 absolute underline text-[#B9B9B7]">
                View more
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
