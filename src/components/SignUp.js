import React from "react";

const SignUp = () => {
  return (
    <div className="p-6 pt-16 mt-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-1" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-1" htmlFor="mobileNumber">
            Mobile Number
          </label>
          <input
            id="mobileNumber"
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-1" htmlFor="address">
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Address"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-1" htmlFor="pinCode">
            Pin Code
          </label>
          <input
            id="pinCode"
            type="text"
            placeholder="Pin Code"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-lg font-semibold mb-1"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
