import ProductFilter from "../../Components/ProductFilter/ProductFilter";
import ProductCard from './../../Components/ProductCard/ProductCard';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const Product = () => {

    const products = [
        {
            productId: 1,
            productName: 'Jacket',
            price: 1400,
            image: '/products/product_1.jpg',
            color: [
                {
                    id: 1,
                    color: 'red'
                },
                {
                    id: 2,
                    color: 'blue'
                },
            ],
            stock: 10,
            brand: 'bewakoof',

        },
        {
            productId: 2,
            productName: 'Coat',
            price: 1200,
            image: '/products/product_2.jpg',
            color: [
                {
                    id: 1,
                    color: 'yellow'
                },
                {
                    id: 2,
                    color: 'green'
                },
            ],
            stock: 0,
            brand: 'bewakoof',

        },
        {
            productId: 3,
            productName: 'Elegant Outfit',
            price: 3000,
            image: '/products/product_3.jpg',
            color: [
                {
                    id: 1,
                    color: 'orange'
                },
                {
                    id: 2,
                    color: 'pink'
                },
            ],
            stock: 0,
            brand: 'denim',

        },
        {
            productId: 4,
            productName: 'Denim Jacket',
            price: 3100,
            image: '/products/product_4.jpg',
            color: [
                {
                    id: 1,
                    color: 'orange'
                },
                {
                    id: 2,
                    color: 'pink'
                },
            ],
            stock: 0,
            brand: 'gucci',

        },
        {
            productId: 5,
            productName: 'Levis Outfit',
            price: 2100,
            image: '/products/product_5.jpg',
            color: [
                {
                    id: 1,
                    color: 'blue'
                },
                {
                    id: 2,
                    color: 'green'
                },
            ],
            stock: 5,
            brand: 'levis',

        },
        {
            productId: 6,
            productName: 'White Jeans',
            price: 3250,
            image: '/products/product_6.jpg',
            color: [
                {
                    id: 1,
                    color: 'orange'
                },
                {
                    id: 2,
                    color: 'pink'
                },
            ],
            stock: 20,
            brand: 'gucci',

        },
        {
            productId: 7,
            productName: 'Shirt with Jacket',
            price: 2999,
            image: '/products/product_7.jpg',
            color: [
                {
                    id: 1,
                    color: 'red'
                },
                {
                    id: 2,
                    color: 'pink'
                },
            ],
            stock: 0,
            brand: 'levis',

        },
        {
            productId: 8,
            productName: 'Casual Outfit',
            price: 1999,
            image: '/products/product_8.jpg',
            color: [
                {
                    id: 1,
                    color: 'blue'
                },
                {
                    id: 2,
                    color: 'orange'
                },
            ],
            stock: 0,
            brand: 'denim',

        },
        {
            productId: 9,
            productName: 'Denim Jacket',
            price: 4999,
            image: '/products/product_9.jpg',
            color: [
                {
                    id: 1,
                    color: 'red'
                },
                {
                    id: 2,
                    color: 'green'
                },
            ],
            stock: 3,
            brand: 'denim',

        },
    ]

    return (
        <div className="w-full pt-[50px]">
            <div className="lg:container mx-auto ">
                {/* section header  */}
                <div className="pb-[100px] w-full flex items-center justify-center">
                    <h3 className="text-3xl text-black font-normal capitalize">fashion</h3>
                </div>


                {/* product wrapper */}
                <div className="flex justify-between gap-10 pb-[70px] max-md:flex-col max-md:items-center max-md:justify-center">
                    {/* filter wrapper  */}
                    <ProductFilter />

                    {/* products wrapper  */}
                    <div className="w-full h-auto flex flex-col gap-8 items-center">

                        {/* product header  */}
                        <div className="flex items-center justify-between gap-16">
                            <h3 className="text-2xl text-black font-normal capitalize">products</h3>
                        </div>

                        {/* product grid  */}
                        <div className='grid grid-cols-3 gap-6  max-[1276px]:grid-cols-2 max-lg:grid-cols-1'>
                            <ProductCard products={products} />
                        </div>
                    </div>
                </div>

                {/* pagination wrapper  */}
                <div className="flex items-center justify-center pb-[70px]">
                    <div className="flex items-center gap-5">
                        <button className="w-[56px] h-[56px] rounded-full bg-[#f3f3f3] flex items-center justify-center cursor-pointer max-[438px]:hidden"><IoIosArrowBack size={'1.5rem'} color="black" /></button>
                        <div className="flex items-center gap-5">
                            {
                                [...Array(5)]?.map((_, index) => (
                                    <button className="text-xl text-black font-medium w-[40px] h-[40px] flex items-center justify-center cursor-pointer" key={index}>{index+1}</button>
                                ))
                            }
                        </div>
                        <button className="w-[56px] h-[56px] rounded-full bg-[#f3f3f3] flex items-center justify-center cursor-pointer max-[438px]:hidden"><IoIosArrowForward size={'1.5rem'} color="black" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;