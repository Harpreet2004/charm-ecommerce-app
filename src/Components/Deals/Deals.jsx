import { Link } from "react-router";
import DealsSlider from "../DealsSlider/DealsSlider";

const Deals = () => {
    return (
        <div className="w-full bg-white mt-[100px] py-10">
            <div className="lg:container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    {/* deals text section */}
                    <div className="deals_wrapper flex-1">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#484848] font-normal capitalize mb-5">
                            🌟 Deals of the Month! 🌟
                        </h3>
                        <p className="text-base text-[#8a8a8a] font-poppins font-normal mb-8 max-w-[444px]">
                            Limited-time only! Deals expire at the end of the month — don’t miss out!
                        </p>
                        <Link
                            to={"/shop"}
                            className="text-base text-white font-poppins capitalize px-6 py-2.5 bg-black rounded-lg inline-block mb-10"
                        >
                            buy now
                        </Link>

                        {/* timer */}
                        <div className="mt-8">
                            <h5 className="text-2xl md:text-[27px] text-[#484848] font-poppins font-medium capitalize mb-4">
                                hurry, before it's too late!
                            </h5>
                            <div className="flex flex-wrap md:flex-nowrap items-center gap-6">
                                {["02", "06", "05", "30"].map((value, index) => {
                                    const labels = ["days", "hr", "mins", "sec"];
                                    return (
                                        <div key={index} className="flex flex-col items-center justify-center gap-2.5">
                                            <h5 className="w-[70px] h-[70px] md:w-[76px] md:h-[76px] rounded-sm bg-white shadow text-[#484848] text-2xl md:text-3xl font-normal flex items-center justify-center">
                                                {value}
                                            </h5>
                                            <p className="text-lg md:text-[22px] text-[#484848] font-poppins font-normal capitalize">
                                                {labels[index]}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* slider section */}
                    <div className="flex-1 overflow-hidden">
                        <DealsSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deals;
