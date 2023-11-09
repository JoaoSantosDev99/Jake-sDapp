import positive from "../Assets/positive.svg";

const Signal = () => {
  return (
    <section className="w-full flex pb-[100px] justify-center mt-[130px]">
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
                  <div className="flex font-[600] text-white gap-[44px] text-[20px]">
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
            <button className="text-white justify-center flex text-[18px] border-[1px] border-[#CCB03C] h-[50px] rounded-[102px] w-[324px] gap-[5px] items-center bg-[#f2d12f30] font-[700] leading-[33px]">
              <img
                src={positive}
                alt=""
              />{" "}
              Positive Price Movement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signal;
