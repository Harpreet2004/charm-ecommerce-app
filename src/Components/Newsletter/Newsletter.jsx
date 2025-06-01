import React from 'react';

const Newsletter = () => {
    return (
        <div className="w-full bg-white pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                    {/* Left image */}
                    <div className="w-full max-w-[355px] h-auto lg:min-h-[747px]">
                        <img className="w-full h-full object-cover rounded-lg" src="/newsletter/newsletter_1.png" alt="newsletter image" />
                    </div>

                    {/* Middle form */}
                    <div className="w-full max-w-[631px] p-6 md:p-8 shadow-2xl rounded-xl flex flex-col items-center text-center gap-5">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#484848] font-normal capitalize">
                            subscribe to our newsletter! 📩
                        </h1>
                        <p className="text-sm sm:text-base text-[#8a8a8a] font-poppins font-normal capitalize">
                            Stay updated — subscribe now
                        </p>

                        <form className="w-full flex flex-col gap-4 sm:gap-6">
                            <input
                                className="w-full h-[50px] sm:h-[56px] bg-[#d9d9d9] rounded-sm shadow pl-3 outline-none"
                                type="text"
                                placeholder="demo@gmail.com"
                            />
                            <button
                                type="submit"
                                className="text-base sm:text-xl text-white font-medium font-poppins capitalize px-6 py-2 bg-black rounded-lg max-w-[207px] w-full h-[50px] sm:h-[56px] flex items-center justify-center mx-auto"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Right image */}
                    <div className="w-full max-w-[355px] h-auto lg:min-h-[747px]">
                        <img className="w-full h-full object-cover rounded-lg" src="/newsletter/newsletter_2.png" alt="newsletter image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
