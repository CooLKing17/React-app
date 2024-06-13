import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
   
    const cartItems = useSelector(store => store.cart.items);
    const ref = useRef(1)
    // Group items by their ID and accumulate quantities
    const groupedItems = cartItems.reduce((acc, item) => {
        const foundItem = acc.find(i => i.id === item.id);
        if (foundItem) {
            ref.current +=1;
        } else {
            acc.push({ ...item });
        }
        return acc;
    }, []);

    // Calculate total price
    const totalPrice = groupedItems.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <div className="p-6 pt-16 mt-12 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Cart</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <table className="w-full mb-6">
                    <thead>
                        <tr>
                            <th className="text-left font-semibold text-lg p-2">Item</th>
                            <th className="text-left font-semibold text-lg p-2">Quantity</th>
                            <th className="text-left font-semibold text-lg p-2">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id} className="border-t">
                                <td  className="p-2">{item.name}</td>
                                <td  className="p-2">{}</td>
                                <td  className="p-2">₹ {item.price? item.price/100 : item.defaultPrice/100 }</td>
                                <td className='bg-slate-200 rounded-3xl w-16 h-8 p-1 m-2 flex '>
                                <button className=' bg-cyan-300 w-6 h-6 rounded-full hover:bg-teal-700 mr-1 '>+</button>
                                <button className=' bg-cyan-300 w-6 h-6 rounded-full hover:bg-teal-700 ml-1' >-</button>
                                </td>
                                <td className='m-2 w-28 '><button className='flex justify-center items-center ml-2 py-1 bg-cyan-300 w-24 rounded-full hover:bg-teal-700' >Delete item</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-semibold">Total:</span>
                    <span className="text-xl font-semibold">₹ {totalPrice}</span>
                    <button className='flex justify-center items-center ml-2 py-1 bg-cyan-300 w-24 rounded-full hover:bg-teal-700' >Clear Cart</button>
                </div>
                <button 
                    type="button" 
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
