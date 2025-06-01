import { Link } from "react-router";

const Banner = () => {
    return (
        <div className="w-full pt-[90px]">
            <div className="lg:container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    {/* Left side */}
                    <div className="w-full lg:w-1/3 min-h-[300px] lg:min-h-[756px] bg-[#e0e0e0] rounded-lg flex items-end justify-center">
                        <img src="/banner/banner_1.png" alt="" className="max-h-full object-contain" />
                    </div>

                    {/* Middle side */}
                    <div className="w-full lg:w-1/3 flex flex-col items-center justify-between gap-4 min-h-[300px] lg:min-h-[756px]">
                        <div className="w-full min-h-[150px] bg-[#e0e0e0] rounded-lg flex items-center justify-center">
                            <img
                                className="w-full h-full object-cover rounded-lg"
                                src="/banner/banner_2.png"
                                alt=""
                            />
                        </div>

                        <div className="text-center">
                            <h3 className="text-[#484848] text-4xl md:text-5xl lg:text-[75px] font-poppins font-medium uppercase leading-tight">
                                ultimate <br />
                                <span className="text-white text-stroke text-[60px] md:text-[100px] lg:text-[145px]">sale</span>
                            </h3>
                            <p className="text-[#484848] text-base md:text-lg lg:text-xl font-normal font-poppins uppercase mb-4">
                                new collection
                            </p>
                            <Link
                                to={"/products"}
                                className="text-white font-poppins font-medium px-6 py-2.5 bg-black rounded-lg inline-block text-base md:text-lg uppercase mb-4 hover:opacity-80 hover:transition-all hover:duration-300"
                            >
                                shop now 🚀
                            </Link>
                        </div>

                        <div className="w-full min-h-[150px]">
                            <img
                                className="w-full h-full object-cover rounded-lg"
                                src="/banner/banner_3.png"
                                alt=""
                            />
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="w-full lg:w-1/3 min-h-[300px] lg:min-h-[756px] bg-[#e0e0e0] rounded-lg flex items-end justify-center">
                        <img src="/banner/banner_4.png" alt="" className="max-h-full object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
