import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ products }) => {
    return (
        <>
            {
                products?.map((product) => (
                    <div
                        key={product?.productId}
                        className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow-md min-w-[280px] w-full max-w-sm mx-auto"
                    >
                        {/* Image Wrapper */}
                        <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative overflow-hidden rounded-lg">
                            <img
                                src={product?.image}
                                className="w-full h-full object-cover"
                                alt={product?.productName}
                            />
                            {
                                product?.stock === 0 &&
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full bg-[#b1b1b1] flex items-center justify-center">
                                    <span className="text-sm text-white font-semibold font-poppins capitalize">sold out</span>
                                </div>
                            }
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col gap-2">
                            <h4 className="text-lg sm:text-xl md:text-2xl text-black font-normal capitalize">
                                {product?.productName}
                            </h4>
                            <p className="text-base text-black font-poppins font-normal capitalize">
                                ₹{product?.price}
                            </p>

                            <div className="flex items-center justify-between flex-wrap gap-3">
                                {/* Color Options */}
                                <div className="flex gap-2 flex-wrap">
                                    {
                                        product?.color?.map((colorItem) => (
                                            <button
                                                key={colorItem?.id}
                                                className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] rounded-full border border-gray-300"
                                                style={{ backgroundColor: colorItem?.color }}
                                            ></button>
                                        ))
                                    }
                                </div>

                                {/* View Details Link */}
                                <div>
                                    <Link
                                        to={`/products/${product?.productId}`}
                                        className="text-sm sm:text-base text-black font-poppins font-medium capitalize border-b-2 border-[#484848]"
                                    >
                                        view details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default ProductCard;
