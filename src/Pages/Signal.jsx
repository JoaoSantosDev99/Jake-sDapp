import { useContext } from "react";
import positive from "../Assets/positive.svg";
import { AppContext } from "../context/appContext";
import error from "../Assets/close.png";
const Signal = () => {
  const { predictions } = useContext(AppContext);

  return (
    <section className="px-[5px] w-full flex pb-[100px] justify-center mt-[130px]">
      <div className="max-w-screen-2xl w-full">
        <h2 className="uppercase mb-[24px] md:gap-[20px] gap-[10px] w-full flex xl:justify-start justify-center">
          <span className="md:text-[56px] text-[32px] font-[700] text-white">
            Aladdin’s
          </span>
          <span className="md:text-[56px] text-[32px] font-[700] text-[#DEC909]">
            signal
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center flex-wrap gap-[80px]">
          {/* Left Side */}

          {/* Desktop */}
          <div className="hidden lg:flex mt-[24px]">
            <div className="bg-gradient-to-r h-[3px] from-[#41FF76] to-[#CCB03C]"></div>
            <div className="w-[771px] h-[171px] p-[38px] rounded-b-[16px] bg-[#f2f2f20b]">
              <div className="flex items-center justify-between">
                {/* Titles */}
                <div className="flex flex-col gap-[37px]">
                  <h3 className="text-[20px] text-white font-[600]">
                    Time frame
                  </h3>

                  <h3 className="text-[20px] text-white font-[600]">
                    Predicted Price
                  </h3>
                </div>

                {/* Data */}
                <div className="flex flex-col">
                  {/* Days */}
                  <div className="flex font-[600] text-white gap-[44px] text-[20px]">
                    <span>1 day</span>
                    <span>2 day</span>
                    <span>3 day</span>
                    <span>4 day</span>
                    <span>5 day</span>
                  </div>

                  <div className="w-full my-[18px] border"></div>
                  {/* Prices */}
                  <div className="flex font-[600] text-white gap-[24px] text-[20px]">
                    {/* First */}
                    <div className="w-full text-end">
                      {predictions?.length !== 0 ? (
                        <span className="text-[#40FD47] text-[20px] font-[600]">
                          {Number(predictions.day_1.prediction).toFixed(4)}
                        </span>
                      ) : (
                        <span className="text-[#a4a4a4] text-[20px] font-[600]">
                          N.A
                        </span>
                      )}
                    </div>

                    {/* Second */}
                    <div className=" w-full text-end">
                      {" "}
                      {predictions?.length !== 0 ? (
                        Number(predictions.day_1.prediction) >=
                        Number(predictions.day_2.prediction) ? (
                          <span className="text-[#fd4d40] text-[20px] font-[600]">
                            {Number(predictions.day_2.prediction).toFixed(4)}
                          </span>
                        ) : (
                          <span className="text-[#40FD47] text-[20px] font-[600]">
                            {Number(predictions.day_2.prediction).toFixed(4)}
                          </span>
                        )
                      ) : (
                        <span className="text-[#a4a4a4] text-[20px] font-[600]">
                          N.A
                        </span>
                      )}
                    </div>

                    {/* Third */}
                    <div className=" w-full text-end">
                      {" "}
                      {predictions?.length !== 0 ? (
                        Number(predictions.day_2.prediction) >=
                        Number(predictions.day_3.prediction) ? (
                          <span className="text-[#fd4d40] text-[20px] font-[600]">
                            {Number(predictions.day_3.prediction).toFixed(4)}
                          </span>
                        ) : (
                          <span className="text-[#40FD47] text-[20px] font-[600]">
                            {Number(predictions.day_3.prediction).toFixed(4)}
                          </span>
                        )
                      ) : (
                        <span className="text-[#a4a4a4] text-[20px] font-[600]">
                          N.A
                        </span>
                      )}
                    </div>

                    {/* Fourth */}
                    <div className=" w-full text-end">
                      {" "}
                      {predictions?.length !== 0 ? (
                        Number(predictions.day_3.prediction) >=
                        Number(predictions.day_4.prediction) ? (
                          <span className="text-[#fd4d40] text-[20px] font-[600]">
                            {Number(predictions.day_4.prediction).toFixed(4)}
                          </span>
                        ) : (
                          <span className="text-[#40FD47] text-[20px] font-[600]">
                            {Number(predictions.day_4.prediction).toFixed(4)}
                          </span>
                        )
                      ) : (
                        <span className="text-[#a4a4a4] text-[20px] font-[600]">
                          N.A
                        </span>
                      )}
                    </div>

                    {/* Fith */}
                    <div className=" w-full text-end">
                      {" "}
                      {predictions?.length !== 0 ? (
                        Number(predictions.day_4.prediction) >=
                        Number(predictions.day_5.prediction) ? (
                          <span className="text-[#fd4d40] text-[20px] font-[600]">
                            {Number(predictions.day_5.prediction).toFixed(4)}
                          </span>
                        ) : (
                          <span className="text-[#40FD47] text-[20px] font-[600]">
                            {Number(predictions.day_5.prediction).toFixed(4)}
                          </span>
                        )
                      ) : (
                        <span className="text-[#a4a4a4] text-[20px] font-[600]">
                          N.A
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex flex-col lg:hidden">
            <div className="bg-gradient-to-r h-[3px] from-[#41FF76] to-[#CCB03C]"></div>
            <div className="w-[342px] p-[38px] rounded-b-[16px] bg-[#f2f2f20b]">
              <div className="flex flex-col items-center justify-between">
                {/* Titles */}
                <div className="flex gap-[37px]">
                  <h3 className="text-[20px] text-white font-[600]">
                    Time frame
                  </h3>

                  <h3 className="text-[20px] text-white font-[600]">
                    Predicted Price
                  </h3>
                </div>

                {/* Data */}
                <div className="flex gap-10">
                  {/* Days */}
                  <div className="flex flex-col font-[600] text-white gap-[44px] text-[20px]">
                    <span>1 day</span>
                    <span>2 day</span>
                    <span>3 day</span>
                    <span>4 day</span>
                    <span>5 day</span>
                  </div>
                  <div className="border"></div>
                  {/* Prices */}
                  <div className="flex flex-col font-[600] text-white gap-[44px] text-[20px]">
                    <span className="text-[#40FD47] text-[20px] font-[600]">
                      0.043
                    </span>
                    <span className="text-[#40FD47] text-[20px] font-[600]">
                      0.043
                    </span>
                    <span className="text-[#40FD47] text-[20px] font-[600]">
                      0.043
                    </span>
                    <span className="text-[#40FD47] text-[20px] font-[600]">
                      0.043
                    </span>
                    <span className="text-[#40FD47] text-[20px] font-[600]">
                      0.043
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center lg:items-start gap-[20px]">
            <h2 className=" text-[24px] text-white font-[700]">
              Predicted Trendline
            </h2>

            {predictions !== "" ? (
              predictions?.day_5.prediction?.prediction >=
              predictions?.day_1.prediction?.prediction ? (
                <div className="text-white justify-center flex text-[18px] border-[1px] border-[#CCB03C] h-[50px] rounded-[102px] w-[324px] gap-[5px] items-center bg-[#f2d12f30] font-[700] leading-[33px]">
                  <img
                    src={positive}
                    alt=""
                  />{" "}
                  Positive Price Movement
                </div>
              ) : (
                <div className="text-red-500 justify-center flex text-[18px] border-[1px] border-[#cc603c] h-[50px] rounded-[102px] w-[324px] gap-[5px] items-center bg-[#f26d2f30] font-[700] leading-[33px]">
                  <img
                    src={error}
                    alt=""
                    className="w-[25px]"
                  />{" "}
                  Negative Price Movement
                </div>
              )
            ) : (
              <div className="justify-center flex text-[18px] border-[1px] border-[#bcbcbc] h-[50px] rounded-[102px] w-[324px] gap-[5px] items-center bg-[#aaaaaa30] font-[700] leading-[33px]">
                Not Available
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signal;
