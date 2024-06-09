import React from 'react';

const Login = () => {
    return (
        <div className="p-6 pt-16 mt-12 max-w-md mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
            <form className="space-y-4">
                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-1" htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        type="email" 
                        placeholder="Email" 
                        className="w-full p-3 border border-gray-300 rounded-md" 
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-1" htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        placeholder="Password" 
                        className="w-full p-3 border border-gray-300 rounded-md" 
                    />
                </div>
                <div className="flex justify-end">
                    <a 
                        href="#"
                        className="text-blue-500 hover:underline"
                    >
                        Forgot Password?
                    </a>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
