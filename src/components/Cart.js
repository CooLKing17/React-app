import React from 'react';

const Cart = () => {
    // Example cart items. In a real application, this would come from state or props.
    const cartItems = [
        { id: 1, name: 'Pizza', quantity: 2, price: 10 },
        { id: 2, name: 'Burger', quantity: 1, price: 5 },
        { id: 3, name: 'Pasta', quantity: 3, price: 7 },
    ];

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

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
                                <td className="p-2">{item.name}</td>
                                <td className="p-2">{item.quantity}</td>
                                <td className="p-2">${item.price * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-semibold">Total:</span>
                    <span className="text-xl font-semibold">${totalPrice}</span>
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
}

export default Cart;
