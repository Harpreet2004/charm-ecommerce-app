import { useState } from "react";
import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router";

const Cart = () => {

    const carts = [
        {
            id: '01',
            name: 'Jacket',
            image: '/products/product_1.jpg',
            price: 150,
            size: 'M',
            color: 'red',
            quantity: 1
        },
        {
            id: '02',
            name: 'Coat',
            image: '/products/product_2.jpg',
            price: 120,
            size: 'S',
            color: 'green',
            quantity: 5,
        },
        {
            id: '03',
            name: 'Elegant Outfit',
            image: '/products/product_3.jpg',
            price: 90,
            size: 'L',
            color: 'blue',
            quantity: 2,
            discount: 33,
            deliveryFee: 15
        },
    ];

    const [quantities, setQuantities] = useState(
        carts.reduce((acc, item) => {
            acc[item.id] = item?.quantity;
            return acc;
        }, {})
    );

    const handleIncrease = (id) => {
        setQuantities(prev => ({
            ...prev,
            [id]: prev[id] + 1
        }));
    };

    const handleDecrease = (id, quantity) => {
        setQuantities(prev => ({
            ...prev,
            [id]: prev[id] > 1 ? prev[id] - 1 : quantity
        }));
    };

    const calculateTotal = (cartItems) => {
        return cartItems.reduce((acc, item) => {
            const quantity = quantities[item.id] || 1;
            const basePrice = item.price * quantity;
            const discountPrice = item?.discount ? ((basePrice * item.discount) / 100) : 0;
            const deliveryFee = item?.deliveryFee || 0;
            const finalPrice = basePrice - discountPrice + deliveryFee;
            return {
                totalPrice: acc.totalPrice + finalPrice,
                subtotalPrice: acc.subtotalPrice + basePrice,
                discount: acc.discount + discountPrice,
                deliveryFee: acc.deliveryFee + deliveryFee,
            };
        }, {
            totalPrice: 0,
            subtotalPrice: 0,
            discount: 0,
            deliveryFee: 0,
        });
    };

    const { totalPrice, subtotalPrice, discount, deliveryFee } = calculateTotal(carts);

    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className="container mx-auto">

                
                <div className='mb-14 text-center'>
                    <h3 className='text-4xl text-black font-poppins font-semibold capitalize'>Your Cart</h3>
                </div>

                
                <div className="flex flex-col lg:flex-row items-start justify-between gap-8">

                    
                    <div className="w-full lg:w-2/3 flex flex-col gap-5">
                        {
                            carts.map((item) => (
                                <div key={item?.id} className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[#dadada] rounded-lg p-4'>
                                    
                                    
                                    <div className='flex flex-col sm:flex-row gap-4 w-full'>
                                        <div className='w-full sm:w-[124px] h-[124px] bg-[#f0eeed] rounded-lg p-2 flex items-center justify-center'>
                                            <img src={item?.image} className='object-contain w-full h-full rounded-lg' alt={item?.name} />
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <h4 className='text-xl text-black font-poppins font-medium capitalize'>{item?.name}</h4>
                                            <p className='text-base text-black capitalize'>Size: <span className='inline-block w-10 h-10 bg-[#dadada] rounded-sm text-center leading-10 font-medium'>{item?.size}</span></p>
                                            <p className='text-base text-black capitalize'>Color: <span className='inline-block w-10 h-10 rounded-full' style={{ backgroundColor: item?.color }}></span></p>
                                        </div>
                                    </div>

                                    
                                    <div className='flex flex-col items-end gap-4 w-full sm:w-auto'>
                                        <button className='cursor-pointer'><FaRegTrashAlt color='red' size={'1.5rem'} /></button>

                                        <div className="flex items-center gap-3 border border-[#eeeeee] px-3 py-1 rounded">
                                            <button onClick={() => handleDecrease(item?.id, item?.quantity)} className='cursor-pointer'><FaMinus size={'1.25rem'} /></button>
                                            <input type="number" readOnly value={quantities[item?.id]} className='w-[50px] text-center text-black' min={1} />
                                            <button onClick={() => handleIncrease(item?.id)} className='cursor-pointer'><FaPlus size={'1.25rem'} /></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                   
                    <div className="w-full lg:w-1/3 flex flex-col gap-6 border border-[#dadada] rounded-lg p-5">
                        <h3 className="text-2xl font-poppins font-semibold text-black capitalize">Order Summary</h3>

                        <div className="flex justify-between">
                            <span className="text-lg font-medium">Subtotal</span>
                            <span className="text-lg">₹7,000</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-lg font-medium">Discount</span>
                            <span className="text-lg text-red-500">-₹1,000</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-lg font-medium">Delivery Fee</span>
                            <span className="text-lg">₹0.00</span>
                        </div>

                        <div className="flex justify-between border-t pt-4 mt-2">
                            <span className="text-xl font-semibold">Total</span>
                            <span className="text-xl font-semibold">₹6,000</span>
                        </div>

                        <button className="w-full h-12 mt-4 bg-black text-white text-lg rounded-2xl hover:opacity-90">
                            <Link to="/checkout">Go to Checkout</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
