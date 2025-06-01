import { FaStar } from "react-icons/fa";
const NewArrival = () => {

    const newArrivalsCategories = [
        {
            id: 1,
            name: "men's fashion",
            category: "men"
        },
        {
            id: 2,
            name: "women's fashion",
            category: "women"
        },
        {
            id: 3,
            name: "women accessories",
            category: "women_accessories"
        },
        {
            id: 4,
            name: "men accessories",
            category: "men_accessories"
        },
        {
            id: 4,
            name: "discount deals",
            category: "discount_deals"
        },
    ];

    const newArrivalProducts = [
        {
            id: 1,
            name: 'shiny dress',
            description: 'Shiny, glamorous, sparkly, elegant, bold.',
            price: 2200,
            image: '/arrivals/arrival_1.png',
            rating: 4.5,
            stock: 10,
        },
        {
            id: 2,
            name: 'long dress',
            description: 'Elegant, flowing, full-length attire.',
            price: 3000,
            image: '/arrivals/arrival_2.png',
            rating: 5,
            stock: 5,
        },
        {
            id: 3,
            name: 'full sweater',
            description: 'Warm, cozy, long-sleeved knit.',
            price: 1900,
            image: '/arrivals/arrival_3.png',
            rating: 3.5,
            stock: 15,
        },
        {
            id: 4,
            name: 'white dress',
            description: 'Elegant, bright, pure, flowing garment.',
            price: 1950,
            image: '/arrivals/arrival_4.png',
            rating: 3,
            stock: 1,
        },
        {
            id: 5,
            name: 'colorful dress',
            description: 'Vibrant, multi-colored, eye-catching outfit.',
            price: 4000,
            image: '/arrivals/arrival_5.png',
            rating: 2,
            stock: 1,
        },
        {
            id: 6,
            name: 'white shirt',
            description: 'Classic, crisp, clean, formal top.',
            price: 2500,
            image: '/arrivals/arrival_6.png',
            rating: 2.5,
            stock: 0,
        },
    ];

    return (
        <div className="w-full bg-white pt-[100px] pb-[100px] overflow-x-hidden">
            <div className="max-w-screen-xl mx-auto px-4">

                {/* header title  */}
                <div className="text-center mb-10">
                    <h3 className="text-3xl text-[#484848] font-normal capitalize mb-5">✨ Just In: New Arrivals! ✨</h3>
                    <p className="text-base text-[#8a8a8a] font-poppins font-normal">
                        Fresh styles. Latest trends. Hot picks.
                    </p>
                </div>

                {/* categories  */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10">
                    {
                        newArrivalsCategories.map((category) => (
                            <button
                                key={category.id}
                                className={`text-base font-poppins font-normal capitalize cursor-pointer ${category.id === 2
                                    ? 'px-6 py-2.5 bg-black rounded-sm text-white'
                                    : 'text-[#8a8a8a]'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))
                    }
                </div>

                {/* products grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        newArrivalProducts.map((product) => (
                            <div key={product.id} className="bg-white shadow-lg p-5 rounded-md max-[397px]:pb-[50px] max-[350px]:pb-[70px] max-md:pb-[4.4rem] max-[1160px]:pb-[4.4rem]">
                                <div className="w-full max-h-[244px] h-full mb-2.5">
                                    <img
                                        className="w-full h-full object-cover rounded-md"
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </div>
                                <div>
                                    <div className="flex items-start justify-between gap-4 max-[779px]:flex-col">
                                        <div>
                                            <h4 className="text-xl text-[#484848] font-poppins font-medium capitalize mb-2">
                                                {product.name}
                                            </h4>
                                            <p className="text-base text-[#8a8a8a] font-poppins font-normal">
                                                {product.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1 flex-shrink-0">
                                            {
                                                [...Array(Math.ceil(product.rating))].map((_, index) => (
                                                    <span key={index}>
                                                        <FaStar size="1.5rem" color="#fca120" />
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-5">
                                        <p className="text-2xl text-[#484848] font-poppins font-medium">
                                            ₹{product.price}
                                        </p>
                                        {
                                            product.stock > 0 ? (
                                                <span className="text-base text-[#ff4646] font-poppins capitalize font-normal">
                                                    stock: {product.stock}
                                                </span>
                                            ) : (
                                                <span className="text-base text-[#ff4646] font-poppins capitalize font-normal">
                                                    almost sold out
                                                </span>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* view more button */}
                <div className="mt-10 flex items-center justify-center">
                    <button className="text-base text-white font-poppins font-normal capitalize px-8 py-2.5 bg-black rounded-md cursor-pointer">
                        view more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;