import React, { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem,deleteItem ,clearCart } from './Utilites/CartSilce';
const Cart = () => {
    const [total , setTotal]=useState()
    const [count , setCount]=useState()
        const cartItems = useSelector(store => store.cart.items);
        const dispatch =useDispatch()
   
       const [val ] =useState(2)
        const fun =(val)=>{
            console.log(val)
            dispatch(addItem(val))
        }

        const remove=(val)=>{
            dispatch(removeItem(val))
        }

        const clean =(item)=>{
            console.log("in")
            dispatch(clearCart(item))
        }
   
        const deletePro =(item)=>{
            console.log(item)
            dispatch(deleteItem(item))
        }
        console.log("rendering ...")
        useEffect(() => {
            let totalPrice = 0;
            let totalCount =0;
            cartItems.forEach(item => {
                totalPrice += item.price ? Math.round((item.price / 100) * item.quantity) : Math.round((item.defaultPrice / 100) * item.quantity);
                totalCount += item.quantity
            });
            setTotal(totalPrice);
            setCount(totalCount);
           
        }, [cartItems]);
        
    return (
        <div className="p-6 pt-16 mt-12 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Cart</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <table className="w-full mb-6">
                    <thead>
                        <tr>
                            <th className="text-left font-semibold text-lg p-2">Item</th>
                            <th className="text-left font-semibold text-lg p-2 pr-6">Quantity</th>
                            <th className="text-left font-semibold text-lg p-2 pr-10">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id} className="border-t">
                                <td  className="p-2">{item.name}</td>
                                <td   className="p-2 text">{item.quantity}</td>
                                <td  className="p-2">₹ { item.price? Math.round((item.price/100)*item.quantity): Math.round((item.defaultPrice/100)*item.quantity)   }</td>
                                <td className='bg-slate-200 rounded-3xl w-16 h-8 p-1 m-2 flex '>
                                <button onClick={()=>{fun(item)}} className=' bg-cyan-300 w-6 h-6 rounded-full hover:bg-teal-700 mr-1 '>+</button>
                                <button onClick={()=>{remove(item)}} className=' bg-cyan-300 w-6 h-6 rounded-full hover:bg-teal-700 ml-1' >-</button>
                                </td>
                                <td className='m-2 w-28 '><button onClick={()=>{deletePro(item)}} className='flex justify-center items-center ml-2 py-1 bg-cyan-300 w-24 rounded-full hover:bg-teal-700' >Delete item</button></td>
                             
            
                                
                                   
                                
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
                <div className=" grid  grid-flow-col mb-6">
                    <span className="text-xl font-semibold ">Total:  </span>
                    <span className="text-xl font-semibold  ml-12"> {count}  </span>
                    <span className="text-xl font-semibold  ml-16">₹ {total}</span><span className="text-xl font-semibold  " >
                    <button onClick={()=>{clean()}} className='  float-end mr-1 ml-2 py-1 bg-cyan-300 w-24 rounded-full hover:bg-teal-700'  >Clear Cart</button></span>
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
